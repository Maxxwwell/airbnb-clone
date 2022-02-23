import React from 'react'
import styled from 'styled-components'


function Footer() {
    return (
        <FooterContainer>
            <p>© 2022 Airbnb clone! No rights reserved - this is a demo</p>
            <p>Privacy . Terms . Sitemap . Company Details</p>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    border-top: 1px solid lightgray;
    padding: 20px;
    background-color: #f7f7f7;
    bottom: 0;
    text-align: center;
    bottom: 0;

    p {
        padding: 5px;
        font-size: 12px;
    }
`