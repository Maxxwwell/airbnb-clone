import React from 'react'
import styled from 'styled-components'


function Card({ src, title, description, price }) {
    return (
        <CardContainer>
            <img src={src} alt="" />
            <CardInfo>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </CardInfo>
        </CardContainer>
    )
}

export default Card

const CardContainer = styled.div`
    margin: 10px;
    border: 0px solid black;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
    transition: transform 100ms ease-in;
    cursor: pointer;
    &:hover {
        transform: scale(1.07);
    }
    img {
      object-fit  : cover;
      height: 200px;
      width: 200px;
      min-width: 200px;
      min-height: 200px;
      width: 100%;
    }
`

const CardInfo = styled.div`
    margin-top: -9px;
    border-radius: 10px;
    padding: 20px;
    padding-top: 20px;
    border: 1;

    h2 {
       font-size : 16px;
       font-weight: 600px;
    }

    h4 {
        font-size: 12px;
        font-weight: 300;
        margin-top: 8px;
        margin-bottom: 8px;
    }

`
