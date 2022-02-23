import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';

function Header() {
    return (
        <HeaderContainer>
            <Logo src="https://cdn.worldvectorlogo.com/logos/airbnb.svg"
                alt="lgog"
            />
            <HeaderItemsCenter>
                <input type="text" />
                <SearchIcon />
            </HeaderItemsCenter>

            <HeaderItemsRight>
                Become a host
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </HeaderItemsRight>

        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 100;
    width: 100%;

`

const Logo = styled.img`
    object-fit: contain;
    height: 30px;
    margin: 15px;
`

const HeaderItemsCenter = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    height: 30px;
    padding: 5px;
    max-width: fit-content;
    border-radius: 99px;
    border: 1px solid lightgray;

    input {
        border: none;
        /* width: 250px; */
        outline-width: 0;
        padding: 5px;
    }
`


const HeaderItemsRight = styled.div`
    display: flex;
    align-items: center;
    margin-right: 80px;
    justify-content: space-between;
    width: 15vw;
`