import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 5px 0px;
    text-align: center;
    box-shadow: 0px 25px 5px 25px #bbbbbb;
` 

export const BottomFooter = () => {
    return(
        <Wrapper>            
            <footer> @footer </footer>
        </Wrapper>
    );
};