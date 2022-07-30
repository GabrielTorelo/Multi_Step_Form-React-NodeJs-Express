import styled from "styled-components"
import { Component } from "react"
import ProfileBanner from "../components/ProfileBanner"
import ProfileContent from "../components/ProfileContent"

class Profile extends Component {
	render() {
		return (
			<Container>
				<ProfileBanner />
				<ProfileContent />
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