import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SingleProduct() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    let apiCall = await fetch('https://fakestoreapi.com/products');
    let prodsData = await apiCall.json();
    setLoading(false);
    setData(prodsData);
  };

  useEffect(() => {
    getData();
  }, []);

  const { id } = useParams();

  const filteredData = data?.filter((currElem) => {
    return currElem?.id === parseInt(id);
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!filteredData || filteredData.length === 0) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{filteredData[0].title}</h2>
      <p>{filteredData[0].description}</p>
      <p>Price: ${filteredData[0].price}</p>
    </div>
  );
}

export default SingleProduct;
