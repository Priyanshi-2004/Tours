import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import axios from 'axios';

function StateDetail() {
    const { id } = useParams();
    // console.log(id)
    const [districts, setDistricts] = useState([]);
       const [state, setStates] = useState([]);
console.log(state)
    useEffect(() => {
        axios.get(`http://localhost:9000/states/${id}`)
            .then(response => {
                console.log(response)
setStates(response.data[0].state_name)
                setDistricts(response.data[0]?.districts || []);
                console.log(districts)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]); 

    return (
        <>
            <Header />
            <div>
                <h1 className='text-center font-bold m-5 text-[50px]'>Tours of {state}</h1>
                <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
                    {districts.map((dis, index) => (
                        <div className="bg-white w-72 shadow-lg rounded-lg" key={dis.id || index}>
                            <img src="https://bigeye.ug/wp-content/uploads/2016/05/Couple-travel.jpg" alt="" className="w-full h-44 object-cover rounded-t-lg" />
                            <div className="px-6 py-3">
                                <p className="text-gray-800 pt-3 pb-2">District: {dis.district_name}</p>
                                <h1 className="font-bold text-[20px]">Tagline: {dis.district_tagline}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default StateDetail;
