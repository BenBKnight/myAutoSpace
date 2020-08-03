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
    let newMaint = this.state.maintToAdd;
    console.log(newMaint)
    API.maintRecord(newMaint)
      .then((res) => {
        this.props.history.push(`/Vehicles/${this.state.maintToAdd.VehicleId}`)
      })
      .catch(err => {
        console.log(err);
      })
  };
  // setDate = () => {
  //     this.setState(prevState => {
  //         let maintToAdd = Object.assign({}, prevState.maintToAdd);
  //         maintToAdd.jobDate = this.state.year + "-" + this.state.month + "-" + this.state.day;
  //         console.log(maintToAdd.jobDate);
  //         return maintToAdd;
  //     })
  // };
  render() {
    // const jobYears = [
    //     "2020",
    //     "2019",
    //     "2018",
    //     "2017",
    //     "2016",
    //     "2015",
    //     "2014",
    //     "2013",
    //     "2012",
    //     "2011",
    //     "2009",
    //     "2008",
    //     "2007",
    //     "2006",
    //     "2005",
    //     "2004",
    //     "2003",
    //     "2002",
    //     "2001",
    //     "2000"
    // ];
    // const jobDays = [
    //     "1",
    //     "2",
    //     "3",
    //     "4",
    //     "5",
    //     "6",
    //     "7",
    //     "8",
    //     "9",
    //     "10",
    //     "11",
    //     "12",
    //     "13",
    //     "14",
    //     "15",
    //     "16",
    //     "17",
    //     "18",
    //     "19",
    //     "20",
    //     "21",
    //     "22",
    //     "23",
    //     "24",
    //     "25",
    //     "26",
    //     "27",
    //     "28",
    //     "29",
    //     "30",
    //     "31"
    // ];
    // const jobMonths = [
    //     "01",
    //     "02",
    //     "03",
    //     "04",
    //     "05",
    //     "06",
    //     "07",
    //     "08",
    //     "09",
    //     "10",
    //     "11",
    //     "12",
    // ]
    return (
      <>
      <Navbar>
        <NavbarLink url='/garage'>My Garage</NavbarLink>
        <NavbarLink url='/add-vehicle'>Add Vehicle</NavbarLink>
        <NavbarLink url='/add-maintenance' active={true}>Add Maintenance</NavbarLink>
        <ActionBtn url='/'>Sign Out</ActionBtn>
      </Navbar>
      <br></br>
      <br></br>
      <br></br>
      <div className='maintFlex'>
        <div className='addMaintenanceWrapper'>
          <h1 className='addMaintHeader'>New Maintenance</h1>
          <select className='carSelector'>
            <option value="grapefruit">Select Vehicle</option>
            <option value="lime">Car</option>
            <option value="coconut">Truck</option>
            <option value="mango">Bike</option>
          </select>
        </div>
        <div className='addMaintenanceWrapper'>
          <MaintInfoBox carMilage='160,000' carVin='21312j1jpoiefj32j' carYear='2002' carMake='Ford' carModel='Torus' />
        </div>
      </div>
      <br></br>
      <div className='maintFlex'>
        <div className='addMaintenanceWrapper'>
          <FormInputTwo setWidth='width100' name='jobName' type='text' label='Job Name'></FormInputTwo>
          <FormInputTwo setWidth='width100' name='milage' type='text' label='Milage at Service'></FormInputTwo>
          <span className='flex'>
            <FormInputTwo setWidth='width25' name='day' type='text' label='Service Day'></FormInputTwo>
            <FormInputTwo setWidth='width25' name='month' type='text' label='Service Month'></FormInputTwo>
            <FormInputTwo setWidth='width25' name='year' type='text' label='Service Year'></FormInputTwo>
          </span>
        </div>
        <div className='addMaintenanceWrapper'>
          <textarea className='inputText textArea maintAddTextArea' placeholder='Description' name='description' type='text' label='Description' />
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
        <ActionBtn url='/job'>Add Maintenance</ActionBtn>
      </div>

      <div className="section columns" >
        <Ancestor>
          <Card>
            <form id="maint-form">

              <FormInput handleInputChange={this.handleInputChange}
                id="name" value={this.state.job} placeholder="Job" type="text" />

              <FormInput handleInputChange={this.handleInputChange}
                id="jobDate" value={this.state.jobDate} placeholder="Job Date" type="text" />

              <FormInput handleInputChange={this.handleInputChange}
                id="milage" value={this.state.milage} placeholder="Vehicle Milage" type="text" />

              <FormInput handleInputChange={this.handleInputChange}
                id="description" value={this.state.description} placeholder="Description" type="text" />

              <FormInput handleInputChange={this.handleInputChange}
                id="parts" value={this.state.parts} placeholder="Parts" type="text" />
              <FormInputButton handleFormSubmit={this.handleFormSubmit} />
            </form>
          </Card>
        </Ancestor>
      </div>
      </>
        );
  }
}
export default withRouter(NewMaintenance);