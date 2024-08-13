import React, { useEffect, useState } from 'react';

function Shop() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setUsers(data);
                }, 1000);
            });
    }, []);

    return (
        <ul className='flex space-x-[20px] flex-wrap mt-[50px] justify-center space-y-[20px] pb-[20px]'>
            {
                users.length ? users.slice(1).splice(1, 35).map(item => (
                    <li key={item.id} className='w-[300px] bg-white h-[350px] border-[1px] rounded-lg border-slate-400 p-[10px]'>
                        <p className='font-semibold text-center'>{item.title}</p>
                        <img src={item.images[0]} alt="Product" className='rounded-lg mx-auto mt-[10px] max-w-[250px] max-h-[250px]'/>
                    </li>
                )) : "Malumot yo'q"
            }
        </ul>
    );
}

export default Shop;
