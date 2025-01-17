import React, { useRef } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Link } from 'react-router-dom'

export default function OTP() {
 
  return (
  <>
     <Header/>
            <div className="flex justify-center mt-[100px]">
                <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
                    <header className="mb-8">
                        <h1 className="text-2xl font-bold mb-1">Email Verification</h1>
                        <p className="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your Email.</p>
                    </header>
                    <form id="otp-form">
                        <div className="flex items-center justify-center gap-3">
                            <input
                                type="text"
                                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                pattern="\d*" maxlength="1" />
                            <input
                                type="text"
                                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                maxlength="1" />
                            <input
                                type="text"
                                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                maxlength="1" />
                           <input
                                type="text"
                                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                maxlength="1" />
                        </div>
                        <div classNameName="max-w-[260px] mx-auto mt-4">
                          <Link to={'/newpass'}><button type="submit"
                                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">Verify
                                Account</button></Link> 
                        </div>
                    </form>
                    <div className="text-sm text-slate-500 mt-4">Didn't receive code? <a classNameName="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Resend</a></div>
                </div>
       </div>
                      
    <Footer/>
  </>
  )
  }