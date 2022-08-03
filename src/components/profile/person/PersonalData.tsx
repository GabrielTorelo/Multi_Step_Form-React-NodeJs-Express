import styled from "styled-components"
import CardData from "./CardData"
import { useEffect, useState } from "react"
import API from "../../../api/user"

const PersonalData = () => {
  const [data, setData] = useState([])
  const [userID] = useState("123")

  useEffect(() => {
    window.onload = () => {
      getData()
    }
  })

  const getData = () => {
    API.get(`/${userID}`)
      .then(resp => {
        setData(resp.data)
      })
      .catch(e => {
        console.log(e);
      })
  }

  const delData = (col: string, userID: string) => {
    API.delete(`/${col}/${userID}`)
      .then(() => {
        getData()
      })
      .catch((e) => {
        console.log(e);
      })
  }

  return (
    <Container>
      {data.length !== 0 && data.every(x => x === null) === true
        ? (
          <CardData
            address={false}
            info={false}
          />
        ) : data.length !== 0 && data[0] === null
          ? (
            <CardData
              address={false}
              info={true}
              trashI={true}
              userID={userID}
              delData={delData}
              data={data}
            />
          ) : data.length !== 0 && data[1] === null
            ? (
              <CardData
                address={true}
                info={false}
                trashA={true}
                userID={userID}
                delData={delData}
                data={data}
              />
            ) : data.length !== 0
              ? (
                <CardData
                  address={true}
                  info={true}
                  trashA={true}
                  trashI={true}
                  userID={userID}
                  delData={delData}
                  data={data}
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
