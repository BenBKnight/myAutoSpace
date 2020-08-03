import React from 'react';
import './vehicleHome.css';
import NavbarLink from '../components/NavbarLink';
import Navbar from '../components/Navbar';
import ActionBtn from '../components/ActionBtn';
import CarInfoSidebar from '../components/CarInfoSidebar';
import VehicleOverviewBox from '../components/VehicleOverviewBox';
import VehicleMaintBox from '../components/VehicleMaintBox';
import FormLine from '../components/FormLine';
import { Link } from "react-router-dom";



class VehicleHome extends React.Component {

  state = {
  }

  render() {
    return (
      <>
        <Navbar>
        <NavbarLink url='/garage'>My Garage</NavbarLink>
          <NavbarLink url='/add-vehicle'>Add Vehicle</NavbarLink>
          <NavbarLink url='/add-maintenance'>Add Maintenance</NavbarLink>
          <ActionBtn url='/'>Sign Out</ActionBtn>
        </Navbar>
        <div className='garageWrapper'>
          <div className='garageSidebar'>
            <CarInfoSidebar />
          </div>
          <div className='garageMain'>
            <h1 className='garagePageTitle'>Car Name</h1>
            <br></br>
            <br></br>
            <br></br>
            <VehicleOverviewBox />
            <VehicleMaintBox header='Recent Maintenance'>
              <FormLine lineTitle='Break Replacement' lineHeadOne='Service Date' lineHeadTwo='Service Milage' lineValOne='10/16/19' lineValTwo='160,000'/>
              <FormLine lineTitle='Struts' lineHeadOne='Service Date' lineHeadTwo='Service Milage' lineValOne='10/16/19' lineValTwo='160,000'/>
              <FormLine lineTitle='Oil Change' lineHeadOne='Service Date' lineHeadTwo='Service Milage' lineValOne='10/16/19' lineValTwo='160,000'/>
              <ActionBtn url="/add-maintenance">Add Maintenance</ActionBtn>
            </VehicleMaintBox>
            <VehicleMaintBox header='Recommended Maintenance'>
              <FormLine lineTitle='Break Replacement' lineHeadOne='Service Milage' lineHeadTwo='Complete Service' lineValOne='160,000' checkbox='display'/>
              <FormLine lineTitle='Break Replacement' lineHeadOne='Service Milage' lineHeadTwo='Complete Service' lineValOne='160,000' checkbox='display'/>
            </VehicleMaintBox>
          </div>
          <div className='garageSidebar vehicleLinksSidebar'>
            <div className='vehicleBoxLinkContainer'>
              <Link to='/vehicle'>
                <p className='vehicleBoxLink'>View Vehicle</p>
              </Link>
              <p className='vehicleBoxLink'>Update Milage</p>
              <Link to='/add-maintenance'>
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

export default VehicleHome;