import styled from "styled-components"
import AddressData from "./AddressData"
import InfoData from "./InfoData"
import AboveTheData from "./AboveTheData"

const CardData = (props: any) => {
  return (
    <Container>
      <Show>
        <AboveTheData
          title={"Endereço"}
          col={"Address"}
          edit={props.icoEditA}
          confirm={props.icoConfirmA}
          trash={props.icoTrashA}
          state={props.state}
          funcDel={props.delData}
          funcEditIco={props.textEdit}
          funcEdit={props.editDt}
          update={props.update}
        />
        {
          props.address || props.icoConfirmA
            ?
            <AddressData
              editable={props.icoConfirmA}
              funcUP={props.textEdit}
              values={props.state} />
            :
            <></>
        }
      </Show>
      <Show>
        <AboveTheData
          title={"Informações"}
          col={"Info"}
          edit={props.icoEditI}
          confirm={props.icoConfirmI}
          trash={props.icoTrashI}
          state={props.state}
          funcDel={props.delData}
          funcEditIco={props.textEdit}
          funcEdit={props.editDt}
          update={props.update}
        />
        {
          props.info || props.icoConfirmI
            ?
            <InfoData
              editable={props.icoConfirmI}
              funcUP={props.textEdit}
              values={props.state} />
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
