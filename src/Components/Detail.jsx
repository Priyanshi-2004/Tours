import React, { useEffect, useState } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {
 let [blogs, setBlogs] = useState([]);
    const { id } = useParams();

useEffect(() => {
  axios.get(`http://localhost:7000/${id}`)
    .then((res) => res.data)
    .then((finalRes) => {
      setBlogs(finalRes)
    })
}, [id])



  return (
    <>
    <Header />
    <h1 className='text-center font-bold text-[50px] m-4'>Tour Details</h1>
  <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
  {blogs.map((blog) => 
  (
    <div className="bg-white w-72 shadow-lg rounded-lg flex" key={blog.id}>
      <img src="https://bigeye.ug/wp-content/uploads/2016/05/Couple-travel.jpg" alt="" className="w-full h-74 object-cover rounded-t-lg" />
      <div className="px-6 py-3 m-5">
        <h1 className="font-bold w-[550px] text-[20px]">{blog.name}</h1>
        <p className="pt-2 mb-5 text-[15px] text-gray-700">{blog.description}</p>
        <p className='font-bold'>Locations: {blog.location}</p>
        <p className='font-bold'>Duration:{blog.duration}</p>
        <div className="p-1 font-bold">Price: {blog.price}</div>
      </div>
    </div>
  ))}
</div>
    <Footer/>
    </>
  )
}