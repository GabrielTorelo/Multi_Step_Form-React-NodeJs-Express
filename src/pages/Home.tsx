import styled from "styled-components"
import { Component } from "react"
import Signup from "../components/register/Signup"

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

export default Home
