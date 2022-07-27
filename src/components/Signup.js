import styled from "styled-components"
import React, { Component } from "react"
import UserInfo from "../components/UserInfo"
import PersonInfo from "../components/PersonInfo"
import PersonHome from "../components/PersonHome"
import Confirmation from "../components/Confirmation"
import Success from "../components/Success"

class Signup extends Component {
	constructor(props) {
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
			stateCity: "",
			city: "",
			district: "",
			street: "",
			streetNumb: "",
		}
	}

	prevScreen = () => {
		const { step } = this.state
		this.setState({ step: step - 1 })
	}

	nextScreen = () => {
		const { step } = this.state
		this.setState({ step: step + 1 })
	}

	handleStates = (inputState) => (event) => {
		this.setState({ [inputState]: event.target.value })
	}

	handleScreen = (step) => {
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
				return <Success />
			default:
				return console.log("ERROR")
		}
	}

	render() {
		return (
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
    font-family: 'Roboto', sans-serif;
  }
`

export default Signup
