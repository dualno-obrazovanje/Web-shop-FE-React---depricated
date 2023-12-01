import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import './style.scss'

const ProductCard = ({ img, productName, productType, price, lager }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true)
    };

    const handleMouseOut = () => {
        setIsHovering(false)
    };

    return (
        <Card
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="ws-product-card"
        >
            <CardMedia
                component="img"
                image={img}
            />
            {isHovering && <div className="ws-product-card-hover-banner">
                <Chip label={`${lager} left`} variant="outlined" color="warning" />
                <Button size="small">Add to cart</Button>
            </div>}
            <CardContent>
                <h5>{productName}</h5>
                <div className="ws-product-type-price">
                    <p>{productType}</p>
                    <p className="ws-product-price">{`$${price}`}</p>
                </div>
            </CardContent>
        </Card>
    );
}


export default ProductCard;