import { Button } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import Search from './Search';


function Banner() {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <BannerContainer>

            <BannerSearch>
                {showSearch && <Search />}
                <Button onClick={() => {
                    setShowSearch(!showSearch)
                }}
                    variant="outlined">
                    {showSearch ?
                        <p>Hide Dates</p>
                        :
                        <p>Search Dates</p>
                    }
                </Button>
            </BannerSearch>

            <BannerInfo>
                <h2> Get out and stretch your imagination</h2>
                <p>
                    Plan a different kind of getaway to uncover the hidden gems near you
                </p>
                <Button variant="outlined">
                    Explore Nearby
                </Button>
            </BannerInfo>
        </BannerContainer>
    )
}


export default Banner

const BannerContainer = styled.div`
    height: 50vh;
    position: relative;
    object-fit: contain;
    background-image: url('https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_13/2378666/180327-design-interior-ac-633p.jpg');
    background-position: center;
    background-size: cover;
`

const BannerInfo = styled.div`
   background-color : black;
   color: white;
   padding-top: 15vh;
   padding-left: 30px;
   padding-right: 50px;
   padding-bottom: 30px;
   width: 250px;

   Button {
    background-color: #ff7779;
    color: white;
    border-color: #ff7779;
    text-transform: inherit;
    margin-top: 20px;
    font-weight: 600;
   
    &:hover{
        background-color: white;
        border-color: white;
        color: #ff7779;
    }
   }

   h2 {
        line-height: 1;
   }

   p {
       padding-top: 10px;
        font-size: 10px;
   }
`

const BannerSearch = styled.div`
    display: flex;
    flex-direction: column;
    Button {
        background-color: white;
        font-weight: 700;
        text-transform: inherit;
        color: #ff7779;
        border-color: lightgrey;

        &:hover{
        background-color: white;
        border-color: #ff7779;
        color: #ff7779;
    }

    }

`