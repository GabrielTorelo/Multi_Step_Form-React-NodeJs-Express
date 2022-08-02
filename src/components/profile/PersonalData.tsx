import styled from "styled-components"
import ShowAddressData from "./ShowAddressData"
import ShowInfoData from "./ShowInfoData"
import { useEffect, useState } from "react"
import API from "../../api/user"

const PersonalData = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    API.get(`/2XqZt6Ms5LaoWyUxyLD0R1u4ryB2`)
      .then(resp => {
        setData(resp.data)
      })
      .catch(e => {
        console.log(e);
      })
  })

  return (
    <Main>
      {Object.keys(data).length !== 0
        ? (
          <Container>
            <Show>
              <h1>Endereço</h1>
              <ShowAddressData values={data} />
            </Show>
            <Show>
              <h1>Informações</h1>
              <ShowInfoData values={data} />
            </Show>
          </Container>
        )
        : <></>
      }
    </Main>
  )
}

const Main = styled.div`
  display: inherit;
  border-radius: inherit;
`

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
