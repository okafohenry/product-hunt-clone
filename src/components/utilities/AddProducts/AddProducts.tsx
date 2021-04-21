import React from 'react';
import { TextField, Button } from '@material-ui/core';
import styled from 'styled-components';
import './AddProducts.css';

const Wrapper = styled.div`
    width: 90%;

    .product-title-container{
        margin-top: 15px;
    }
    .product-desc-container{
        margin-top: 15px;
    }
    .btn-add{
        margin-top: 15px;
        background: rgba(6, 146, 6, 0.836);
        border-color: rgba(6, 146, 6, 0.836);
        color: #fff;
    }
    .btn-add:hover{
        background: rgba(6, 155, 6, 0.74);
        border-color: rgba(6, 155, 6, 0.74);
        color: #fff;
    }
    
`


export const AddProducts = () => {
    return(
        <Wrapper>
             <h3>Add Products</h3>
             
            <TextField 
                fullWidth
                type="file" 
                variant="outlined" 
                size="small"
                />
            <div className="product-title-container">
                <TextField 
                    fullWidth
                    className="product-title"
                    variant="outlined"
                    label="Product Name"
                    size="small"
                    />
            </div>
            <div className="product-desc-container">
                <TextField 
                    fullWidth
                    className="product-desc"
                    width="lg"
                    variant="outlined"
                    label="Product Description"
                    multiline
                    /> 
            </div>

            <Button 
                className="btn-add"
                fullWidth
                variant="contained" 
                size="medium">
                Add Products
            </Button>
        </Wrapper>
    );
};



