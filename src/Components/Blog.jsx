import React, { useState, useEffect } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate for redirection
import axios from 'axios';

export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [input, setInput] = useState('');
    const [states, setStates] = useState([]);
    const [filteredStates, setFilteredStates] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);
    const [auth, setAuth] = useState(0); // 0 for not logged in, 1 for logged in
    const navigate = useNavigate(); // Use useNavigate for redirection

    useEffect(() => {
        axios.get('http://localhost:7000/')
            .then((res) => res.data)
            .then((finalRes) => {
                setBlogs(finalRes);
            });
    }, []);

    // Fetch state names from the API 
    const fetchData = () => {
        if (!dataFetched) {
            axios.get('http://localhost:9000/states')
                .then(response => {
                    setStates(response.data);
                    setDataFetched(true);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    };

    // Handle input change
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInput(value);
        setFilteredStates(
            states.filter(state =>
                state.state_name.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    // Toggle auth state (for testing, replace with actual auth logic)
    const loginHandler = () => {
        setAuth(prevAuth => (prevAuth ? 0 : 1)); // Toggling between 0 and 1
    };

    // Handle Show Details click
    const handleShowDetails = (id) => {
        if (auth === 0) {
            navigate('/login'); // Redirect to login page if not logged in
        } else {
            navigate(`/state`); // Redirect to product details page if logged in
        }
    };

    return (
        <>
            <Header login={loginHandler} status={auth} />
            <div style={{ flex: 1 }}>
                <h1 className='text-center p-4 text-[40px] font-bold'>Our Tours</h1>
                <div>
                    {/* input block */}
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        onFocus={fetchData}
                        placeholder="Type a state name"
                        className='w-[700px] ml-[450px]'
                    />
                    {/* suggestion block with filtered states */}
                    {input && (
                        <ul
                            style={{
                                position: 'absolute',
                                zIndex: 1,
                                backgroundColor: 'white',
                                padding: '10px',
                                borderRadius: '10px',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                                marginLeft: "446px",
                                width: "700px"
                            }}
                        >
                            {filteredStates.map((state) => (
                                <li key={state._id}>
                                    <Link to={`/state/${state.id}`}>{state.state_name}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className='flex gap-3 mt-4 text-center justify-center'>
                    <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
                        {blogs.map((data, index) => (
                            <Blogs pdata={data} key={data.id || index} onShowDetails={handleShowDetails} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer style={{ marginTop: 'auto', width: '100%' }} />
        </>
    );
}

// UI of state cards
function Blogs({ pdata, onShowDetails }) {
    return (
        <div className="bg-white w-72 shadow-lg rounded-lg">
            <img src="https://bigeye.ug/wp-content/uploads/2016/05/Couple-travel.jpg" alt="" className="w-full h-44 object-cover rounded-t-lg" />
            <div className="px-6 py-3">
                <p className="text-gray-800 pt-3 pb-2">{pdata.name}</p>
                <h1 className="font-bold text-[20px]">{pdata.title}</h1>
                <p className="pt-2 mb-5 text-[15px] text-gray-700">{pdata.tagline}</p>
                <button onClick={() => onShowDetails(pdata.id)}>Show Details</button>
                <div className="p-1"></div>
            </div>
        </div>
    );
}
