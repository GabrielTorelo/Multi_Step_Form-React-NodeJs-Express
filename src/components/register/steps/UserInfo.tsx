import styled from "styled-components"
import { TextField, Button } from "@material-ui/core"
import validator from "validator"
import { useState } from "react"

const UserInfo = (props: any) => {
	const [error, setError] = useState(["", false])

	const Continue = (e: any) => {
		e.preventDefault()

		props.values.userEmail === ""
			? setError(["email", false])
			: !validator.isEmail(props.values.userEmail)
			? setError(["email", true])
			: props.values.userName === ""
			? setError(["name", false])
			: props.values.userName.length < 6
			? setError(["name", true])
			: props.values.userPass === ""
			? setError(["pass", false])
			: props.values.userPass.length < 6
			? setError(["pass", true])
			: props.values.userPass !== props.values.userRePass
			? setError(["rPass", true])
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
				error={error[0] === "name" ? true : false}
				variant="outlined"
				margin="normal"
				label="Nome de usuário"
				placeholder="Digite o nome de usuário"
				onChange={props.handleStates("userName")}
				value={props.values.userName}
				helperText={
					error[0] === "name" && error[1] ? "Nome de usuário deve conter pelo menos 6 caracteres" : ""
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
			<TextField
				fullWidth
				required
				error={error[0] === "pass" || error[0] === "rPass" ? true : false}
				variant="outlined"
				margin="normal"
				label="Confirme a Senha"
				type="password"
				placeholder="Digite a senha novamente"
				onChange={props.handleStates("userRePass")}
				value={props.values.userRePass}
				helperText={
					error[0] === "rPass" && error[1] ? "Senhas não conferem" : ""
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
				Próximo
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

export default UserInfo
