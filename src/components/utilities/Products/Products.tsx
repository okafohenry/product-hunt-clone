import React, {useState} from 'react';
import styled from 'styled-components';
import { Grid} from '@material-ui/core';
import './Products.css';
import { DefaultRootState, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';


const Wrapper = styled.div` 
    >ul{
       padding: 0;
    }
    
    .product{        
        padding: 10px;
        background: #fff;
        border-bottom: 1px solid #bbbbbb2d;
        list-style: none;
        cursor: pointer;
    }
    
    .img-container{
        background: #bbbbbb2d;
        height: 110px;
    }

`


export const Products: React.FC<any[]> = () => {    
    const products = useSelector((state) => state["products"]); 
    console.log("Products", products);

    return(
        <Wrapper>
            <h3 className="display-prod-text">Display Products</h3>
            <ul>
                { products.map(product => ( 
                <Link to={`/${product.id}`}>
                    <Grid container justify="space-between" className="product">    
                        <Grid item xs={12} sm={3} className="img-container">
                            <li className="prod-image">{product.image}</li>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <li className="prod-title">
                                <h5>{product.title}</h5>
                            </li>
                            <li className="prod-desc">
                                <p>
                                {/*truncate string: return first 200 characters and add an ellipsis*/
                                product.desc.substring(0, 200).concat("...")
                                }
                                </p>
                            </li>
                        </Grid>
                    </Grid>        
                </Link>
                ))}
            </ul>
        </Wrapper>
        
    );
};