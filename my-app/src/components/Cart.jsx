import React from 'react'
import { useSelector } from 'react-redux'



function Cart() {


    const cartItems = useSelector((state) => state.cart.cartItems)

    if(cartItems) {
        console.log(cartItems )
    }


  return (
    <div className='text-center  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div>
      <h2 className=" text-white font-bold text-2xl	mb-6">My Carts :</h2>
      {cartItems && cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li >
               <div className="w-[400px] relative left-[580px] flex justify-center items-center">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover " />
      </div>
      
              <h2 className=' text-white font-bold text-2xl	mb-6'> Name : {item.title}</h2>
              <p className=' text-white font-bold '>Price: ${item.price}</p>
              
              {/* <p>Quantity: {item.quantity}</p> */}
            </li>
          ))}
        </ul>
      ) : (
        <p className=' text-white font-bold '>Your cart is empty.</p>
      )}
      </div>
    </div>
  )
}

export default Cart