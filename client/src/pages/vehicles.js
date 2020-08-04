import React, { Component } from "react";
import './vehicles.css';
import FormInput from "../components/formInput/formInput";
import FormInputTwo from "../components/FormInputTwo";
import DropDown from "../components/dropDown/dropDown";
import FormInputButton from "../components/formInputButton/FormInputButton";
import API from "../utils/API";
import Card from "../components/card/card";
import { AuthContext } from "../utils/authContext";
import Navbar from '../components/Navbar copy';
import NavbarLink from '../components/NavbarLink';
import ActionBtn from '../components/ActionBtn';
import FormImg from '../components/FormImg';

class Vehicles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: "",
      make: "",
      model: "",
      year: "",
      vin: "",
      mileage: "",
      yearPurchased: "",
      condition: "",
      accidents: "",
      numOfOwners: "",
      locationLastOwned: "",
      UserId: localStorage.getItem("userId"),
      
      vehicleType:{
        car: true,
        truck: false,
        bike: false
      },
      
      vehicleCondition:{
        good: true,
        fair: false,
        poor: false
      },
      
      vehicleOwners:{
        one: false,
        two: true,
        three: false,
        more: false
      }
    };
  }
  static contextType = AuthContext;

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.id;
    this.setState({
      [name]: value
    });
    // if (!this.state.email || !this.state.password) {
    //     return;
    // }
  };
  handleSelect = event => {
    let value = event.target.value;
    const name = event.target.id;
    this.setState({
      [name]: value
    });
    // if (!this.state.email || !this.state.password) {
    //     return;
    // }
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('hit');
    let vehicleNew = this.state;
    API.newVehicle(vehicleNew)
      .then((res) => {
        console.log("api returned", res);
      })
      .catch(err => {
        console.log(err);
      })
  };

  handleSelectionClick = (e) =>{
    e.preventDefault();
    const choiceValue = e.target.dataset.value;
    const choiceField = e.target.dataset.field;

    this.setState({
      [choiceField]:{
        [choiceValue]: true
      }
    })
  }

  render() {
    const conditionOptions = ["Excellent", "Good", "Fair"]
    const makeOptions = ["Car", "Truck", "Motorcycle"];


    return (
      <>
        <Navbar>
          <NavbarLink url='/members'>My Garage</NavbarLink>
          <NavbarLink url='/vehicles' active={true}>Add Vehicle</NavbarLink>
          <NavbarLink url='/add-maintenance'>Add Maintenance</NavbarLink>
          <ActionBtn url='/'>Sign Out</ActionBtn>
        </Navbar>
        <div className='addCarFlex'>
          <div className='width40 carSelectionFormat'>
            <h2 className='addCarSubHeader'>Select Vehicle Type</h2>
            <div className="carFormInputWrapper">
              <FormImg dataField='vehicleType' dataValue='car' src='car_gray.png' srcActive='car_blue.png' imgName='Car' active={this.state.vehicleType.car} handleSelectionClick={this.handleSelectionClick}></FormImg>
              <FormImg dataField='vehicleType' dataValue='truck' src='truck_gray.png' srcActive='truck_blue.png' imgName='Truck' active={this.state.vehicleType.truck} handleSelectionClick={this.handleSelectionClick}></FormImg>
              <FormImg dataField='vehicleType' dataValue='bike' src='bike_gray.png' srcActive='bike_blue.png' imgName='Motorcycle' active={this.state.vehicleType.bike} handleSelectionClick={this.handleSelectionClick}></FormImg>
            </div>
            <h2 className='addCarSubHeader'>Vehicle Condition</h2>
            <div className="carFormInputWrapper">
              <FormImg dataField='vehicleCondition' dataValue='good' src='good_gray.png' srcActive='good_blue.png' imgName='Good' active={this.state.vehicleCondition.good} handleSelectionClick={this.handleSelectionClick}></FormImg>
              <FormImg dataField='vehicleCondition' dataValue='fair' src='fair_gray.png' srcActive='fair_blue.png' imgName='Fair' active={this.state.vehicleCondition.fair} handleSelectionClick={this.handleSelectionClick}></FormImg>
              <FormImg dataField='vehicleCondition' dataValue='poor' src='poor_gray.png' srcActive='poor_blue.png' imgName='Poor' active={this.state.vehicleCondition.poor} handleSelectionClick={this.handleSelectionClick}></FormImg>
            </div>
            <h2 className='addCarSubHeader'>Number of Owners</h2>
            <div className="carFormInputWrapper">
              <FormImg dataField='vehicleOwners' dataValue='one' src='one_gray.png' srcActive='one_blue.png' imgName='One' active={this.state.vehicleOwners.one} handleSelectionClick={this.handleSelectionClick}></FormImg>
              <FormImg dataField='vehicleOwners' dataValue='two' src='two_gray.png' srcActive='two_blue.png' imgName='Two' active={this.state.vehicleOwners.two} handleSelectionClick={this.handleSelectionClick}></FormImg>
              <FormImg dataField='vehicleOwners' dataValue='three' src='three_gray.png' srcActive='three_blue.png' imgName='Three' active={this.state.vehicleOwners.three} handleSelectionClick={this.handleSelectionClick}></FormImg>
              <FormImg dataField='vehicleOwners' dataValue='more' src='more_gray.png' srcActive='more_blue.png' imgName='More' active={this.state.vehicleOwners.more} handleSelectionClick={this.handleSelectionClick}></FormImg>
            </div>
          </div>
          <div className='addCarWrapper'>
            <h1 className='addCarHeader'>Add a Vehicle</h1>
            <h1 className='addCarSubHeader'>Please fill out the required fields for adding your new vehicle</h1>
            <br></br>
            <br></br>
            <span className='flex'>
              <FormInputTwo setWidth='width45' name='make' type='text' label='Make' id="make" value={this.state.make} handleInputChange={this.handleInputChange}></FormInputTwo>
              <FormInputTwo setWidth='width45' name='model' type='text' label='Model' id="model" value={this.state.model} handleInputChange={this.handleInputChange}></FormInputTwo>
            </span>
            <FormInputTwo setWidth='width100' name='vin' type='text' label='Vin' id="vin" value={this.state.vin} handleInputChange={this.handleInputChange}></FormInputTwo>
            <span className='flex'>
              <FormInputTwo setWidth='width45' name='vehicleYear' type='text' label='Vehicle Year' id="year" value={this.state.year} handleInputChange={this.handleInputChange}></FormInputTwo>
              <FormInputTwo setWidth='width45' name='milage' type='text' label='Milage' id="mileage" value={this.state.mileage} handleInputChange={this.handleInputChange}></FormInputTwo>
            </span>
            <span className='flex'>
              <FormInputTwo setWidth='width45' name='yearOfPurchase' type='text' label='Year of Purchase' id="yearPurchased" value={this.state.yearPurchased} handleInputChange={this.handleInputChange}></FormInputTwo>
              <FormInputTwo setWidth='width45' name='accidents' type='text' label='Number of Accidents' id="accidents" value={this.state.accidents} handleInputChange={this.handleInputChange}></FormInputTwo>
            </span>
            <ActionBtn url='#' handleClick={this.handleFormSubmit}>Add Vehicle</ActionBtn>
          </div>
        </div>
        <div className="container-center-col">
          <br />
          <Card title={"Add Your Vehicle"}>
          </Card>
          <br />
          <Card>
            <form id="vehicleForm ">
              <DropDown handleSelect={this.handleSelect} title={"Vehicle Type:"} id="type" value={this.state.type} options={makeOptions} />

              <FormInput handleInputChange={this.handleInputChange}
                id="make" value={this.state.make} placeholder="Make" type="text">Make:
                                    </FormInput>

              <FormInput handleInputChange={this.handleInputChange}
                id="model" value={this.state.model} placeholder="Model" type="text">Model
                                    </FormInput>

              <FormInput handleInputChange={this.handleInputChange}
                id="year" value={this.state.year} placeholder="Year" type="text">Year
                                    </FormInput>

              <FormInput handleInputChange={this.handleInputChange}
                id="vin" value={this.state.vin} placeholder="Vin" type="text">Vin:
                                    </FormInput>

              <FormInput handleInputChange={this.handleInputChange}
                id="mileage" value={this.state.mileage} placeholder="Mileage" type="text">Mileage:
                                    </FormInput>

              <FormInput handleInputChange={this.handleInputChange}
                id="yearPurchased" value={this.state.yearPurchased} placeholder="Purchased Year" type="text">Purchased Year:
                                    </FormInput>
              <DropDown handleSelect={this.handleSelect} title={"Vehicle Condition:"} id="condition" value={this.state.type} options={conditionOptions} />

              <FormInput handleInputChange={this.handleInputChange}
                id="accidents" value={this.state.accidents} placeholder="Number of Accidents" type="text">Number of Accidents:
                                    </FormInput>

              <FormInput handleInputChange={this.handleInputChange}
                id="numOfOwners" value={this.state.numOfOwners} placeholder="Number of Previous Owners" type="text">Number of Previous Owners:
                                    </FormInput>

              <FormInput handleInputChange={this.handleInputChange}
                id="locationLastOwned" value={this.state.locationLastOwned} placeholder="Location Last Owned" type="text">Location Last Owned:
                                    </FormInput>
              <FormInputButton handleFormSubmit={this.handleFormSubmit}>Add Vehicle</FormInputButton>
            </form>
          </Card>
        </div>
      </>
    );
  }
}
export default Vehicles;