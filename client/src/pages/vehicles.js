import React, { useContext, useState } from "react";
import './vehicles.css';
import FormInputTwo from "../components/FormInputTwo";
import API from "../utils/API";
import { AuthContext } from "../utils/authContext";
import Navbar from '../components/Navbar copy';
import NavbarLink from '../components/NavbarLink';
import ActionBtn from '../components/ActionBtn';
import FormImg from '../components/FormImg';
import { useEffect } from "react";
import ImageUpload from '../components/imageUpload/imageUpload';
import { app } from "../utils/base";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
const db = app.firestore();

function Vehicles(props) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [vin, setVin] = useState("");
  const [mileage, setMileage] = useState("");
  const [yearPurchased, setYearPurchased] = useState("");
  const [accidents, setAccidents] = useState("");
  const [locationLastOwned, setLocationLastOwned] = useState("");
  const [imageUrl, setImageUrl] = React.useState(null);
  const [percentage, setPercentage] = useState(0);
  const [didMount, setDidMount] = useState(false);

  const [activeType, setActiveType] = useState({
    car: true,
    truck: false,
    bike: false
  });
  const [vehicleType, setVehicleType] = useState("Car");
  const [activeCondition, setActiveCondition] = useState({
    good: true,
    fair: false,
    poor: false
  });
  const [vehicleCondition, setVehicleCondition] = useState("Good");
  const [activeOwners, SetActiveOwners] = useState({
    one: false,
    two: true,
    three: false,
    more: false
  });
  const [vehicleOwners, setVehicleOwners] = useState(2);

  const [userId, setUserId] = useContext(AuthContext);

  const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.id;

    if (name === "make") {
      setMake(value);
    } if (name === "model") {
      setModel(value);
    } if (name === "year") {
      setYear(value);
    } if (name === "vin") {
      setVin(value);
    } if (name === "mileage") {
      setMileage(value);
    } if (name === "yearPurchased") {
      setYearPurchased(value);
    } if (name === "accidents") {
      setAccidents(value);
    } if (name === "locationLastOwned") {
      setLocationLastOwned(value);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // console.log('hit');
    let vehicleNew = {
      type: vehicleType,
      make: make,
      model: model,
      year: year,
      vin: vin,
      mileage: mileage,
      yearPurchased: yearPurchased,
      condition: vehicleCondition,
      accidents: accidents,
      numOfOwners: vehicleOwners,
      locationLastOwned: locationLastOwned,
      UserId: userId.id,
      imageUrl: imageUrl
    };
    await db.collection("users").doc(vin).set({
      make: make,
      model: model,
      year: year,
      vin: vin,
      image: imageUrl,
    });
    // console.log(vehicleNew)
    API.newVehicle(vehicleNew)
      .then((res) => {
        // console.log("api returned", res);
        setUserId({ ...userId, showNotification: true });
        // console.log("api returned", res);
        props.history.push("/Members");
        store.addNotification({
          message: "Added new vehicle.",
          type: "success",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__bounceIn"],
          animationOut: ["animate__animated", "animate__bounceOut"],
          dismiss: {
            duration: 1500
          }
        });
      })
      .catch(err => {
        console.log(err);
        store.addNotification({
          message: "Please fill out all the required fields!",
          type: "warning",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__shakeX"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 1500
          }
        });
      });
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    let myVar = setInterval(myTimer, 1000);

    function myTimer() {
      if (percentage < 100) {
        setPercentage(percentage => percentage + 10);
      } else clearInterval(myVar);
    }
    await fileRef.put(file);
    setImageUrl(await fileRef.getDownloadURL());
  }


  const handleSelectionClick = (e) => {
    e.preventDefault();
    const choiceField = e.target.dataset.field;
    const choiceValue = e.target.dataset.value;
    const choiceId = e.target.id;
    switch (choiceField) {
      case "vehicleType":
        setVehicleType(choiceId)
        setActiveType({ [choiceValue]: true })
        break;
      case "vehicleCondition":
        setVehicleCondition(choiceId)
        setActiveCondition({ [choiceValue]: true })

        break;
      case "vehicleOwners":
        setVehicleOwners(choiceId)
        SetActiveOwners({ [choiceValue]: true })
        break;
      default:
        break;
    }
    // console.log(activeCondition, activeOwners, activeType)
  }
  useEffect(() => {
    // console.log(userId.id)
  })
  const signOut = () => { setUserId({ ...userId, showNotification: true }); localStorage.removeItem("jwt.Token"); }

  

  return (
    <>
      <Navbar>
        <NavbarLink url='/members'>My Garage</NavbarLink>
        <NavbarLink url='/vehicles' active={true}>Add Vehicle</NavbarLink>
        <ActionBtn handleClick={signOut} url='/'>Sign Out</ActionBtn>
      </Navbar>
      <div className='addCarFlex'>
        <div className='width40 carSelectionFormat'>
          <h2 className='addCarSubHeader'>Select Vehicle Type</h2>
          <div className="carFormInputWrapper">
            <FormImg id='Car' dataField='vehicleType' dataValue='car' src='car_gray.png' srcActive='car_blue.png' imgName='Car' active={activeType.car} handleSelectionClick={handleSelectionClick}></FormImg>
            <FormImg id='Truck' dataField='vehicleType' dataValue='truck' src='truck_gray.png' srcActive='truck_blue.png' imgName='Truck' active={activeType.truck} handleSelectionClick={handleSelectionClick}></FormImg>
            <FormImg id='Motorcycle' dataField='vehicleType' dataValue='bike' src='bike_gray.png' srcActive='bike_blue.png' imgName='Motorcycle' active={activeType.bike} handleSelectionClick={handleSelectionClick}></FormImg>
          </div>
          <h2 className='addCarSubHeader'>Vehicle Condition</h2>
          <div className="carFormInputWrapper">
            <FormImg id='Good' dataField='vehicleCondition' dataValue='good' src='good_gray.png' srcActive='good_blue.png' imgName='Good' active={activeCondition.good} handleSelectionClick={handleSelectionClick}></FormImg>
            <FormImg id='Fair' dataField='vehicleCondition' dataValue='fair' src='fair_gray.png' srcActive='fair_blue.png' imgName='Fair' active={activeCondition.fair} handleSelectionClick={handleSelectionClick}></FormImg>
            <FormImg id='Poor' dataField='vehicleCondition' dataValue='poor' src='poor_gray.png' srcActive='poor_blue.png' imgName='Poor' active={activeCondition.poor} handleSelectionClick={handleSelectionClick}></FormImg>
          </div>
          <h2 className='addCarSubHeader'>Number of Owners</h2>
          <div className="carFormInputWrapper">
            <FormImg id={1} dataField='vehicleOwners' dataValue='one' src='one_gray.png' srcActive='one_blue.png' imgName='One' active={activeOwners.one} handleSelectionClick={handleSelectionClick}></FormImg>
            <FormImg id={2} dataField='vehicleOwners' dataValue='two' src='two_gray.png' srcActive='two_blue.png' imgName='Two' active={activeOwners.two} handleSelectionClick={handleSelectionClick}></FormImg>
            <FormImg id={3} dataField='vehicleOwners' dataValue='three' src='three_gray.png' srcActive='three_blue.png' imgName='Three' active={activeOwners.three} handleSelectionClick={handleSelectionClick}></FormImg>
            <FormImg id={4} dataField='vehicleOwners' dataValue='more' src='more_gray.png' srcActive='more_blue.png' imgName='More' active={activeOwners.more} handleSelectionClick={handleSelectionClick}></FormImg>
          </div>
        </div>
        <div className='addCarWrapper'>
          <h1 className='addCarHeader'>Add a Vehicle</h1>
          <h1 className='addCarSubHeader'>Please fill out the required fields for adding your new vehicle</h1>
          <br></br>
          <br></br>
          <span className='flex'>
            <FormInputTwo setWidth='width45' name='make' type='text' label='Make' id="make" value={make} handleInputChange={handleInputChange}></FormInputTwo>
            <FormInputTwo setWidth='width45' name='model' type='text' label='Model' id="model" value={model} handleInputChange={handleInputChange}></FormInputTwo>
          </span>
          <FormInputTwo setWidth='width100' name='vin' type='text' label='Vin' id="vin" value={vin} handleInputChange={handleInputChange}></FormInputTwo>
          <FormInputTwo setWidth='width100' name='location' type='text' label='Location' id="locationLastOwned" value={locationLastOwned} handleInputChange={handleInputChange}></FormInputTwo>
          <span className='flex'>
            <FormInputTwo setWidth='width45' name='vehicleYear' type='text' label='Vehicle Year' id="year" value={year} handleInputChange={handleInputChange}></FormInputTwo>
            <FormInputTwo setWidth='width45' name='milage' type='text' label='Milage' id="mileage" value={mileage} handleInputChange={handleInputChange}></FormInputTwo>
          </span>
          <span className='flex'>
            <FormInputTwo setWidth='width45' name='yearOfPurchase' type='text' label='Year of Purchase' id="yearPurchased" value={yearPurchased} handleInputChange={handleInputChange}></FormInputTwo>
            <FormInputTwo setWidth='width45' name='accidents' type='text' label='Number of Accidents' id="accidents" value={accidents} handleInputChange={handleInputChange}></FormInputTwo>
          </span>
          <span>
          <label className='photoFileLabel'>Add Photo</label>
            <progress className="progress is-link" value={percentage} max="100">{percentage}%</progress>
            <ImageUpload onFileChange={onFileChange}/>
          </span>
          <ActionBtn url='#' handleClick={handleFormSubmit}>Add Vehicle</ActionBtn>
        </div>
      </div>
    </>
  );
}
export default Vehicles;




// Ben Note --
// This is information that I could not reimpliment that has to do with styling. 
// I will be working with this later

  // const handleSelect = event => {
  //   let value = event.target.value;
  //   const name = event.target.id;
  //   setState({
  //     [name]: value
  //   });
  // };
  // const choiceValue = e.target.dataset.value;



      // one: false,
    // two: true,
    // three: false,
    // more: false


        // car: true,
    // truck: false,
    // bike: false


        // good: true,
    // fair: false,
    // poor: false