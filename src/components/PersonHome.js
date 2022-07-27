import styled from "styled-components"
import { TextField, Button, Box } from "@material-ui/core"
import { useState } from "react"

const PersonHome = (props) => {
	const [error, setError] = useState(0)

	const Continue = (e) => {
		e.preventDefault()

		props.values.zipCode === ""
			? setError("zipCode")
			: props.values.stateCity === ""
			? setError("stateCity")
			: props.values.city === ""
			? setError("city")
			: props.values.district === ""
			? setError("district")
			: props.values.street === ""
			? setError("street")
			: props.values.streetNumb === ""
			? setError("streetNumb")
			: props.nextScreen()
	}

	const Previous = (e) => {
		e.preventDefault()
		props.prevScreen()
	}

	return (
		<Container>
			<Box
				style={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<TextField
					fullWidth
					required
					error={error === "zipCode" ? true : false}
					variant="outlined"
					margin="normal"
					label="CEP"
					type="number"
					placeholder="Digite o CEP"
					onChange={props.handleStates("zipCode")}
					value={props.values.zipCode}
				/>
				<TextField
					required
					error={error === "stateCity" ? true : false}
					variant="outlined"
					margin="normal"
					label="Estado"
					placeholder="Digite o Estado"
					onChange={props.handleStates("stateCity")}
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
					required
					error={error === "city" ? true : false}
					variant="outlined"
					margin="normal"
					label="Cidade"
					placeholder="Digite a cidade"
					onChange={props.handleStates("city")}
					value={props.values.city}
				/>
				<TextField
					fullWidth
					required
					error={error === "district" ? true : false}
					variant="outlined"
					margin="normal"
					label="Bairro"
					placeholder="Digite o bairro"
					onChange={props.handleStates("district")}
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
					required
					error={error === "street" ? true : false}
					variant="outlined"
					margin="normal"
					label="Endereço"
					placeholder="Digite o endereço"
					onChange={props.handleStates("street")}
					value={props.values.street}
				/>
				<TextField
					required
					error={error === "streetNumb" ? true : false}
					variant="outlined"
					margin="normal"
					label="Número"
					placeholder="Digite o número"
					onChange={props.handleStates("streetNumb")}
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
					Próximo
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
`

export default PersonHome
