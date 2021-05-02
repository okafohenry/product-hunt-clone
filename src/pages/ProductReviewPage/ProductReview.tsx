import React from 'react';
import {AppLayout} from '../../components/layout';
import styled from 'styled-components';
import {Container} from  '@material-ui/core';
import { AddProducts } from '../../components';

const Wrapper = styled.div``

export const ProductReview = () => {
    const back = window.history.back;
    return(
        <Wrapper>
            <AppLayout>
                <Container maxWidth="md" >   
                    <h1>Welcome to the Review Page</h1>
                    <button onClick={back}>back</button>
                </Container>
            </AppLayout>
        </Wrapper>
    );
};
