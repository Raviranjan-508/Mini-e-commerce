import React from 'react';
import { Heading , Box, Link } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box className='navbar-container'>
        <Heading size={"md"}>MINI ECOMMERCE</Heading>
        <Box>
            <Link to={"/"}>Products</Link>
            <Link to={"/cart"} >Cart</Link>
            <Link to={"/order"} >Order</Link>
        </Box>
    </Box>
  )
}

export default Navbar
