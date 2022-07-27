import styled from "styled-components"
import { TextField, Button } from "@material-ui/core"
import validator from "validator"
import { useState } from "react"

const UserInfo = (props) => {
	const [error, setError] = useState(0)

	const Continue = (e) => {
		e.preventDefault()

		props.values.userEmail === ""
			? setError("email")
			: !validator.isEmail(props.values.userEmail)
			? setError("email")
			: props.values.userName === ""
			? setError("name")
			: props.values.userPass === ""
			? setError("pass")
			: props.values.userPass !== props.values.userRePass
			? setError("pass")
			: props.nextScreen()
	}

	return (
		<Container>
			<TextField
				fullWidth
				required
				error={error === "email" ? true : false}
				variant="outlined"
				margin="normal"
				label="Email"
				placeholder="Digite o email"
				onChange={props.handleStates("userEmail")}
				value={props.values.userEmail}
			/>
			<TextField
				fullWidth
				required
				error={error === "name" ? true : false}
				variant="outlined"
				margin="normal"
				label="Nome de usuário"
				placeholder="Digite o nome de usuário"
				onChange={props.handleStates("userName")}
				value={props.values.userName}
			/>
			<TextField
				fullWidth
				required
				error={error === "pass" ? true : false}
				variant="outlined"
				margin="normal"
				label="Senha"
				type="password"
				placeholder="Digite a senha"
				onChange={props.handleStates("userPass")}
				value={props.values.userPass}
			/>
			<TextField
				fullWidth
				required
				error={error === "pass" ? true : false}
				variant="outlined"
				margin="normal"
				label="Confirme a Senha"
				type="password"
				placeholder="Digite a senha novamente"
				onChange={props.handleStates("userRePass")}
				value={props.values.userRePass}
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
	width: 50%;
	flex-direction: inherit;
	align-items: inherit;

	@media (max-width: 768px) {
		width: 100%;
	}
`

export default UserInfo
