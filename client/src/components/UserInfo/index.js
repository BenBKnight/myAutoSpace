import React from 'react';
import "./style.css";


function UserInfo(props) {
  return (
    <div className='userInfoBox'>
      <img className='userAvatar' src={require('./img/user_avatar.png')} alt='Profile'/>
      <h1 className='userName'>Jimmy Carmichael</h1>
    </div>
  );
}

export default UserInfo;