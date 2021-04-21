import React from 'react';
import '../../assets/css/index.css';
import { AppLayout, Products, AddProducts } from '../../components';
import { Grid, Container } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper= styled.div`
    .display-products{
        height: 83vh;
        margin-top: 3px;
        overflow-y: scroll;
    }
    .display-products::-webkit-scrollbar{
        width: 6px;
        background: transparent;
    }
    .display-products::-webkit-scrollbar-thumb{
        background-color: #bbbbbb2d;
    }

    .add-products{
        height: 83vh;
        margin-top: 3px;
        overflow: hidden;
    }
`

export const IndexPage = () => {
    return(
        <AppLayout Search={true}>
            <Container maxWidth="lg">
                <Wrapper>
                    <Grid container justify="space-evenly" wrap="wrap" className="grid-container">
                        <Grid item xs={12} sm={6} className="display-products">
                            <Products />
                        </Grid>
                        <Grid item xs={12} sm={4} className="add-products">
                            <AddProducts />
                        </Grid>
                    </Grid>
                </Wrapper>
            </Container>
        </AppLayout>
        
    );
};