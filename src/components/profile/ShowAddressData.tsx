import styled from "styled-components"
import { TextField, Box } from "@material-ui/core"

const ShowAddressData = (props: any) => {
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
                    disabled
                    variant="outlined"
                    margin="normal"
                    label="CEP"
                    // value={props.values.zipCode}
                />
                <TextField
                    disabled
                    variant="outlined"
                    margin="normal"
                    label="Estado"
                    // value={props.values.uf}
                    style={{ marginLeft: ".5vw" }}
                />
                <TextField
                    fullWidth
                    disabled
                    variant="outlined"
                    margin="normal"
                    label="Cidade"
                    // value={props.values.city}
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
                    disabled
                    variant="outlined"
                    margin="normal"
                    label="Endereço"
                    // value={props.values.street}
                />
                <TextField
                    disabled
                    variant="outlined"
                    margin="normal"
                    label="Número"
                    // value={props.values.streetNumb}
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
                    disabled
                    variant="outlined"
                    margin="normal"
                    label="Bairro"
                    // value={props.values.district}
                />
                <TextField
                    fullWidth
                    disabled
                    variant="outlined"
                    margin="normal"
                    label="Complemento"
                    // value={props.values.complement}
                    style={{ marginLeft: ".5vw" }}
                />
            </Box>
		</Container>
	)
}

const Container = styled.div`
    display: inherit;
    width: 90%;
    flex-direction: column;
    align-self: center;
    margin-bottom: 5vh;

    @media (max-width: 768px){
        width: 95%;
    }

    & > div > div > div > input {
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 5px;
    }
`

export default ShowAddressData
