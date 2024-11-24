import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addItemsCart } from "../store/cart";
function SingleProduct() {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();





  const getData = async () => {
    let apiCall = await fetch("https://fakestoreapi.com/products");
    let prodData = await apiCall.json();
    setData(prodData);
  };

  useEffect(() => {
    getData();
  }, []);

  const addItemsCarts = (cardProd) => {
    console.log(cardProd);
      dispatch(addItemsCart(cardProd));
  }

  const { id } = useParams();

  const filterData = data?.find((currElem)=> {

      return currElem?.id === parseInt(id);
  })
 

  if (!filterData) {
    return <div>Data not found</div>;
  }
  return (
    <>
    <div className="text-center  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className=" ">
        <h2 className=" text-white font-bold text-2xl	mb-6">Here's your product details</h2>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {filterData.title}{" "}
        </h2>
        <img className=" relative left-[490px]"
          src={filterData.image}
          alt={filterData.title}
          style={{ width: "400px" }}
        />
        <p className="mb-3 font-normal text-white">
          {filterData.description}
        </p>
        <p
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '
        >
          Price: ${filterData.price}
        </p>
      </div>
    </div>
    <div>

    <Link className="w-full h-full bg-slate-600" to="/cart" onClick={() => addItemsCarts(filterData)}>Add to cart</Link>
    </div>
    </>
  ); 
  
}

export default SingleProduct;

