import { Navigate } from "react-router-dom"
import { useState } from "react";
import styled from "styled-components"
import { TextField, Button, Box } from "@material-ui/core"
import API from '../../../api/user';

const Confirmation = (props: any) => {
  const [nav, setNav] = useState(false)
  const [userID, setUserID] = useState(false)

  const Continue = (e: any) => {
    e.preventDefault()
    cadUser()
  }

  const Previous = (e: any) => {
    e.preventDefault()
    props.prevScreen()
  }

  const cadUser = () => {
    API.post('', {
      email: props.values.userEmail,
      userName: props.values.userName,
      pass: props.values.userPass,
      firstName: props.values.firstName,
      lastName: props.values.lastName,
      age: props.values.age,
      zipCode: props.values.zipCode,
      uf: props.values.uf,
      city: props.values.city,
      street: props.values.street,
      streetNumb: props.values.streetNumb,
      district: props.values.district,
      complement: props.values.complement,
    })
      .then(resp => {
        setUserID(resp.data)
        setNav(true)
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (
    <Container>
      {nav
        ?
        <Navigate to={"/perfil"} state={{ userID: userID }} />
        :
        <></>
      }
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
          style={{ marginLeft: ".5vw" }}
        />
        <TextField
          disabled
          variant="outlined"
          margin="normal"
          label="Idade"
          value={props.values.age}
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
          label="CEP"
          value={props.values.zipCode}
        />
        <TextField
          disabled
          variant="outlined"
          margin="normal"
          label="Estado"
          value={props.values.uf}
          style={{ marginLeft: ".5vw" }}
        />
        <TextField
          fullWidth
          disabled
          variant="outlined"
          margin="normal"
          label="Cidade"
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
          value={props.values.district}
        />
        <TextField
          fullWidth
          disabled
          variant="outlined"
          margin="normal"
          label="Complemento"
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
          Confirmar
        </Button>
      </Box>
    </Container>
  )
}

const Container = styled.div`
	display: inherit;
	width: 100%;
	flex-direction: inherit;
	
	& > h2 {
		text-align: center;
		font-family: inherit;
	}
`

export default Confirmation
