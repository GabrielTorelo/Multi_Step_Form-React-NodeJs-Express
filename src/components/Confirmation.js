import styled from "styled-components"
import { TextField, Button, Box } from "@material-ui/core"

const Confirmation = (props) => {
	const Continue = (e) => {
		e.preventDefault()
		props.nextScreen()
	}

	const Previous = (e) => {
		e.preventDefault()
		props.prevScreen()
	}

	return (
		<Container>
			<h2>Por favor, confirme os dados</h2>
			<Box
				style={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<TextField
					fullWidth
					disabled
					variant="outlined"
					margin="normal"
					label="Email"
					value={props.values.userEmail}
				/>
				<TextField
					disabled
					variant="outlined"
					margin="normal"
					label="Nome de usuário"
					value={props.values.userName}
					style={{marginLeft: ".5vw"}}
				/>
			</Box>
			<Box
				style={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<TextField
					fullWidth
					disabled
					variant="outlined"
					margin="normal"
					label="Primeiro Nome"
					value={props.values.firstName}
				/>
				<TextField
					fullWidth
					disabled
					variant="outlined"
					margin="normal"
					label="Último Nome"
					value={props.values.lastName}
					style={{marginLeft: ".5vw"}}
				/>
				<TextField
					disabled
					variant="outlined"
					margin="normal"
					label="Idade"
					value={props.values.age}
					style={{marginLeft: ".5vw"}}
				/>
			</Box>
			<Box
				style={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<TextField
					fullWidth
					disabled
					variant="outlined"
					margin="normal"
					label="CEP"
					value={props.values.zipCode}
				/>
				<TextField
					disabled
					variant="outlined"
					margin="normal"
					label="Estado"
					value={props.values.stateCity}
					style={{marginLeft: ".5vw"}}
				/>
			</Box>
			<Box
				style={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<TextField
					fullWidth
					disabled
					variant="outlined"
					margin="normal"
					label="Cidade"
					value={props.values.city}
				/>
				<TextField
					fullWidth
					disabled
					variant="outlined"
					margin="normal"
					label="Bairro"
					value={props.values.district}
					style={{marginLeft: ".5vw"}}
				/>
			</Box>
			<Box
				style={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<TextField
					fullWidth
					disabled
					variant="outlined"
					margin="normal"
					label="Endereço"
					value={props.values.street}
				/>
				<TextField
					disabled
					variant="outlined"
					margin="normal"
					label="Número"
					value={props.values.streetNumb}
					style={{marginLeft: ".5vw"}}
				/>
			</Box>
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
					Confirmar
				</Button>
			</Box>
		</Container>
	)
}

const Container = styled.div`
	display: inherit;
	width: 50%;
	flex-direction: inherit;

	@media (max-width: 768px) {
		width: 100%;
	}
	
	& > h2 {
		text-align: center;
		font-family: 'Roboto', sans-serif;
	}
`

export default Confirmation
