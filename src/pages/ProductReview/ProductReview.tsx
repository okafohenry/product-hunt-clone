import React from 'react';
import {AppLayout} from '../../components/layout';
import styled from 'styled-components';
import {Container, Grid} from  '@material-ui/core';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wrapper = styled.div``

export const ProductReview = () => {
    const products: any[] = useSelector((state) => state["products"]); 
    const id: string = useParams().product_id;

    let product = products.filter(e => id === e.id );

    return(
        <Wrapper>
            <AppLayout>
                <Container maxWidth="md" >   
                    <h1>Welcome to the Review Page</h1>
                    <Grid container justify="space-between">
                        <Grid item xs={12} sm={4}>Image</Grid>
                        <Grid item xs={12} sm={7}> 
                            <h3>{product[0].title}</h3> 
                            <p>{product[0].desc}</p> 
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            Reviews
                        </Grid>
                    </Grid>
                    <button >back</button>
                </Container>
            </AppLayout>
        </Wrapper>
    );
};
