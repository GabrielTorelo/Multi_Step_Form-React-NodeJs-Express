import styled from "styled-components"

const AboveTheData = (props: any) => {
  return (
    <Container>
      <h1>{props.title}</h1>
      {
        props.trash && !props.confirm
          ?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: "rgba(255, 0, 0, .8)" }} onClick={() => props.funcDel(props.col)}>
            <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" />
          </svg>
          :
          <></>
      }
      {
        props.edit && !props.confirm
          ?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: "rgba(240, 248, 255, .8)" }} onClick={() => props.funcEditIco(`ico${props.col}`, true)}>
            <path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z" />
          </svg>
          :
          <></>
      }
      {
        props.confirm
          ?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: "rgba(255, 0, 0, .8)" }} onClick={() => props.funcEditIco(`ico${props.col}`, false)}>
            <path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"/>
          </svg>
          :
          <></>
      }
      {
        props.confirm
          ?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: "rgba(100, 255, 0, .8)" }} onClick={() => props.update ? props.funcEdit(props.col) : <></>}>
            <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
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
