import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function About() {
    const location = useLocation();
    const { item } = location.state || {}; 
    const navigate = useNavigate();

    return (
        <div 
            onClick={(e) => e.target.id === "wrapper" ? navigate(-1) : null} 
            className='w-[100%] h-screen flex items-center justify-center' 
            id='wrapper'
        >
            {item ? (
                <div data-aos="zoom-in" data-aos-duration="1500" className='w-[900px] shadow bg-white h-[550px] border-[1px] flex rounded-lg border-slate-400'>
                    <img 
                        src={item.images[0]}  
                        width={350} 
                        height={250} 
                        alt="Product" 
                        className='rounded-lg object-cover'
                    />
                    <div className='flex items-center flex-col bg-black'>
                        <div className='text-white font-semibold mt-[50px] p-[10px] border-[2px] shadow w-[90%] rounded-lg mx-auto'>
                            <p className='mx-auto text-center rounded-lg border-[1px] w-[100px] mb-[5px]'>Name</p>
                            <p className='text-center'>{item.title}</p>
                        </div>
                        <div className='border-[2px] shadow mt-[30px] w-[90%] mx-auto pb-[10px] rounded-lg'>
                            <h2 className='text-center text-[30px] text-white'>Description</h2>
                            <p className='font-semibold text-center text-white text-[18px] border-[1px] py-[5px] rounded-lg mx-auto mt-[20px] w-[200px]'>{item.category.name}</p>
                            <p className='font-semibold text-center px-[10px] mt-[20px] text-white'>{item.description}</p>
                        </div>
                    </div>
                </div>
            ) : "Xato"}
        </div>
    );
}

export default About;
