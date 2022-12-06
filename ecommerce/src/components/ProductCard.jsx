import React from 'react';
import { Heading , Box } from '@chakra-ui/react';

const ProductCard = ({product}) => {
  return (
    <Box>
        <Heading>{product.id}</Heading>
        <Heading><img src={product.image} /></Heading>
        <Heading>{product.title}</Heading>
        <Heading>{product.category}</Heading>
        <Heading>{product.price}</Heading>
    </Box>
  )
}

export default ProductCard
