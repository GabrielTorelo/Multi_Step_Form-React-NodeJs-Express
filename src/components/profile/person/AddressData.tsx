import styled from "styled-components"
import { TextField, Box } from "@material-ui/core"
import { useState } from "react"

const ShowAddressData = (props: any) => {
  const [error, setError] = useState("")


  const Continue = () => {
    setError("")
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
                  : props.funcUP("update", true)
  }

  const handleZipCode = (e: any) => {
    if (e.target.value.length > 8) e.target.value = e.target.value.slice(0, 8)

    if (e.target.value.length === 8) {
      fetch(`https://viacep.com.br/ws/${e.target.value}/json/`, {
        method: "GET",
      }).then((response) => {
        if (response.status === 200) {
          response.json().then((resp) => {
            if (!resp.erro) {
              props.funcUP("uf", resp.uf)
              props.funcUP("city", resp.localidade)
              resp.logradouro === ""
                ? setError("street")
                : resp.bairro === ""
                  ? setError("district")
                  : setError("streetNumb")
              props.funcUP("street", resp.logradouro)
              props.funcUP("streetNumb", "")
              props.funcUP("district", resp.bairro)
              props.funcUP("complement", resp.complemento)
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
    props.funcUP("uf", "")
    props.funcUP("city", "")
    props.funcUP("street", "")
    props.funcUP("streetNumb", "")
    props.funcUP("district", "")
    props.funcUP("complement", "")
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
          focused
          error={error === "zipCode" ? true : false}
          variant="outlined"
          margin="normal"
          label="CEP"
          type="number"
          placeholder="Digite o CEP"
          onChange={(e) => props.funcUP("zipCode", e.target.value)}
          onInput={handleZipCode}
          value={props.values.zipCode}
          style={
            props.editable
              ?
              { pointerEvents: "auto" }
              :
              { pointerEvents: "none" }
          }
        />
        <TextField
          focused
          variant="outlined"
          margin="normal"
          label="Estado"
          value={props.values.uf}
          style={{ marginLeft: ".5vw", pointerEvents: "none" }}
        />
        <TextField
          fullWidth
          focused
          variant="outlined"
          margin="normal"
          label="Cidade"
          value={props.values.city}
          style={{ marginLeft: ".5vw", pointerEvents: "none" }}
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
          focused
          error={error === "street" ? true : false}
          variant="outlined"
          margin="normal"
          label="Endereço"
          placeholder="Digite o endereço"
          onChange={(e) => props.funcUP("street", e.target.value)}
          onInput={Continue}
          value={props.values.street}
          style={
            props.editable
              ?
              { pointerEvents: "auto" }
              :
              { pointerEvents: "none" }
          }
        />
        <TextField
          required
          focused
          error={error === "streetNumb" ? true : false}
          variant="outlined"
          margin="normal"
          label="Número"
          type="number"
          placeholder="Digite aqui"
          onChange={(e) => props.funcUP("streetNumb", e.target.value)}
          onInput={Continue}
          value={props.values.streetNumb}
          style={
            props.editable
              ?
              { pointerEvents: "auto", marginLeft: ".5vw" }
              :
              { pointerEvents: "none", marginLeft: ".5vw" }
          }
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
          focused
          error={error === "district" ? true : false}
          variant="outlined"
          margin="normal"
          label="Bairro"
          placeholder="Digite o bairro"
          onChange={(e) => props.funcUP("district", e.target.value)}
          onInput={Continue}
          value={props.values.district}
          style={
            props.editable
              ?
              { pointerEvents: "auto", marginLeft: ".5vw" }
              :
              { pointerEvents: "none", marginLeft: ".5vw" }
          }
        />
        <TextField
          fullWidth
          focused
          variant="outlined"
          margin="normal"
          label="Complemento"
          placeholder="Digite o complemento"
          onChange={(e) => props.funcUP("complement", e.target.value)}
          onInput={Continue}
          value={props.values.complement}
          style={
            props.editable
              ?
              { pointerEvents: "auto", marginLeft: ".5vw" }
              :
              { pointerEvents: "none", marginLeft: ".5vw" }
          }
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
