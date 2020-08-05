import React, { Component } from "react";
import API from "../utils/API";
import './members.css';
import Vehicles from "../components/vehicles/vehicles";
import Card from "../components/card/card";
import Header from "../components/header/header";
import Subtitle from "../components/subtitle/subtitle";
import Navbar from '../components/Navbar copy';
import NavbarLink from '../components/NavbarLink';
import ActionBtn from '../components/ActionBtn';
import CarInfoBox from '../components/CarInfoBox';
import UserInfo from '../components/UserInfo';


class Members extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: localStorage.getItem("userId"),
      vehicle: []
    }
  };
  componentDidMount() {
    API.allVehicles(this.state.userId)
      .then(res => {
        console.log(res.data);
        this.setState({
          vehicle: res.data
        }
        )
      })
      .catch(err => {
        console.log(err);
      })

    API.userData()
      .then (res => {
        this.setState({
          userInfo: res
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    console.log(this.state);
    return (
      <>
      <Navbar>
        <NavbarLink url='/members' active={true}>My Garage</NavbarLink>
        <NavbarLink url='/vehicles'>Add Vehicle</NavbarLink>
        <NavbarLink url='/add-maintenance'>Add Maintenance</NavbarLink>
        <ActionBtn url='/'>Sign Out</ActionBtn>
      </Navbar>
      <div className='garageWrapper'>
        <div className='garageSidebar'>
          <UserInfo/>
        </div>
        <div className='garageMain'>
          <h1 className='garagePageTitle'>My Garage</h1>
          <br></br>
          <br></br>
          <br></br>
          {this.state.vehicle.map(vehicles => (
              <span key={vehicles.id}>
                <CarInfoBox
                  vehicle={vehicles}
                />
              </span>
            ))}
        </div>
        <div className='garageSidebar'></div>
      </div>
      </>
        );
  }
}
export default Members;