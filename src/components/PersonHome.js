import styled from "styled-components"
import { TextField, Button, Box } from "@material-ui/core"
import { useState } from "react"

const PersonHome = (props) => {
	const [error, setError] = useState(0)

	const Continue = (e) => {
		e.preventDefault()

		props.values.zipCode === ""
			? setError("zipCode")
			: error === "zipCode"
			? setError("zipCode")
			: props.values.uf === ""
			? setError("zipCode")
			: props.values.city === ""
			? setError("zipCode")
			: props.values.street === ""
			? setError("street")
			: props.values.streetNumb === ""
			? setError("streetNumb")
			: props.values.district === ""
			? setError("district")
			: props.nextScreen()
	}

	const Previous = (e) => {
		e.preventDefault()
		props.prevScreen()
	}

	const handleZipCode = (e) => {
		if (e.target.value.length > 8) e.target.value = e.target.value.slice(0, 8)

		if (e.target.value.length === 8) {
			fetch(`https://viacep.com.br/ws/${e.target.value}/json/`, {
				method: "GET",
			}).then((response) => {
				if (response.status === 200) {
					response.json().then((resp) => {
						if (!resp.erro) {
							setError("")
							props.handleSetStates({
								uf: resp.uf,
								city: resp.localidade,
								street: resp.logradouro,
								streetNumb: "",
								district: resp.bairro,
								complement: resp.complemento,
							})
						} else {
							setError("zipCode")
							cleanAll()
						}
					})
				} else {
					setError("zipCode")
					cleanAll()
				}
			})
		}
	}

	const cleanAll = () => {
		props.handleSetStates({
			uf: "",
			city: "",
			street: "",
			streetNumb: "",
			district: "",
			complement: "",
		})
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
					onInput={(e) => handleZipCode(e)}
					value={props.values.zipCode}
				/>
				<TextField
					disabled
					variant="outlined"
					margin="normal"
					label="Estado"
					onChange={props.handleStates("uf")}
					value={props.values.uf}
					style={{ marginLeft: ".5vw" }}
				/>
				<TextField
					fullWidth
					disabled
					variant="outlined"
					margin="normal"
					label="Cidade"
					onChange={props.handleStates("city")}
					value={props.values.city}
					style={{ marginLeft: ".5vw" }}
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
					type="number"
					placeholder="Digite o número"
					onChange={props.handleStates("streetNumb")}
					value={props.values.streetNumb}
					style={{ marginLeft: ".5vw" }}
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
					error={error === "district" ? true : false}
					variant="outlined"
					margin="normal"
					label="Bairro"
					placeholder="Digite o bairro"
					onChange={props.handleStates("district")}
					value={props.values.district}
				/>
				<TextField
					fullWidth
					variant="outlined"
					margin="normal"
					label="Complemento"
					placeholder="Digite o complemento"
					onChange={props.handleStates("complement")}
					value={props.values.complement}
					style={{ marginLeft: ".5vw" }}
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
	width: 100%;
	flex-direction: inherit;
`

export default PersonHome
