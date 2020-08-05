import React, { Component } from "react";
import './newMaintenance.css';
import Card from "../components/card/card";
import Ancestor from "../components/ancestor/ancestor";
import API from "../utils/API";
import FormInput from "../components/formInput/formInput";
import FormInputTwo from "../components/FormInputTwo";
import FormInputButton from "../components/formInputButton/FormInputButton";
import { withRouter } from "react-router-dom";
import Navbar from '../components/Navbar copy';
import NavbarLink from '../components/NavbarLink';
import ActionBtn from '../components/ActionBtn';
import MaintInfoBox from '../components/MaintInfoBox';


class NewMaintenance extends Component {
  constructor(props) {
    super(props)
    this.state = {
      maintToAdd: {
        name: "",
        description: "",
        milage: "",
        parts: "",
        jobDate: "",
        VehicleId: localStorage.getItem("vehicleId")
      },
      year: "",
      day: "",
      month: ""
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
  handleFormSubmit = (e) => {
    e.preventDefault();
    // this.setDate();
    this.state.maintToAdd.VehicleId = this.state.vehicleId;
    let newMaint = this.state.maintToAdd;
    newMaint.VehicleId = this.state.vehicleID;
    console.log(newMaint)
    API.maintRecord(newMaint)
      .then((res) => {
        this.props.history.push(`/Vehicles/${this.state.maintToAdd.VehicleId}`)
      })
      .catch(err => {
        console.log(err);
      })
  };

  componentDidMount() {
    let location = this.props.match.params.id;
    this.setState({
      vehicleID: location
    }, () => {
      this.apiCall()
    })
  };
  
  apiCall = () => {
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

  render() {
    console.log('render');
    console.log(this.state);
    return (
      <>
      <Navbar>
        <NavbarLink url='/members'>My Garage</NavbarLink>
        <NavbarLink url='/vehicles'>Add Vehicle</NavbarLink>
        <NavbarLink url='/add-maintenance' active={true}>Add Maintenance</NavbarLink>
        <ActionBtn url='/'>Sign Out</ActionBtn>
      </Navbar>
      <br></br>
      <br></br>
      <br></br>
      <div className='maintFlex'>
        <div className='addMaintenanceWrapper'>
          <h1 className='addMaintHeader'>New Maintenance</h1>
        </div>
        <div className='addMaintenanceWrapper'>
          {/* <MaintInfoBox vehicle={this.state.vehicle} carMilage={this.state.vehicle.mileage} carVin={this.state.vehicle.vin} carYear={this.state.vehicle.year} carMake={this.state.vehicle.make} carModel={this.state.vehicle.model} /> */}
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
          <textarea className='inputText textArea maintAddTextArea' placeholder='Description' name='description' type='text' label='Description' id="description" value={this.state.description} onChange={this.handleInputChange}/>
        </div>
      </div>
      <br />
      <div className='maintFlex'>
        <div className='addMaintenanceWrapper'>
          <span>
            <label className='photoFileLabel'>Add Parts</label>
            <input type='file' />
          </span>
        </div>
        <div className='addMaintenanceWrapper'>
          <span>
            <label className='photoFileLabel'>Add Photos</label>
            <input type='file' />
          </span>
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