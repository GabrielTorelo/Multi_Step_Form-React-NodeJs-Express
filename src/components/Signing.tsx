import styled from "styled-components"
import { Component } from "react"
import UserLogin from "./UserLogin"

class Signing extends Component {
	constructor(props: any) {
		super(props)
		this.state = {
			userEmail: "",
			userPass: "",
		}
	}

	nextScreen = () => {
		console.log("Pronto para receber o Back-end");
	}

	handleStates = (inputState: any) => (event: any) => {
		this.setState({ [inputState]: event.target.value })
	}

	render() {
		return (
			<Container>
				<h2>Fazer Login</h2>
				<UserLogin
					nextScreen={this.nextScreen}
					handleStates={this.handleStates}
					values={this.state}
				/>
			</Container>
		)
	}
}

const Container = styled.div`
	display: inherit;
	width: 100%;
	flex-direction: column;
	align-items: center;
	margin: 3vh 3vw 3vh;

	& > h2 {
		margin: 0;
		margin-bottom: 3vh;
		font-family: inherit;
	}
`

export default Signing
