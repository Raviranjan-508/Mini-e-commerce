import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ProductCard from '../components/ProductCard';
import { getProducts } from '../redux/action';
import { Box } from '@chakra-ui/react';
import Pagination from '../components/Pagination';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  console.log("pro", products)

  const [page, setPage] = useState(1);
  const perPage = 12;
  const totalPages = Math.ceil(products.length / perPage);

  let end = page + perPage;
  let start = end - perPage;
  let paginateProducts = products.slice(start, end);

  useEffect(() => {
    dispatch(getProducts(start, end));
  }, []);

  // const apiCall = async () => {
  //   let data = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`);
  //   data = await data.json();
  //   console.log(data.data)
  //   dispatch(getProducts(data.data))
  // }


  return (
    <>
      <Box>
        {
          paginateProducts.map((el, index) => {
            return <ProductCard product={el} />
          })
        }

      </Box>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </>


  )
}

export default Products
