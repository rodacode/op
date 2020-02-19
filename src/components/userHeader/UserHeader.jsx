import React from 'react';
import { useSelector } from "react-redux";
import './userHeader.scss';

const UserHeader = () => {
    const userName = useSelector(state => state.userName)
    return (
        <div className="userHeader__container">
            <div className="userName">
                <h4>{userName}</h4>
            </div>
            <div className="user__img__container">
                <img src={require('../../assets/img/user_avatar.jpeg')} alt="user avatar" className="user__img" />
            </div>
        </div>
    )

}

export default UserHeader;