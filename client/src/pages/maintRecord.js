import React, { Component } from "react";
import API from "../utils/API";
import './maintRecord.css';
import Card from "../components/card/card";
import Header from "../components/header/header";
import InformationDisplay from "../components/informationDisplay/informationDisplay";
import { withRouter, Link } from "react-router-dom";
import Navbar from '../components/Navbar copy';
import NavbarLink from '../components/NavbarLink';
import ActionBtn from '../components/ActionBtn';
import FormLine from '../components/FormLine';
import VehicleMaintBox from '../components/VehicleMaintBox';
import CarInfoSidebar from '../components/CarInfoSidebar';

class MaintRecord extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            id: ""
        };
    };
    componentDidMount() {
        let location = this.props.match.params.id;
        this.setState({
            id: location
        }, () => {
            this.apiCall()
        })
    };
    apiCall = () => {
        API.getOneMaintRecord(this.state.id)
            .then((res) => {
                this.setState({
                    data: res.data[0]
                })
                this.getVehicleInfo();
            })
            .catch(err => {
                console.log(err)
            })
    }

    getVehicleInfo = () => {
      API.vehicleById(this.state.id)
      .then((res) => {
        this.setState({
          vehicle: res.data[0]
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
    render() {
      console.log(this.state);
        return (
          <>
            <Navbar>
                <NavbarLink url='/Members'>My Garage</NavbarLink>
                <NavbarLink url='/vehicles'>Add Vehicle</NavbarLink>
                <NavbarLink url='/add-maintenance'>Add Maintenance</NavbarLink>
                <ActionBtn url='/'>Sign Out</ActionBtn>
            </Navbar>
            <div className='garageWrapper'>
                <div className='garageSidebar'>
                    {/* <CarInfoSidebar vehicle={this.state.vehicle}/> */}
                </div>
                <div className='garageMain'>
                    <h1 className='garagePageTitle'>Car Name</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <VehicleMaintBox header={this.state.data.name}>
                      <p className='maintHomeInfo'>{this.state.data.description}</p>
                    </VehicleMaintBox>
                    <VehicleMaintBox header='Parts'>
                        <FormLine lineTitle='Break Pads' lineHeadOne='Part Link' lineHeadTwo='Cost' lineValOne='url' lineValTwo='$45' />
                        <FormLine lineTitle='Break Cleaner' lineHeadOne='Part Link' lineHeadTwo='Cost' lineValOne='url' lineValTwo='$3' />
                        <FormLine lineTitle='Break Fluid' lineHeadOne='Part Link' lineHeadTwo='Cost' lineValOne='url' lineValTwo='$3' />
                    </VehicleMaintBox>
                </div>
                <div className='garageSidebar vehicleLinksSidebar'>
                    <div className='vehicleBoxLinkContainer'>
                        <Link to={`/vehicles/${this.state.data.VehicleId}`}>
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

            <div>
                <br />
                <Card>
                    <Header
                        value={"Maintenance Record"} />
                </Card>
                <br />
                <Card>
                    <form id="maint-form">
                        <InformationDisplay label="Job: " value={this.state.data.name} />
                        <br />
                        <InformationDisplay label="Job Date: " value={this.state.data.jobDate} />
                        <br />
                        <InformationDisplay label="Mileage: " value={this.state.data.milage} />
                        <br />
                        <InformationDisplay label="Description: " value={this.state.data.description} />
                        <br />
                        <InformationDisplay label="Parts: " value={this.state.data.parts} />
                        <br />
                    </form>
                </Card>

            </div>
            </>
        );
    }
}
export default withRouter(MaintRecord);