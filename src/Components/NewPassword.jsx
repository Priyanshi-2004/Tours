import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

export default function NewPassword() {

    const [data, setData] = useState(null);
    const [userData, setUserData] = useState({ name: '', email: '' });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [otpCode, setOtpCode] = useState(''); // State to hold OTP code

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            console.error('No token found');
            return;
        }
        axios.get('http://localhost:7001/profile', {
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
        .catch((err) => {
            console.error('Error fetching profile data:', err);
            setError('Error fetching profile data.');
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        if (name === 'oldPassword') setOldPassword(value);
        if (name === 'newPassword') setNewPassword(value);
        if (name === 'confirmPassword') setConfirmPassword(value);
        if (name === 'otpCode') setOtpCode(value); // Handle OTP code change
    };

    const validateForm = () => {
        if (!oldPassword || !newPassword || !confirmPassword || !otpCode) {
            setError('All fields are required.');
            return false;
        }
        if (newPassword.length < 8) {
            setError('New password must be at least 8 characters long.');
            return false;
        }
        if (!/[A-Z]/.test(newPassword) || !/[a-z]/.test(newPassword) || !/[0-9]/.test(newPassword)) {
            setError('New password must contain uppercase, lowercase letters, and numbers.');
            return false;
        }
        if (newPassword !== confirmPassword) {
            setError('New passwords do not match.');
            return false;
        }
        return true;
    };

    const handlePasswordReset = async () => {
        setMessage('');
        setError('');

        if (!validateForm()) {
            return;
        }

        try {
            const token = localStorage.getItem('jwtToken');
            if (!token) {
                setError('No token found. Please log in again.');
                return;
            }

            const response = await fetch('http://localhost:7001/Reset', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    email: userData.email,
                    otpcode: otpCode, // Include OTP code
                    newPassword
                })
            });

            if (!response.ok) {
                let errorMessage = 'An unexpected error occurred. Please try again.';
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorMessage;
                } catch (jsonError) {
                    errorMessage = await response.text();
                }
                throw new Error(errorMessage);
            }

            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            setError(error.message);
            console.error('Error details:', error);
        }
    };

    return (
        <>
            <Header />
            <div className='bg-red-300 h-[450px]'>
                <h1 className='text-center w-[500px] bg-green-500 font-bold text-[50px] ml-[500px] h-[80px]'>Reset Password</h1>
                <div className='p-[30px]'>
                    <div className='mt-4'>
                        {error && <p className='text-red-500'>{error}</p>}
                        {message && <p className='text-green-500'>{message}</p>}

                        <input
                            name="otpCode"
                            type="text"
                            value={otpCode}
                            onChange={handlePasswordChange}
                            placeholder='Enter OTP Code'
                            className='border rounded px-2 py-1 w-full'
                        />
                        <input
                            name="oldPassword"
                            type="password"
                            value={oldPassword}
                            onChange={handlePasswordChange}
                            placeholder='Enter Old Password'
                            className='border rounded px-2 py-1 w-full mt-2'
                        />
                        <input
                            name="newPassword"
                            type="password"
                            value={newPassword}
                            onChange={handlePasswordChange}
                            placeholder='Enter New Password'
                            className='border rounded px-2 py-1 w-full mt-2'
                        />
                        <input
                            name="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={handlePasswordChange}
                            placeholder='Confirm New Password'
                            className='border rounded px-2 py-1 w-full mt-2'
                        />
                        <button
                            className='bg-red-600 p-3 mt-4'
                            onClick={handlePasswordReset}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
