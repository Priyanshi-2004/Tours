import React, { useRef, useState } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { GoogleLoginButton, FacebookLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle, LoginSocialFacebook } from 'reactjs-social-login';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [provider, setProvider] = useState("");
  const [error, setError] = useState('');

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });
// -----------Show passwords start------------------
 const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

// ----------show passwords  ends----------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Import reset function from useForm
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:7001/auth/login', data);
      const { token } = response.data;
      localStorage.setItem('jwtToken', token);
      reset(); // Reset the form after successful login
      navigate('/');
    } catch (error) {
      setError('Invalid credentials or error occurred');
      console.error('Login error:', error);
      // reset();
    }
  };

  const googleRef = useRef();

  return (
    <>
      <Header />
      <div className="flex items-center h-screen w-full bg-red-300">
        <div className="w-full bg-red-200 rounded shadow-lg p-8 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl font-bold mb-4">LOGIN</span>
          <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 md:w-full">
              <label htmlFor="email" className="block text-xs mb-1">Username or Email</label>
              <input
                className={`w-full border rounded p-2 outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                type="email"
                name="email"
                id="email"
                placeholder="Username or Email"
                {...register('email')}
              />
              {errors.email && (
                <div className="text-red-500 text-xs mt-1">{errors.email.message}</div>
              )}
            </div>
            <div className="mb-6 md:w-full">
              <label htmlFor="password" className="block text-xs mb-1">Password</label>
              <input
                className={`w-[250px]  border rounded p-2 outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
                 type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Password"
                {...register('password')}
                 onChange={(e) => setPassword(e.target.value)}
              />  <button className='bg-red-400 p-1' onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
              {errors.password && (
                <div className="text-red-500 text-xs mt-1">{errors.password.message}</div>
              )}
            </div>
            <div className="flex">
              <button type="submit" className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold rounded flex text-[30px] p-3 text-center" style={{ textAlign: "center", height: "49px" }}>Login</button>
              <Link to={'/forgot'} className="text-blue-700 text-center text-sm justify-center float-right p-2 ml-[140px] font-bold" href="/login">Forgot password?</Link>
            </div>
          </form>
          <div>
            <LoginSocialGoogle
              ref={googleRef}
              client_id="1024616921919-hns9m0q39jb21qrp4kpb57kti2sd5t1n.apps.googleusercontent.com"
              onResolve={({ provider, data }) => {
                setProvider(provider);
                console.log(data, "data");
                console.log(provider, "provider");
              }}
              onReject={(err) => {
                console.log("Google login reject:", err);
              }}
            >
              <GoogleLoginButton />
            </LoginSocialGoogle>
            <LoginSocialFacebook
              appId="431451242017946"
              onResolve={({ provider, data }) => {
                setProvider(provider);
                console.log(data, "data");
                console.log(provider, "provider");
              }}
              onReject={(err) => {
                console.log(err);
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
}

export default Login;
