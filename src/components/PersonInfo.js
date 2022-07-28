import styled from "styled-components"
import { TextField, Button, Box } from "@material-ui/core"
import { useState } from "react"

const PersonInfo = (props) => {
	const [error, setError] = useState([])

	const Continue = (e) => {
		e.preventDefault()

		props.values.firstName === ""
			? setError(["fistName", false])
			: props.values.lastName === ""
			? setError(["lastName", false])
			: props.values.age === ""
			? setError(["age", false])
			: parseInt(props.values.age) < 16
			? setError(["age", true])
			: props.nextScreen()
	}

	const Previous = (e) => {
		e.preventDefault()
		props.prevScreen()
	}

	return (
		<Container>
			<TextField
				fullWidth
				required
				error={error[0] === "fistName" ? true : false}
				variant="outlined"
				margin="normal"
				label="Primeiro Nome"
				placeholder="Digite o seu primeiro nome"
				onChange={props.handleStates("firstName")}
				value={props.values.firstName}
			/>
			<TextField
				fullWidth
				required
				error={error[0] === "lastName" ? true : false}
				variant="outlined"
				margin="normal"
				label="Último Nome"
				placeholder="Digite o seu último nome"
				onChange={props.handleStates("lastName")}
				value={props.values.lastName}
			/>
			<TextField
				fullWidth
				required
				error={error[0] === "age" ? true : false}
				variant="outlined"
				margin="normal"
				label="Idade"
				type="number"
				placeholder="Digite a sua idade"
				onChange={props.handleStates("age")}
				value={props.values.age}
				helperText={
					error[0] === "age" && error[1] ? "Sua idade deve ser maior que 15 anos" : ""
				}
			/>
			<Box
				style={{
					marginTop: "2vh",
					display: "flex",
					justifyContent: "space-evenly",
				}}
			>
				<Button
					size="large"
					variant="contained"
					color="primary"
					onClick={Previous}
				>
					Anterior
				</Button>
				<Button
					size="large"
					variant="contained"
					color="primary"
					onClick={Continue}
				>
					Próximo
				</Button>
			</Box>
		</Container>
	)
}

const Container = styled.div`
	display: inherit;
	width: 100%;
	flex-direction: inherit;
`

export default PersonInfo
