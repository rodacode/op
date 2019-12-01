import React from 'react';
import './header.scss';
import UserHeader from '../userHeader/UserHeader';

const Header = () => {
    return (
        <div className="header__container">
            <h1>ONLINE PRODUCER</h1>
            <div className="user__container">
                <UserHeader />
            </div>
        </div>
    )

}

export default Header;