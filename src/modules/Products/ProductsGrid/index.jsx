import React from 'react';
import './style.css';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

 const ProductsGrid = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}> 
                <ProductCard img="../../resources/product.jpg" title="Lorem" description="Lorem ipsum" lager={3}/>
            </Grid>
            <Grid item xs={3}> 
                <ProductCard title="Lorem" description="Lorem ipsum" lager={3}/>
            </Grid>
            <Grid item xs={3}> 
                <ProductCard title="Lorem" description="Lorem ipsum" lager={3}/>
            </Grid>
            <Grid item xs={3}> 
                <ProductCard title="Lorem" description="Lorem ipsum" lager={3}/>
            </Grid>
        </Grid>
    )
};

export default ProductsGrid;