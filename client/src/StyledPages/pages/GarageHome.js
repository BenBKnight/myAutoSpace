import React from 'react';
import './garageHome.css';
import NavbarLink from '../components/NavbarLink';
import Navbar from '../components/Navbar';
import ActionBtn from '../components/ActionBtn';
import CarInfoBox from '../components/CarInfoBox';
import UserInfo from '../components/UserInfo';




class GarageHome extends React.Component {

  state = {
  }

  render() {
    return (
      <>
        <Navbar>
          <NavbarLink url='/garage' active={true}>My Garage</NavbarLink>
          <NavbarLink url='/add-vehicle'>Add Vehicle</NavbarLink>
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
            <CarInfoBox/>
            <CarInfoBox/>
            <CarInfoBox/>
            <CarInfoBox/>
          </div>
          <div className='garageSidebar'></div>
        </div>
      </>
    );
  }
}

export default GarageHome;
