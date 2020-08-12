import React, { useContext } from "react";
import API from "../utils/API";
import './members.css';
import { AuthContext } from "../utils/authContext";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from '../components/Navbar copy';
import NavbarLink from '../components/NavbarLink';
import ActionBtn from '../components/ActionBtn';
import UserInfo from '../components/UserInfo';
import CarInfoBox from "../components/CarInfoBox"


export default function Members(props) {
  const [userId, setUserId] = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});
  const [userVehicles, setVehicle] = useState([]);
  const signOut = () => { setUserId({ ...userId, showNotification: true }); localStorage.removeItem("jwt.Token"); }
  const [didMount, setDidMount] = useState(false);

  // console.log("authContext: " + JSON.stringify(userId));

  useEffect(() => {
    setDidMount(true);
    // console.log(userId)
    API.allVehicles(userId.id)
      .then(res => {
        // console.log(res)
        setVehicle([
          ...userVehicles,
          ...res.data
        ])
        if (Notification.permission === "granted" && userId.showNotification === true) {
          navigator.serviceWorker.getRegistration().then(reg => {
            reg.showNotification("You have " + res.data.length + " vehicles in your garage.");
          });
          // console.log("my notification");
          setUserId({ ...userId, showNotification: false });
        }
      })
      .catch(err => {
        console.log(err);
      })

    API.userData(userId.id)
      .then(res => {
        // console.log(res);
        // setUserInfo(res)
        setUserInfo(
          ...res.data
        )
      })
      .catch(err => {
        console.log(err);
      })

  }, [])


  if (!didMount) {
    return null;
  }

  // console.log(userVehicles);

  return (
    <>
      <Navbar>
        <NavbarLink url='/members' active={true}>My Garage</NavbarLink>
        <NavbarLink url='/vehicles'>Add Vehicle</NavbarLink>
        <ActionBtn handleClick={signOut} url='/'>Sign Out</ActionBtn>
      </Navbar>
      <div className='garageWrapper'>
        <div className='garageSidebar'>
          <UserInfo userInfo={userInfo} />
        </div>
        <div className='garageMain'>
          <h1 className='garagePageTitle'>My Garage</h1>
          <br></br>
          <br></br>
          <br></br>
          {userVehicles.map(vehicles => (
            <div key={vehicles.id}>
              <CarInfoBox
                vehicle={vehicles}
              />
            </div>
          ))}
        </div>
        <div className='garageSidebar'></div>
      </div>
    </>
  );
}
