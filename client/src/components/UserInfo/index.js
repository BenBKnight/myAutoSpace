import React from 'react';
import "./style.css";


function UserInfo(props) {
  // console.log(props.userInfo);
  return (
    <div className='userInfoBox'>
      <img className='userAvatar' src={props.userInfo.imageUrl} alt='Profile'/>
      <h1 className='userName'>Jimmy Carmichael</h1>
    </div>
  );
}

export default UserInfo;