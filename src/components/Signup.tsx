import styled from "styled-components"
import React from "react"
import UserInfo from "./UserInfo"
import PersonInfo from "./PersonInfo"
import PersonHome from "./PersonHome"
import Confirmation from "./Confirmation"

class Signup extends React.Component<any, any> {
	constructor(props: any) {
		super(props)
		this.state = {
			step: 1,
			userEmail: "",
			userName: "",
			userPass: "",
			userRePass: "",
			firstName: "",
			lastName: "",
			age: "",
			zipCode: "",
			uf: "",
			city: "",
			street: "",
			streetNumb: "",
			district: "",
			complement: "",
		}
	}

	prevScreen = () => {
		const { step }: any = this.state
		this.setState({ step: step - 1 })
	}

	nextScreen = () => {
		const { step }: any = this.state
		this.setState({ step: step + 1 })
	}

	handleStates = (inputState: any) => (event: any) => {
		this.setState({ [inputState]: event.target.value })
	}

	handleSetStates = (states: any) => {
		Object.keys(states).forEach((state) =>
			this.setState({ [state]: states[state] })
		)
	}

	handleScreen = (step: any) => {
		switch (step) {
			case 1:
				return (
					<UserInfo
						nextScreen={this.nextScreen}
						handleStates={this.handleStates}
						values={this.state}
					/>
				)
			case 2:
				return (
					<PersonInfo
						prevScreen={this.prevScreen}
						nextScreen={this.nextScreen}
						handleStates={this.handleStates}
						values={this.state}
					/>
				)
			case 3:
				return (
					<PersonHome
						prevScreen={this.prevScreen}
						nextScreen={this.nextScreen}
						handleStates={this.handleStates}
						handleSetStates={this.handleSetStates}
						values={this.state}
					/>
				)
			case 4:
				return (
					<Confirmation
						prevScreen={this.prevScreen}
						nextScreen={this.nextScreen}
						values={this.state}
					/>
				)
			case 5:
				console.log("Pronto para receber o Back-end");
				break;
			default:
				return console.log("ERROR")
		}
	}

	render() {
		return (
			// @ts-ignore
			<Container>
				<h2>Cadastre-se</h2>
				{this.handleScreen(this.state.step)}
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

export default Signup