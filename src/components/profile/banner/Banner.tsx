import styled from "styled-components"
import { useState, useEffect } from "react"
import SocialMedia from "./SocialMedia"

const Banner = (props: any) => {
  const [name, setName] = useState("")
  const [picProfile] = useState("https://bit.ly/3oQz4EI")
  const [picBackGround] = useState("https://bit.ly/3vBB5si")

  useEffect(() => {
    props.state.data.length !== 0 && props.state.data[1] !== null
      ?
      setName(
        `${props.state.data[1].firstName} ${props.state.data[1].lastName}`
      )
      : setName("Usuário")
  }, [props.state.data])

  return (
    <Container style={{ backgroundImage: `url(${picBackGround})` }}>
      <LeftBar>
        <Picture style={{ backgroundImage: `url(${picProfile})` }} />
        <Name>{name}</Name>
      </LeftBar>
      <RightBar>
        <SocialMedia />
      </RightBar>
    </Container>
  )
}

const Container = styled.div`
	display: inherit;
	width: 100%;
	height: 100%;
	flex-direction: row;
	align-items: flex-start;
    justify-content: space-between;
	border-radius: inherit;
	background-color: rgba(0, 0, 0, .5);
    background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
    padding-bottom: 10vh;

	@media (max-width: 768px) {
		align-items: center;
		flex-direction: column;
	}
`

const LeftBar = styled.div`
    display: inherit;
    
    @media (max-width: 768px) {
		align-items: inherit;
		flex-direction: inherit;
        margin: 0 0 5vh;
	}
`

const Picture = styled.div`
	display: inherit;
	min-width: 100px;
	min-height: 100px;
	border-radius: 100px;
	background-color: black;
    background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	margin: 5vh;

	@media (max-width: 768px) {
		margin: 5vh 0 2.5vh;
	}
`

const Name = styled.div`
	display: inherit;
	align-self: center;
	font-family: inherit;
	font-size: 2rem;
	font-weight: 700;
	color: white;
	text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.8);
	margin: 0;

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`

const RightBar = styled.div`
	display: inherit;
	align-self: center;

	@media (max-width: 768px) {
        display: none;
    }
`

export default Banner
