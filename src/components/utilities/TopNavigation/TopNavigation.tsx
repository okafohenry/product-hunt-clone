import React from 'react';
import styled from 'styled-components';
import  LocalParking from '@material-ui/icons/LocalParking';
import { SearchBar } from '../SearchBar/SearchBar';

const Wrapper = styled.nav`
    padding-top: 20px;
    background-color: #fff;
    padding-bottom: 20px;
    box-shadow: 0px 0px 5px 1px #bbbbbb;

    .nav-container{
        width: 30%;
        margin-left: 10%;
        display: flex;
    }
    .nav-logo{
        background: rgba(6, 146, 6, 0.836);
        color: #fff;
        padding: 7px;
        border-radius: 1.5em;
    }
    .nav-text{
        margin-left: 5px;
        padding: 7px;
        font-size: 23px;
        font-weight: bold;
        color: rgba(6, 146, 6, 0.836);
    }
    .searchbar{
        float: right;
        margin-top: -38px;
        margin-right: 10%;
    }
`


export const TopNavigation: React.FC = () => {
    return(
        <Wrapper>
             <header>
                 <div className="nav-container">
                    <div className="nav-logo"><LocalParking /></div>
                    <div className="nav-text">Product Hunt</div>
                 </div>                 
                 <span className="searchbar">{<SearchBar />}</span>
            </header>
        </Wrapper>
       
    );
};