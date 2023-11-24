import React from 'react';
import './style.css';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import productImg from "../../../resources/product.png";

 const ProductsGrid = () => {
    return (
        <Grid container spacing={10}>
            <Grid item xs={3}> 
                <ProductCard img={productImg} title="Lorem" description="Lorem ipsum" lager={3}/>
            </Grid>
            <Grid item xs={3}> 
                <ProductCard img={productImg} title="Lorem" description="Lorem ipsum" lager={3}/>
            </Grid>
            <Grid item xs={3}> 
                <ProductCard img={productImg} title="Lorem" description="Lorem ipsum" lager={3}/>
            </Grid>
            <Grid item xs={3}> 
                <ProductCard img={productImg} title="Lorem" description="Lorem ipsum" lager={3}/>
            </Grid>
        </Grid>
    )
};

export default ProductsGrid;