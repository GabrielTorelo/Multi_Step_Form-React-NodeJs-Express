import styled from "styled-components"
import ShowAddressData from "./ShowAddressData"
import ShowInfoData from "./ShowInfoData"
import AboveTheData from "./AboveTheData"

const CardData = (props: any) => {
  return (
    <Container>
      <Show>
        <AboveTheData
          title={"Endereço"}
          edit={true}
          trash={props.trashA}
          func={props.delData}
          col={"Address"}
          userID={props.userID}
        />
        {
          props.address
            ?
            <ShowAddressData values={props.data} />
            :
            <></>
        }
      </Show>
      <Show>
        <AboveTheData
          title={"Informações"}
          edit={true}
          trash={props.trashI}
          func={props.delData}
          col={"Info"}
          userID={props.userID}
        />
        {
          props.info
            ?
            <ShowInfoData values={props.data} />
            :
            <></>
        }
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

export default CardData
