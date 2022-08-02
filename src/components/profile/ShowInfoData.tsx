import styled from "styled-components"
import { TextField, Box } from "@material-ui/core"

const ShowInfoData = (props: any) => {
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
          disabled
          variant="outlined"
          margin="normal"
          label="Primeiro Nome"
          value={props.values[1].firstName}
        />
        <TextField
          fullWidth
          disabled
          variant="outlined"
          margin="normal"
          label="Último Nome"
          value={props.values[1].lastName}
        />
        <TextField
          fullWidth
          disabled
          variant="outlined"
          margin="normal"
          label="Idade"
          value={props.values[1].age}
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
