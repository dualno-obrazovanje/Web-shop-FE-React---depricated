import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

const ProductCard = ({ img, title, description, lager }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true)
    };

    const handleMouseOut = () => {
        setIsHovering(false)
    };

    return (
        <Card onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <CardMedia
                component="img"
                image={img}
            />
            {
                isHovering && (
                    <div>
                        <CardContent>
                            <h5>
                                {title}
                            </h5>
                            <p>{description}</p>
                        </CardContent>
                        <CardActions>
                            <Chip label={`${lager} left`} variant="outlined" />
                            <Button size="small">Add to cart</Button>
                        </CardActions>
                    </div>
                )
            }
        </Card>
    );
}


export default ProductCard;