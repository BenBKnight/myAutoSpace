import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";


class CarInfoBox extends React.Component {

  deleteVehicle = (vehicleId) => {
    console.log("delete");
  };

  render() {
    return (
      <div className='carInfoBox'>
        <span className='carBoxTopInfo'>
          <img className='carBoxImg' src={require('../FormImg/img/car_gray.png')} alt='Vehicle' />
          <div>
            <h2 className='carBoxTitle'>{this.props.vehicle.year} {this.props.vehicle.make} {this.props.vehicle.model}</h2>
            <br></br>
            <p className='carBoxText'>Milage: {this.props.vehicle.mileage}</p>
            <p className='carBoxText'>Vin: {this.props.vehicle.vin}</p>
          </div>
        </span>
        <br></br>
        <span className='carBoxMoreInfo'>
          <div>
            <p className='carBoxText'>Last Oil Change: {this.props.vehicle.mileage}</p>
            <p className='carBoxText'>Condition: {this.props.vehicle.condition}</p>
            <p className='carBoxText'>Accidents: {this.props.vehicle.accidents}</p>
          </div>
          <div className='carBoxLinkContainer'>
            <Link to={`/vehicles/${this.props.vehicle.id}`}>
              <p className='carBoxLink'>View Vehicle</p>
            </Link>
            <p className='carBoxLink'>Update Milage</p>
            <Link to={`/NewMaintenance/${this.props.vehicle.id}`}>
              <p className='carBoxLink'>New Maintenance</p>
            </Link>
            <p className='carBoxLinkRed' onClick={this.deleteVehicle}>Delete</p>
          </div>
        </span>
      </div>
    );
  }
}

export default CarInfoBox;