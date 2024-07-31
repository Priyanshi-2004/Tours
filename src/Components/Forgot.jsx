import React, { useRef } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Forgot() {
   const emailRef = useRef();
   const sendOtp = async () =>{
    try{
      let url = "http://localhost:7001/user/email-send"
      let options = {
        method : 'POST',
        url: url,
        data:{email:emailRef.current.value}
      }
      let response = await axios(options)
      let record = response.data;
      if(record.statusText == 'Success'){
        toast.success();
      }else{
        toast.error(record.message);
      }
      }catch(e){
        toast.error("Something Went wrong");
      }
   }
   
  return (
    <>
    <Header/>
      <h1 className='text-center w-[500px] bg-green-500 font-bold text-[50px] ml-[500px] h-[80px]'>Forgot Password</h1>
             <>
                            <div className='mt-[40px] p-4 ml-[400px]'>Enter Email<br/>
                              
                                <input
                                    type="email"
                                    placeholder='Enter Email'
                                    className='border rounded px-2 py-1 w-1/2'
                                    ref={emailRef}
                                /><br/>
                                <Link to={'/OTP'}><button onClick={sendOtp} className='bg-red-600 p-3 mt-4'>Send OTP</button></Link>
                            </div>
                        </>
    <Footer/>
    </>
  )
}
