import React, { useContext } from "react";
import API from "../utils/API";
import Vehicles from "../components/vehicles/vehicles";
import Card from "../components/card/card";
import Header from "../components/header/header";
import Subtitle from "../components/subtitle/subtitle";
import { AuthContext } from "../utils/authContext";
import { useState } from "react";
import { useEffect } from "react";


export default function Members(props) {
    const [userId, setUserId] = useContext(AuthContext);
    const [vehicle, setVehicle] = useState([]);

    useEffect(() => {
        console.log(userId.id)
        API.allVehicles(userId.id)
            .then(res => {
                setVehicle(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <br />
            <Card>
                <Header
                    className={"tile box mt-5 has-text-centered container-center vehicle-style"}
                    value={"Welcome"} />
            </Card>
            <br />
            <Card>
                <Subtitle className={"subtitle label"} value={"Your Vehicles"} />
                <div className="section">
                    {vehicle.map(vehicles => (
                        <span key={vehicles.id}>
                            <Vehicles
                                vehicle={vehicles}
                            />
                        </span>
                    ))}
                </div>
            </Card>
        </div>
    );
}
