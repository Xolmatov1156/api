import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import Basket from "../assets/images/basket.svg";
import toast, { Toaster } from "react-hot-toast";

function Shop() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setUsers(data);
                }, 1000);
            });
    }, []);

    const handleItemClick = (item) => {
        navigate("/about", { state: { item } });
    };

    return (
        <ul className="flex space-x-[20px] flex-wrap mt-[50px] w-[1600px] mx-auto space-y-[20px] pb-[40px]">
            {users.length ? (
                users.slice(0, 34).map((item) => (
                    <li
                        key={item.id}
                        className="w-[300px] shadow text-white h-[400px] mt-[20px] ml-[20px] border-[1px] flex flex-col justify-between items-center rounded-lg border-white p-[10px] cursor-pointer"
                        
                    >
                        <Toaster position="top-center" reverseOrder={false} />
                        <p className="font-semibold text-center">
                            {item.title}
                        </p>
                        <img
                            src={item.images[0]}
                            width={250}
                            height={250}
                            alt="Product"
                            className="rounded-lg mx-auto mt-[10px]"
                            onClick={() => handleItemClick(item)}
                        />
                        <div className="flex gap-[50px] items-center pb-[7px]">
                            <span className="border-[1px] border-white p-1 rounded-lg">
                                {item.price}$
                            </span>
                            <button onClick={() => {toast.success("Sotib olindi")}} className="border-[1px] border-white p-1 rounded-lg">
                                <img src={Basket} alt="basket" className="" />
                            </button>
                        </div>
                    </li>
                ))
            ) : (
                <div className="w-screen h-screen flex items-center justify-center">
                    <ThreeDots
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            )}
        </ul>
    );
}

export default Shop;
