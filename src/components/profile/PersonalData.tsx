import styled from "styled-components"
import ShowAddressData from "./ShowAddressData"
import ShowInfoData from "./ShowInfoData"

const PersonalData = (props: any) => {
	return (
		<Container>
            <Show>
                <h1>Endereço</h1>
                <ShowAddressData />
            </Show>
            <Show>
                <h1>Informações Pessoais</h1>
                <ShowInfoData />
            </Show>
		</Container>
	)
}

const Container = styled.div`
    display: inherit;
	width: 100%;
	flex-direction: row;
	border-radius: inherit;
    justify-content: space-evenly;
	color: white;
	font-family: inherit;
    

	@media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
	}
`

const Show = styled.div`
    display: inherit;
	width: 45%;
	flex-direction: column;
	border-radius: inherit;
	background-color: rgb(35, 52, 60);
	color: white;
	font-family: inherit;
    margin-top: 4%;

	@media (max-width: 768px) {
        width: 100%;
		align-items: center;
        margin-top: 2vh;
        
	}

	& > h1 {
		margin-top: 5vh;
		align-self: center;
	}
`

export default PersonalData
