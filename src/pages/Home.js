import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Card from "../components/Card"

function Home() {
    return (
        <HomeContainer>
            <Banner />

            <CardContainer>
                <Card
                    src="https://i.insider.com/5e8ee1eab3b0922c1922ac75?width=1136&format=jpeg"
                    title="Online Experiences"
                    description="Unique activities we can do together led by a world of hosts"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/84da01ce-fc54-4175-850f-701020ef826e.jpg"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/d6ce61b5-87e5-4f45-b54d-42f2f7ef9a55.jpg?im_w=1680"
                    title="Entire Homes"
                    description="Comfortable private places with room for friends or family"
                />

            </CardContainer>

            <CardContainer>
                <Card
                    src="https://i.pinimg.com/564x/b2/1f/ac/b21fac6c9e6531ea21169ffec01e9f7a.jpg"
                    title="3 Bedroom flat in Bournemouth"
                    description="Superhost with a stunning view of beachside in sunny Bournemouth"
                    price="$130/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/d6ce61b5-87e5-4f45-b54d-42f2f7ef9a55.jpg?im_w=1680"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse"
                    price="$350/night"

                />
                <Card
                    src="https://i.pinimg.com/564x/b2/1f/ac/b21fac6c9e6531ea21169ffec01e9f7a.jpg"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby"
                    price="$430/night"
                />
            </CardContainer>

        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
    
`

const CardContainer = styled.div`
    display: flex;
    padding: 30px;
    align-items: center;
    justify-content: center;
`