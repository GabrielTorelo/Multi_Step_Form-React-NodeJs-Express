import styled from "styled-components"
import { Component } from "react"
import API from "../api/user"
import Banner from "../components/profile/banner/Banner"
import Summary from "../components/profile/banner/Summary"
import PersonalData from "../components/profile/person/PersonalData"

class Profile extends Component<any, any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      userID: "2XqZt6Ms5LaoWyUxyLD0R1u4ryB2",
      icoAddress: false,
      icoInfo: false,
      update: false,
      firstName: '',
      lastName: '',
      age: '',
      zipCode: '',
      uf: '',
      city: '',
      street: '',
      streetNumb: '',
      district: '',
      complement: '',
    }
  }

  componentDidMount() {
    window.onload = () => {
      this.getData();
    }
  }

  getData = () => {
    API.get(`/${this.state.userID}`)
      .then(resp => {
        this.setState({ data: resp.data })
        resp.data[0] !== null
          ?
          this.setState({
            zipCode: resp.data[0].zipCode,
            uf: resp.data[0].uf,
            city: resp.data[0].city,
            street: resp.data[0].street,
            streetNumb: resp.data[0].streetNumb,
            district: resp.data[0].district,
            complement: resp.data[0].complement
          })
          :
          <></>
        resp.data[1] !== null
          ?
          this.setState({
            firstName: resp.data[1].firstName,
            lastName: resp.data[1].lastName,
            age: resp.data[1].age
          })
          :
          <></>
      })
      .catch(e => {
        console.log(e);
      })
  }

  delData = (col: string) => {
    API.delete(`/${col}/${this.state.userID}`)
      .then(() => {
        this.getData()
        this.cleanAll(col)
      })
      .catch((e) => {
        console.log(e);
      })
  }
  
  cleanAll = (col: string) => {
    if (col === "Address") {
      this.handlEdit("zipCode", "")
      this.handlEdit("uf", "")
      this.handlEdit("city", "")
      this.handlEdit("street", "")
      this.handlEdit("streetNumb", "")
      this.handlEdit("district", "")
      this.handlEdit("complement", "")
    } 
    else if (col === "Info") {
      this.handlEdit("firstName", "")
      this.handlEdit("lastName", "")
      this.handlEdit("age", "")
    }
    else {
      console.log("Error! Column not found")
    }
  }

  handlEdit = (state: string, value: any) => {
    this.setState({ [state]: value })
  }

  editData = (col: string) => {
    this.setState({ update: false })
    let method = API.put

    if (this.state.data[0] === null || this.state.data[1] === null) {
      method = API.post
    }

    if (col === "Address") {
      method(`/${col}/${this.state.userID}`, {
        zipCode: this.state.zipCode,
        uf: this.state.uf,
        city: this.state.city,
        street: this.state.street,
        streetNumb: this.state.streetNumb,
        district: this.state.district,
        complement: this.state.complement
      })
        .then(() => {
          this.setState({ [`ico${col}`]: false })
          this.getData()
        })
        .catch((e) => {
          console.log(e);
        })
    }
    else if (col === "Info") {
      method(`/${col}/${this.state.userID}`, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age
      })
        .then(() => {
          this.setState({ [`ico${col}`]: false })
          this.getData()
        })
        .catch((e) => {
          console.log(e);
        })
    }
    else console.log("Error! Column not found")
  }

  render() {
    return (
      <Container>
        <Banner
          state={this.state}
        />
        <Summary />
        <PersonalData
          delData={this.delData}
          textEdit={this.handlEdit}
          editDt={this.editData}
          icoConfirmA={this.state.icoAddress}
          icoConfirmI={this.state.icoInfo}
          update={this.state.update}
          state={this.state}
        />
      </Container>
    )
  }
}

const Container = styled.div`
    display: flex;
	width: 80%;
	flex-direction: column;
	background-color: transparent;
    justify-content: center;
	border-radius: 20px;
	margin: auto;
	margin-top: 3%;
	margin-bottom: 3%;

    @media (max-width: 768px){
        width: 95%;
		border-radius: 10px;
    }
`

export default Profile
