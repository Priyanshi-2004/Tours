import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [data, setData] = useState(null); 
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
        })
        .catch((err) => console.error('Error fetching profile data:', err));
    }, []);

return (
        <>
            <Header/>
            <div className="bg-white md:mx-auto rounded shadow-xl w-full overflow-hidden">
                <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                <div className="px-5 py-2 flex flex-col gap-3 pb-6">
                    <div className="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white">
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            className="w-full h-full rounded-full object-center object-cover"
                            alt="Profile Avatar"
                        />
                    </div>

                    <div className="flex gap-3 flex-wrap">
                        <Link to={'/profiledetail'}><button className="bg-red-400 px-3">Edit</button></Link>
                    </div>

                    {data ? (
                        <div className="bg-white w-72 shadow-lg rounded-lg flex" key={data._id}>
                            <div>
                                <h3 className="text-xl text-slate-900 relative font-bold leading-6">{data.name}</h3>
                                <p className="text-sm text-gray-600">{data.email}</p>
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}

                    <h4 className="text-md font-medium leading-3">About</h4>
                    <p className="text-sm text-stone-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolores aliquid sequi sunt iusto ipsum earum natus omnis asperiores architecto praesentium dignissimos pariatur, ipsa cum? Voluptate vero eius at voluptas?
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
    }

export default Profile;
