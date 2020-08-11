import React, { Component } from "react";
import './newMaintenance.css';
import API from "../utils/API";
import FormInputTwo from "../components/FormInputTwo";
import { withRouter } from "react-router-dom";
import Navbar from '../components/Navbar copy';
import NavbarLink from '../components/NavbarLink';
import ActionBtn from '../components/ActionBtn';
import MaintInfoBox from "../components/MaintInfoBox";
import ImageUpload from '../components/imageUpload/imageUpload';
import { app } from "../utils/base";
const db = app.firestore();

class NewMaintenance extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrl: '',
      percentage: 0,
      maintToAdd: {
        name: "",
        description: "",
        milage: "",
        parts: "",
        jobDate: "",
        imageUrl: '',
        VehicleId: localStorage.getItem("vehicleId")
      },
      year: "",
      day: "",
      month: "",
      vehicle: []
    };
  };
  handleInputChange = event => {
    console.log(this.state)
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.id;
    this.setState({
      maintToAdd: {
        ...this.state.maintToAdd,
        [name]: value
      }
    });
    // if (!this.state.email || !this.state.password) {
    //     return;
    // }
  };
  handleSelect = event => {
    let value = event.target.value;
    const name = event.target.id;
    console.log(event, value, name)

    this.setState({
      [name]: value
    });
    // if (!this.state.email || !this.state.password) {
    //     return;
    // }
  };
  handleFormSubmit = async (e) => {
    e.preventDefault();
    // this.setDate();
    //insert set state because you are not suppose to mutate state directly
    this.state.maintToAdd.VehicleId = this.state.vehicleId;
    let newMaint = this.state.maintToAdd;
    newMaint.VehicleId = this.state.vehicleID;
    API.maintRecord(newMaint)
      .then((res) => {
        this.props.history.push(`/Vehicles/${this.state.maintToAdd.VehicleId}`)
      })
      .catch(err => {
        console.log(err);
      })
    await db.collection("users").doc(this.state.maintToAdd.name).set({
      image: this.state.imageUrl,
    });
  };

  onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    // let myVar = setInterval(myTimer, 1000);

    // function myTimer() {
    //   if (this.state.percentage < 100) {
    //     this.setState({ percentage: this.state.percentage + 5 });
    //   } else clearInterval(myVar);
    // }
    await fileRef.put(file);
    this.setState({imageUrl: await fileRef.getDownloadURL() });
  }

  componentDidMount() {
    let location = this.props.match.params.id;
    this.setState({
      vehicleID: location
    }, () => {
      this.apiCall()
    })
  };

  apiCall = () => {
    console.log(this.state.vehicleID)
    API.vehicleById(this.state.vehicleID)
      .then((res) => {
        this.setState({
          vehicle: res.data[0]
        })
      })
      .catch(err => {
        console.log(err)
      })
  };
  signOut = () => { localStorage.removeItem("jwt.Token") }

  render() {
    return (
      <>
        <Navbar>
          <NavbarLink url='/members'>My Garage</NavbarLink>
          <NavbarLink url='/vehicles'>Add Vehicle</NavbarLink>
          <NavbarLink url='/add-maintenance' active={true}>Add Maintenance</NavbarLink>
          <ActionBtn handleClick={this.signOut} url='/'>Sign Out</ActionBtn>
        </Navbar>
        <br></br>
        <br></br>
        <br></br>
        <div className='maintFlex'>
          <div className='addMaintenanceWrapper'>
            <h1 className='addMaintHeader'>New Maintenance</h1>
          </div>
          <div className='addMaintenanceWrapper'>
            <MaintInfoBox vehicle={this.state.vehicle} carMilage={this.state.vehicle.mileage} carVin={this.state.vehicle.vin} carYear={this.state.vehicle.year} carMake={this.state.vehicle.make} carModel={this.state.vehicle.model} />
          </div>
        </div>
        <br></br>
        <div className='maintFlex'>
          <div className='addMaintenanceWrapper'>
            <FormInputTwo setWidth='width100' name='jobName' type='text' label='Job Name' id="name" value={this.state.maintToAdd.name} handleInputChange={this.handleInputChange}></FormInputTwo>
            <FormInputTwo setWidth='width100' name='milage' type='text' label='Milage at Service' id="milage" value={this.state.maintToAdd.milage} handleInputChange={this.handleInputChange}></FormInputTwo>
            <FormInputTwo setWidth='width100' name='jobDate' type='text' label='Service Date' id="jobDate" value={this.state.maintToAdd.jobDate} handleInputChange={this.handleInputChange}></FormInputTwo>
          </div>
          <div className='addMaintenanceWrapper'>
            <textarea className='inputText textArea maintAddTextArea' placeholder='Description' name='description' type='text' label='Description' id="description" value={this.state.description} onChange={this.handleInputChange} />
          </div>
        </div>
        <br />
        <div className='maintFlex'>
          <div className='addMaintenanceWrapper'>
            <span>
              <label className='photoFileLabel'>Add Photos</label>
              <progress className="progress is-link" value={this.state.percentage} max="100">{this.state.percentage}%</progress>
              <ImageUpload onFileChange={this.onFileChange} />
            </span>
          </div>
          <div className='addMaintenanceWrapper'>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className='newMaintBtn'>
          <ActionBtn url='#' handleClick={this.handleFormSubmit}>Add Maintenance</ActionBtn>
        </div>
      </>
    );
  }
}
export default withRouter(NewMaintenance);