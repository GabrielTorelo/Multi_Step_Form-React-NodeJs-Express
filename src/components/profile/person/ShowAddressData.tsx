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
          value={props.values[0].zipCode}
        />
        <TextField
          disabled
          variant="outlined"
          margin="normal"
          label="Estado"
          value={props.values[0].uf}
          style={{ marginLeft: ".5vw" }}
        />
        <TextField
          fullWidth
          disabled
          variant="outlined"
          margin="normal"
          label="Cidade"
          value={props.values[0].city}
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
          value={props.values[0].street}
        />
        <TextField
          disabled
          variant="outlined"
          margin="normal"
          label="Número"
          value={props.values[0].streetNumb}
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
          value={props.values[0].district}
        />
        <TextField
          fullWidth
          disabled
          variant="outlined"
          margin="normal"
          label="Complemento"
          value={props.values[0].complement}
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
        background-color: rgba(255, 255, 255, 0.8);
        -webkit-text-fill-color: black;
        border-radius: 5px;
    }

    & > div > div > label {
      -webkit-text-fill-color: rgba(255, 255, 255, 0.8);
      background-color: black;
      padding: .1vw 1vw .1vw;
      border-radius: 5px;

      @media (max-width: 768px){
        padding: .5vw 1vw .5vw;
      }
    }
`

export default ShowAddressData
