import React from 'react';
import './maintJob.css';
import NavbarLink from '../components/NavbarLink';
import Navbar from '../components/Navbar';
import ActionBtn from '../components/ActionBtn';
import CarInfoSidebar from '../components/CarInfoSidebar';
import VehicleMaintBox from '../components/VehicleMaintBox';
import FormLine from '../components/FormLine';
import { Link } from 'react-router-dom';



class MaintJob extends React.Component {

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
            <VehicleMaintBox header='Break Pads'>
              <p className='maintHomeInfo'>Replaced front and rear break pads due to routine wear and tear. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </VehicleMaintBox>
            <VehicleMaintBox header='Parts'>
              <FormLine lineTitle='Break Pads' lineHeadOne='Part Link' lineHeadTwo='Cost' lineValOne='url' lineValTwo='$45'/>
              <FormLine lineTitle='Break Cleaner' lineHeadOne='Part Link' lineHeadTwo='Cost' lineValOne='url' lineValTwo='$3'/>
              <FormLine lineTitle='Break Fluid' lineHeadOne='Part Link' lineHeadTwo='Cost' lineValOne='url' lineValTwo='$3'/>
            </VehicleMaintBox>
          </div>
          <div className='garageSidebar vehicleLinksSidebar'>
            <div className='vehicleBoxLinkContainer'>
              <Link to='/vehicle'>
                <p className='vehicleBoxLink'>Back to Vehicle</p>
              </Link>
              <p className='vehicleBoxLink'>Update Milage</p>
              <Link to='/add-maintenance'>
                <p className='carBoxLink'>New Maintenance</p>
              </Link>
              <p className='vehicleBoxLinkRed'>Delete</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MaintJob;