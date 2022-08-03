import styled from "styled-components"

const AboveTheData = (props: any) => {
  return (
    <Container>
      <h1>{props.title}</h1>
      {
        props.trash
        ?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: "rgba(255, 0, 0, .8)" }} onClick={() => props.func(props.col, props.userID)}>
            <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" />
          </svg>
        :
          <></>
      }
      {
        props.edit
        ?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: "rgba(240, 248, 255, .8)" }} onClick={() => props.func(props.col, props.userID)}>
            <path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z" />
          </svg>
        :
          <></>
      }
    </Container>
  )
}

const Container = styled.div`
  display: inherit;
  flex-direction: row;
  justify-content: space-around;

  & > svg {
    width: 5%;
    cursor: pointer;
  }
`

export default AboveTheData
