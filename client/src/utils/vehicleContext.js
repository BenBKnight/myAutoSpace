import { createContext } from "react";

export const VehicleContext = createContext({
    UserId: "",
    accidents: "",
    condition: "",
    createdAt: "",
    id: "",
    locationLastOwned: "",
    make: "",
    mileage: "",
    model: "",
    numOfOwners: "",
    type: "",
    updatedAt: "",
    vin: "",
    year: "",
    yearPurchased: ""
});