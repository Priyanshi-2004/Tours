import React, { useRef, useState } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { GoogleLoginButton, FacebookLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle, LoginSocialFacebook } from 'reactjs-social-login';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Signup = () => {
  const [provider, setProvider] = useState("");
  const googleRef = useRef();
  const navigate = useNavigate(); // Initialize navigate

  // -----------Show passwords start------------------
 const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

// ----------show passwords  ends----------------------

  // Validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    agree: Yup.bool().oneOf([true], 'You must agree to the terms and privacy.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:7001/register', data);
      console.log('Registration response:', response.data);
      // Navigate to login page or another route after successful registration
      navigate('/login');
    } catch (error) {
      console.error('There was an error registering the user!', error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center p-[20px]" style={{ backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-travel-promotion-background-creative-synthesis-parent-child-tour-couple-tour-image_13277.jpg")` }}>
        <div className="bg-white p-16 rounded shadow-2xl">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Create Your Account</h2>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block mb-1 font-bold text-gray-500">Name</label>
              <input
                type="text"
                className={`w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500 ${errors.name ? 'border-red-500' : ''}`}
                {...register('name')}
              />
              {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name.message}</div>}
            </div>

            <div>
              <label className="block mb-1 font-bold text-gray-500">Email</label>
              <input
                type="email"
                className={`w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500 ${errors.email ? 'border-red-500' : ''}`}
                {...register('email')}
              />
              {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email.message}</div>}
            </div>

            <div>
              <label className="block mb-1 font-bold text-gray-500">Password</label>
              <input
                  type={showPassword ? 'text' : 'password'}
                className={`w-[420px] border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500 ${errors.password ? 'border-red-500' : ''}`}
                {...register('password')}
                 onChange={(e) => setPassword(e.target.value)}
              /> <button className='bg-blue-400 p-1' onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
              {errors.password && <div className="text-red-500 text-xs mt-1">{errors.password.message}</div>}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                className={`${errors.agree ? 'border-red-500' : ''}`}
                {...register('agree')}
              />
              <label htmlFor="agree" className="ml-2 text-gray-700 text-sm">I agree to the terms and privacy.</label>
            </div>
            {errors.agree && <div className="text-red-500 text-xs mt-1">{errors.agree.message}</div>}

            <button type="submit" className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">Sign Up</button>
          </form>

          <div className='flex text-center justify-center my-10'>
            <LoginSocialGoogle
              ref={googleRef}
              client_id="1024616921919-hns9m0q39jb21qrp4kpb57kti2sd5t1n.apps.googleusercontent.com"
              onResolve={({ provider, data }) => {
                setProvider(provider);
                console.log(data, "Google login data");
                console.log(provider, "Provider");
                // Handle Google login success
              }}
              onReject={(err) => {
                console.log("Google login reject:", err);
                // Handle Google login failure
              }}
            >
              <GoogleLoginButton />
            </LoginSocialGoogle>
            <LoginSocialFacebook
              appId="431451242017946"
              onResolve={({ provider, data }) => {
                setProvider(provider);
                console.log(data, "Facebook login data");
                console.log(provider, "Provider");
                // Handle Facebook login success
              }}
              onReject={(err) => {
                console.log("Facebook login reject:", err);
                // Handle Facebook login failure
              }}
            >
              <FacebookLoginButton />
            </LoginSocialFacebook>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
