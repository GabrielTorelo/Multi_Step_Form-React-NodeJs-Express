import styled from "styled-components"
import React, { Component } from "react"
import Signup from "../components/Signup"

class Home extends Component {
	render() {
		return (
			<Container>
				<Signup />
			</Container>
		)
	}
}

const Container = styled.div`
    display: flex;
	width: 80%;
	background-color: rgba(255, 255, 255, .9);
    justify-content: center;
	margin: auto;
	margin-top: 3%;
	margin-bottom: 3%;

    @media (max-width: 768px){
        width: 95%;
    }
`

export default Home
