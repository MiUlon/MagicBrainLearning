import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
            return (
                <div className='alignToLeft'>
                    <p onClick={() => onRouteChange('signout')} className='f3 b link pointer ma4 pa4 br3 shadow-5 maxNavigationWidth grow background'>Sign Out</p>
                </div>
            )
        } else {
            return (
                <div className='alignToLeft'>
                    <p onClick={() => onRouteChange('signin')} className='f3 b link pointer ma4 pa4 br3 shadow-5 maxNavigationWidth grow background'>Sign In</p>
                    <p onClick={() => onRouteChange('register')} className='f3 b link pointer ma4 pa4 br3 shadow-5 maxNavigationWidth grow background'>Register</p>
                </div> 
            )
        }
}

export default Navigation;