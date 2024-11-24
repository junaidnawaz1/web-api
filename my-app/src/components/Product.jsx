import React from "react";
import { NavLink } from "react-router-dom";
function Product({title,description,price,id,image}) {
  return (
    <div className="w-[350px] h-[400px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="">
            <img className="h-[300px] w-full" src={image} alt="prod-image"/>
        </div>
      <NavLink to={`/single-prod/${id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title.slice(0,20)}
        </h5>
      </NavLink>
      {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
       {description.slice(0,80)}...
      </p>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        ${price}
        
      </a> */}
    </div>
  );
}

export default Product;
