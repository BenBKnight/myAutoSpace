import React, { Component } from "react";
import Card from "../components/card/card";
import Ancestor from "../components/ancestor/ancestor";
import API from "../utils/API";
import FormInput from "../components/formInput/formInput";
import FormInputButton from "../components/formInputButton/FormInputButton";


class NewMaintenance extends Component {
    state = {
        maintToAdd: {
            name: "",
            description: "",
            milage: "",
            parts: "",
            jobDate: "",
            VehicleId: "5"
        },
        year: "",
        day: "",
        month: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.id;
        this.setState({
            // [name]: value
            maintToAdd: {
                ...this.state.maintToAdd,
                [name]: value
            }
        });
        // if (!this.state.email || !this.state.password) {
        //     return;
        // }
    };
    handleSelect = event => {
        let value = event.target.value;
        const name = event.target.id;
        console.log(event, value, name)

        this.setState({
            [name]: value
        });
        // if (!this.state.email || !this.state.password) {
        //     return;
        // }
    };
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.setDate();
        let newMaint = this.state.maintToAdd;
        console.log(newMaint)
        API.maintRecord(newMaint)
            .then((res) => {
                console.log("api returned maint", res);
            })
            .catch(err => {
                console.log(err);
            })
    };
    setDate = () => {
        this.setState(prevState => {
            let maintToAdd = Object.assign({}, prevState.maintToAdd);
            maintToAdd.jobDate = this.state.year + "-" + this.state.month + "-" + this.state.day;
            console.log(maintToAdd.jobDate);
            return maintToAdd;
        })
    };
    render() {
        // const jobYears = [
        //     "2020",
        //     "2019",
        //     "2018",
        //     "2017",
        //     "2016",
        //     "2015",
        //     "2014",
        //     "2013",
        //     "2012",
        //     "2011",
        //     "2009",
        //     "2008",
        //     "2007",
        //     "2006",
        //     "2005",
        //     "2004",
        //     "2003",
        //     "2002",
        //     "2001",
        //     "2000"
        // ];
        // const jobDays = [
        //     "1",
        //     "2",
        //     "3",
        //     "4",
        //     "5",
        //     "6",
        //     "7",
        //     "8",
        //     "9",
        //     "10",
        //     "11",
        //     "12",
        //     "13",
        //     "14",
        //     "15",
        //     "16",
        //     "17",
        //     "18",
        //     "19",
        //     "20",
        //     "21",
        //     "22",
        //     "23",
        //     "24",
        //     "25",
        //     "26",
        //     "27",
        //     "28",
        //     "29",
        //     "30",
        //     "31"
        // ];
        // const jobMonths = [
        //     "01",
        //     "02",
        //     "03",
        //     "04",
        //     "05",
        //     "06",
        //     "07",
        //     "08",
        //     "09",
        //     "10",
        //     "11",
        //     "12",
        // ]
        return (
            <div className="section columns" >
                <Ancestor>
                    <Card>
                        <form id="maint-form">

                            <FormInput handleInputChange={this.handleInputChange}
                                id="name" value={this.state.job} placeholder="Job" type="text" />

                            <FormInput handleInputChange={this.handleInputChange}
                                id="jobDate" value={this.state.jobDate} placeholder="Job Date" type="text" />

                            <FormInput handleInputChange={this.handleInputChange}
                                id="milage" value={this.state.milage} placeholder="Vehicle Milage" type="text" />

                            <FormInput handleInputChange={this.handleInputChange}
                                id="description" value={this.state.description} placeholder="Description" type="text" />

                            <FormInput handleInputChange={this.handleInputChange}
                                id="parts" value={this.state.parts} placeholder="Parts" type="text" />
                            <FormInputButton handleFormSubmit={this.handleFormSubmit} />
                        </form>
                    </Card>
                </Ancestor>
            </div>
        );
    }
}
export default NewMaintenance;