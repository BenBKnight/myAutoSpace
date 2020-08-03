import React from 'react';
import './addVehicle.css';
import NavbarLink from '../components/NavbarLink';
import Navbar from '../components/Navbar';
import ActionBtn from '../components/ActionBtn';
import FormInput from '../components/FormInput'
import FormImg from '../components/FormImg';
// import FormImgSelection from './components/FormImgSelection';



class AddVehicle extends React.Component {

  state = {
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
  }

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

  render(){
    return (
      <>
      <Navbar>
        <NavbarLink url='/garage'>My Garage</NavbarLink>
          <NavbarLink url='/add-vehicle' active={true}>Add Vehicle</NavbarLink>
          <NavbarLink url='/add-maintenance'>Add Maintenance</NavbarLink>
          <ActionBtn url='/'>Sign Out</ActionBtn>
      </Navbar>
      <br></br>
      <br></br>
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
            <FormInput setWidth='width45' name='make' type='text' label='Make'></FormInput>
            <FormInput setWidth='width45' name='model' type='text' label='Model'></FormInput>
          </span>
          <FormInput setWidth='width100' name='vin' type='text' label='Vin'></FormInput>
          <span className='flex'>
            <FormInput setWidth='width45' name='vehicleYear' type='text' label='Vehicle Year'></FormInput>
            <FormInput setWidth='width45' name='milage' type='text' label='Milage'></FormInput>
          </span>
          <span className='flex'>
            <FormInput setWidth='width45' name='yearOfPurchase' type='text' label='Year of Purchase'></FormInput>
            <FormInput setWidth='width45' name='accidents' type='text' label='Number of Accidents'></FormInput>
          </span>
          <ActionBtn url='/garage'>Add Vehicle</ActionBtn>
        </div>
      </div>
      </>
    );
  }
}

export default AddVehicle;
