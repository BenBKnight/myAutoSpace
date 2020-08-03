import React from 'react';
import './addMaint.css';
import NavbarLink from '../components/NavbarLink';
import Navbar from '../components/Navbar';
import ActionBtn from '../components/ActionBtn';
import FormInput from '../components/FormInput'
import MaintInfoBox from '../components/MaintInfoBox';


class AddMaint extends React.Component {

  state = {
  }

  render() {
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
            <MaintInfoBox carMilage='160,000' carVin='21312j1jpoiefj32j' carYear='2002' carMake='Ford' carModel='Torus'/>
          </div>
        </div>
        <br></br>
        <div className='maintFlex'>
          <div className='addMaintenanceWrapper'>
            <FormInput setWidth='width100' name='jobName' type='text' label='Job Name'></FormInput>
            <FormInput setWidth='width100' name='milage' type='text' label='Milage at Service'></FormInput>
            <span className='flex'>
              <FormInput setWidth='width25' name='day' type='text' label='Service Day'></FormInput>
              <FormInput setWidth='width25' name='month' type='text' label='Service Month'></FormInput>
              <FormInput setWidth='width25' name='year' type='text' label='Service Year'></FormInput>
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
      </>
    );
  }
}

export default AddMaint;
