import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

export default function ProfileDetail() {
    const [data, setData] = useState(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            console.error('No token found');
            return;
        }
        axios.get('http://localhost:7001/user/profile', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            setData(res.data.data);
            setUserData({
                name: res.data.data.name,
                email: res.data.data.email,
                oldPassword: '',
                newPassword: '',
                confirmPassword: ''
            });
        })
        .catch((err) => console.error('Error fetching profile data:', err));
    }, []);

    // Yup validation schema
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        oldPassword: Yup.string().required('Old password is required'),
        newPassword: Yup.string()
            .required('New password is required')
            .min(6, 'New password must be at least 6 characters long'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
            .required('Confirm password is required')
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        // Validate user input
        try {
            await validationSchema.validate(userData, { abortEarly: false });

            const token = localStorage.getItem('jwtToken');
            if (!token) {
                setError('No token found. Please log in again.');
                return;
            }

            // Profile update request
            await axios.put('http://localhost:7001/user/profile', {
                name: userData.name,
                email: userData.email
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            // Password reset request if needed
            if (userData.oldPassword || userData.newPassword || userData.confirmPassword) {
                const response = await fetch('http://localhost:7001/user/reset', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        oldPassword: userData.oldPassword,
                        newPassword: userData.newPassword,
                        confirmPassword: userData.confirmPassword
                    })
                });

                const result = await response.json();
                setMessage(result.message);
            } else {
                setMessage('Profile updated successfully.');
            }
        } catch (validationErrors) {
            if (validationErrors.inner) {
                setError(validationErrors.inner.map(err => err.message).join(', '));
            } else {
                setError(validationErrors.message);
            }
        }
    };

    return (
        <>
            <Header />
            <div className='bg-red-300 h-[450px]'>
                <h1 className='text-center w-[500px] bg-green-500 font-bold text-[50px] ml-[500px] h-[80px]'>Reset Password</h1>
                <div className='p-[30px]'>
                    {data ? (
                        <form onSubmit={handleSubmit}>
                            <div className='mt-4'>
                                <input
                                    name="name"
                                    type="text"
                                    value={userData.name}
                                    onChange={handleChange}
                                    placeholder='Enter Name'
                                    className='border rounded px-2 py-1 w-full'
                                />
                                <input
                                    name="email"
                                    type="email"
                                    value={userData.email}
                                    onChange={handleChange}
                                    placeholder='Enter Email'
                                    className='border rounded px-2 py-1 w-full mt-2'
                                />
                                <input
                                    name="oldPassword"
                                    type="password"
                                    value={userData.oldPassword}
                                    onChange={handleChange}
                                    placeholder='Enter Old Password'
                                    className='border rounded px-2 py-1 w-full mt-2'
                                />
                                <input
                                    name="newPassword"
                                    type="password"
                                    value={userData.newPassword}
                                    onChange={handleChange}
                                    placeholder='Enter New Password'
                                    className='border rounded px-2 py-1 w-full mt-2'
                                />
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    value={userData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder='Confirm New Password'
                                    className='border rounded px-2 py-1 w-full mt-2'
                                />
                                <button type="submit" className='bg-red-600 p-3 mt-4'>Reset Password</button>
                            </div>
                            {message && <p className='text-green-500'>{message}</p>}
                            {error && <p className='text-red-500'>{error}</p>}
                        </form>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
