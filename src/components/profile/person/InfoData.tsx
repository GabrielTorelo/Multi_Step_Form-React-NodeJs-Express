import styled from "styled-components"
import { TextField, Box } from "@material-ui/core"
import { useState } from "react"

const ShowInfoData = (props: any) => {
  const [error, setError] = useState("")

  const Continue = (e: any) => {
    setError("")
    props.values.firstName === ""
      ? setError("fistName")
      : props.values.lastName === ""
        ? setError("lastName")
        : props.values.age === ""
          ? setError("age")
          : parseInt((e.target as HTMLInputElement).value) < 16
            ? setError("age")
            : props.funcUP("update", true)
  }

  return (
    <Container>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <TextField
          fullWidth
          required
          focused
          error={error === "firstName" ? true : false}
          variant="outlined"
          margin="normal"
          label="Primeiro Nome"
          onChange={(e) => props.funcUP("firstName", e.target.value)}
          onInput={Continue}
          value={props.values.firstName}
          style={
            props.editable
              ?
              { pointerEvents: "auto" }
              :
              { pointerEvents: "none" }
          }
        />
        <TextField
          fullWidth
          required
          focused
          error={error === "lastName" ? true : false}
          variant="outlined"
          margin="normal"
          label="Último Nome"
          onChange={(e) => props.funcUP("lastName", e.target.value)}
          onInput={Continue}
          value={props.values.lastName}
          style={
            props.editable
              ?
              { pointerEvents: "auto" }
              :
              { pointerEvents: "none" }
          }
        />
        <TextField
          fullWidth
          required
          focused
          error={error === "age" ? true : false}
          variant="outlined"
          margin="normal"
          label="Idade"
          onChange={(e) => props.funcUP("age", e.target.value)}
          onInput={Continue}
          value={props.values.age}
          style={
            props.editable
              ?
              { pointerEvents: "auto" }
              :
              { pointerEvents: "none" }
          }
        />
      </Box>
    </Container>
  )
}

const Container = styled.div`
    display: inherit;
    width: 50%;
    flex-direction: column;
    align-self: center;
    margin-bottom: 5vh;

    & > div > div > div > input {
        background-color: rgba(255, 255, 255, 0.8);
        -webkit-text-fill-color: black;
        border-radius: 5px;
    }

    & > div > div > label {
      display: inherit;
      -webkit-text-fill-color: rgba(255, 255, 255, 0.8);
      background-color: black;
      padding: .1vw 1vw .1vw;
      border-radius: 5px;
      

      @media (max-width: 768px){
        padding: .5vw 1vw .5vw;
      }
    }
`

export default ShowInfoData
