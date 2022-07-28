import styled from "styled-components"
import React, { Component } from "react"
import PerfilBanner from "../components/PerfilBanner"
import PerfilContent from "../components/PerfilContent"

class Profile extends Component {
	render() {
		return (
			<Container>
				<PerfilBanner />
				<PerfilContent />
			</Container>
		)
	}
}

const Container = styled.div`
    display: flex;
	width: 80%;
	flex-direction: column;
	background-color: transparent;
    justify-content: center;
	font-family: "Roboto", sans-serif;
	border-radius: 20px;
	margin: auto;
	margin-top: 3%;
	margin-bottom: 3%;

    @media (max-width: 768px){
        width: 95%;
		border-radius: 10px;
    }
`

export default Profile
