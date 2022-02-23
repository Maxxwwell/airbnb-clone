import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'


function SearchPage() {
    return (
        <SearchPageContainer>
            <SearchInfo>
                <p>62 stays . 26th January to 1st March . 5 guest </p>
                <h2>Stays nearby</h2>
                <Button variant="outlined">
                    Cancelation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms and beds
                </Button>
                <Button variant="outlined">
                    More filters
                </Button>
            </SearchInfo>
        </SearchPageContainer>

    )
}


export default SearchPage

const SearchPageContainer = styled.div`
    padding: 20px;
`

const SearchInfo = styled.div`
    p {
        margin-bottom: 10px;
        font-size: 14px;
    }

    h2 {
        margin-bottom: 20px;
    }

    Button {
        border-radius: 30px;
        text-transform: inherit;
        margin: 5px;
        color: black;
        border-color: lightgray;
    }
`