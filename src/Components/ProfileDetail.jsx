import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { useNavigate } from 'react-router-dom';

export default function ProfileDetail() {
    const [data, setData] = useState(null);
    const [userData, setUserData] = useState({ name: '', email: '', password: '' });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // For navigation

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
                email: res.data.data.email
               
            });
        })
        .catch((err) => console.error('Error fetching profile data:', err));
    }, []);

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

        const token = localStorage.getItem('jwtToken');
        if (!token) {
            setError('No token found. Please log in again.');
            return;
        }

        try {
            const response = await axios.put('http://localhost:7001/user/profile', userData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setMessage('Profile updated successfully.');
            setData(response.data.data);
            navigate('/profile');
        } catch (err) {
            setError('Error updating profile.');
            console.error('Error details:', err);
        }
    };

    const handleResetPassword = () => {
        navigate('/Reset'); // Navigate to the Reset Password page
    };

    return (
        <>
        <Header/>
            <div className='bg-red-300 h-[450px]'>
                <h1 className='text-center w-[500px] bg-green-500 font-bold text-[50px] ml-[500px] h-[80px]'>Profile Update</h1>
                <div className='p-[30px]'>
                    {data ? (
                        <>
                            <form onSubmit={handleSubmit}>
                                <ul>
                                    <li className='p-4'>
                                        <h4 className='m-1 font-bold'>Username</h4>
                                        <input
                                            name="name"
                                            value={userData.name}
                                            onChange={handleChange}
                                            placeholder='Enter Username'
                                            className='border rounded px-2 py-1 w-full'
                                        />
                                    </li>
                                    <li className='p-4'>
                                        <h4 className='m-1 font-bold'>Email</h4>
                                        <input
                                            name="email"
                                            value={userData.email}
                                            onChange={handleChange}
                                            placeholder='Enter Email'
                                            className='border rounded px-2 py-1 w-full'
                                        />
                                    </li>
                                </ul>
                                <button type="button" onClick={handleResetPassword} className='bg-red-600 p-3 mt-4 ml-4'>Reset Password</button>
                                <button type="submit"  className='bg-blue-400 px-4 ml-[500px] p-3 mr-[50px]'>Save</button>
                            </form>
                            {message && <p className='text-green-500'>{message}</p>}
                            {error && <p className='text-red-500'>{error}</p>}
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    );
}
