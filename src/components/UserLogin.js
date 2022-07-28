import styled from "styled-components"
import { TextField, Button } from "@material-ui/core"
import validator from "validator"
import { useState } from "react"

const UserLogin = (props) => {
	const [error, setError] = useState([])

	const Continue = (e) => {
		e.preventDefault()

		props.values.userEmail === ""
			? setError(["email", false])
			: !validator.isEmail(props.values.userEmail)
			? setError(["email", true])
			: props.values.userPass === ""
			? setError(["pass", false])
			: props.values.userPass.length < 6
			? setError(["pass", true])
			: props.nextScreen()
	}

	return (
		<Container>
			<TextField
				fullWidth
				required
				error={error[0] === "email" ? true : false}
				variant="outlined"
				margin="normal"
				label="Email"
				placeholder="Digite o email"
				onChange={props.handleStates("userEmail")}
				value={props.values.userEmail}
				helperText={
					error[0] === "email" && error[1] ? "E-mail inválido" : ""
				}
			/>
			<TextField
				fullWidth
				required
				error={error[0] === "pass" || error[0] === "rPass" ? true : false}
				variant="outlined"
				margin="normal"
				label="Senha"
				type="password"
				placeholder="Digite a senha"
				onChange={props.handleStates("userPass")}
				value={props.values.userPass}
				helperText={
					error[0] === "pass" && error[1] ? "Senha deve conter pelo menos 6 caracteres" : ""
				}
			/>
			<Button
				style={{ marginTop: "2vh" }}
				fullWidth
				color="primary"
				size="large"
				variant="contained"
				onClick={Continue}
			>
				Login
			</Button>
		</Container>
	)
}

const Container = styled.div`
	display: inherit;
	width: 100%;
	flex-direction: inherit;
	align-items: inherit;
`

export default UserLogin
