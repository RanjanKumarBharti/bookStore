/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
function Card({ item }) {

    return (
        <>
            <div className="mt-4 my-3 p-3">
                <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-300 dark:bg-slate-800 dark:text-white dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className=" px-2 py-1 rounded-full border-[2px] font-extrabold hover:bg-pink-500 hover:text-white duration-100 cursor-pointer  ">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;
