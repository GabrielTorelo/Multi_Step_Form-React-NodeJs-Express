import styled from "styled-components"
import { Component } from "react"
import ProfileBanner from "../components/profile/banner/Banner"
import ProfileContent from "../components/profile/banner/Summary"
import PersonalData from "../components/profile/person/PersonalData"

class Profile extends Component {
  render() {
    return (
      <Container>
        <ProfileBanner />
        <ProfileContent />
        <PersonalData />
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
