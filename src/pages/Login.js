import styled from "styled-components"
import React, { Component } from "react"
import Signing from "../components/Signing"

class Login extends Component {
	render() {
		return (
			<Container>
                <Signing />
			</Container>
		)
	}
}

const Container = styled.div`
    display: flex;
	width: 40%;
	background-color: rgba(255, 255, 255, .9);
    justify-content: center;
	border-radius: 20px;
	margin: auto;
	margin-top: 3%;
	margin-bottom: 3%;

    @media (max-width: 768px){
        width: 95%;
		border-radius: 10px;
    }
`

export default Login
