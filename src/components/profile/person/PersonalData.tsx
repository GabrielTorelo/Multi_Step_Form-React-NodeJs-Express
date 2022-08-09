import styled from "styled-components"
import CardData from "./CardData"

const PersonalData = (props: any) => {
  return (
    <Container>
      {props.state.data.length !== 0 && props.state.data.every((x: null) => x === null) === true
        ? (
          <CardData
            editAd={props.edit}
            icoConfirmA={props.icoConfirmA}
            icoConfirmI={props.icoConfirmI}
            update={props.update}
            icoEditA={true}
            icoEditI={true}
            textEdit={props.textEdit}
            editDt={props.editDt}
            state={props.state}
          />
        ) : props.state.data.length !== 0 && props.state.data[0] === null
          ? (
            <CardData
              info={true}
              icoTrashI={true}
              editAd={props.edit}
              icoConfirmA={props.icoConfirmA}
              icoConfirmI={props.icoConfirmI}
              update={props.update}
              icoEditA={true}
              icoEditI={true}
              delData={props.delData}
              textEdit={props.textEdit}
              editDt={props.editDt}
              state={props.state}
            />
          ) : props.state.data.length !== 0 && props.state.data[1] === null
            ? (
              <CardData
                address={true}
                icoTrashA={true}
                editAd={props.edit}
                icoConfirmA={props.icoConfirmA}
                icoConfirmI={props.icoConfirmI}
                update={props.update}
                icoEditA={true}
                icoEditI={true}
                delData={props.delData}
                textEdit={props.textEdit}
                editDt={props.editDt}
                state={props.state}
              />
            ) : props.state.data.length !== 0
              ? (
                <CardData
                  address={true}
                  info={true}
                  icoTrashA={true}
                  icoTrashI={true}
                  editAd={props.edit}
                  icoConfirmI={props.icoConfirmI}
                  icoConfirmA={props.icoConfirmA}
                  update={props.update}
                  icoEditA={true}
                  icoEditI={true}
                  delData={props.delData}
                  textEdit={props.textEdit}
                  editDt={props.editDt}
                  state={props.state}
                />
              ) : <></>
      }
    </Container>
  )
}

const Container = styled.div`
  display: inherit;
  border-radius: inherit;
`

export default PersonalData
