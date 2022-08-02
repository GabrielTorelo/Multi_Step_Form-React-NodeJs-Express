import styled from "styled-components"
import { TextField } from "@material-ui/core"

const ShowInfoData = (props: any) => {
    return (
        <Container>
            <TextField
                fullWidth
                disabled
                variant="outlined"
                margin="normal"
                label="Primeiro Nome"
            // value={props.values.firstName}
            />
            <TextField
                fullWidth
                disabled
                variant="outlined"
                margin="normal"
                label="Último Nome"
            // value={props.values.lastName}
            />
            <TextField
                fullWidth
                disabled
                variant="outlined"
                margin="normal"
                label="Idade"
            // value={props.values.age}
            />
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

    & > div > div > input {
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 5px;
    }
`

export default ShowInfoData
