import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./vehicleDisplay.css";
import API from "../utils/API";
import Navbar from '../components/Navbar copy';
import NavbarLink from '../components/NavbarLink';
import ActionBtn from '../components/ActionBtn';
import FormLine from '../components/FormLine';
import VehicleMaintBox from '../components/VehicleMaintBox';
import VehicleOverviewBox from '../components/VehicleOverviewBox';
import CarInfoSidebar from '../components/CarInfoSidebar';

class VehicleDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicleID: "",
      vehicle: {},
      conditionDescription: "",
      maintRecords: [],
      maintRecordsTable: {}
    };
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
      .then(() => {
        this.setCondition();
        this.maintRecords();
      })
  }
  setCondition() {
    switch (this.state.vehicle.condition) {
      case "Excellent":
        this.setState({
          conditionDescription: "Looks new and is in excellent mechanical condition!"
        });
        break;
      case "Fair":
        this.setState({
          conditionDescription: "Has some repairable cosmetic defects and is free of major mechanical problems."
        });
        break;
      case "Poor":
        this.setState({
          conditionDescription: "Has some cosmetic defects that require repairing and/or mechanical problems."
        });
        break;
      default: this.setState({
        condition: "No Description Available"
      })
    }
  };

  maintRecords() {
    API.getMaintRecords(this.state.vehicleID)
      .then((res) => {
        this.setState({
          maintRecords: res.data
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
          <NavbarLink url='/add-maintenance'>Add Maintenance</NavbarLink>
          <ActionBtn handleClick={this.signOut} url='/'>Sign Out</ActionBtn>
        </Navbar>
        <div className='garageWrapper'>
          <div className='garageSidebar'>
            <CarInfoSidebar vehicle={this.state.vehicle} />
          </div>
          <div className='garageMain'>
            <h1 className='garagePageTitle'>{this.state.vehicle.make} {this.state.vehicle.model}</h1>
            <br></br>
            <br></br>
            <br></br>
            <VehicleOverviewBox vehicle={this.state.vehicle} />
            <VehicleMaintBox header='Recent Maintenance'>
              {this.state.maintRecords.map(job => (
                <span key={job.id}>
                  <Link to={`/MaintRecord/${job.id}`}>
                    <FormLine lineTitle={job.name} lineHeadOne='Service Date' lineHeadTwo='Service Milage' lineValOne={job.jobDate} lineValTwo={job.milage} />
                  </Link>
                </span>
              ))}
              <ActionBtn url={`/NewMaintenance/${this.state.vehicle.id}`}>Add Maintenance</ActionBtn>
            </VehicleMaintBox>
            <VehicleMaintBox header='Recommended Maintenance'>
              <FormLine lineTitle='Break Replacement' lineHeadOne='Service Milage' lineHeadTwo='Complete Service' lineValOne='160,000' checkbox='display' />
              <FormLine lineTitle='Break Replacement' lineHeadOne='Service Milage' lineHeadTwo='Complete Service' lineValOne='160,000' checkbox='display' />
            </VehicleMaintBox>
          </div>
          <div className='garageSidebar vehicleLinksSidebar'>
            <div className='vehicleBoxLinkContainer'>
              <p className='vehicleBoxLink'>Update Milage</p>
              <Link to={`/NewMaintenance/${this.state.vehicle.id}`}>
                <p className='vehicleBoxLink'>New Maintenance</p>
              </Link>
              <p className='vehicleBoxLinkRed'>Delete</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(VehicleDisplay);