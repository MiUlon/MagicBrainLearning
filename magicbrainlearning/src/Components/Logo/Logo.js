import React from 'react';
import Tilt from 'react-parallax-tilt';
import MagicBrainLogo from './magicBrain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='grow' style={{ height: '150px', width: '150px' }}>
            <Tilt className='ma4 mt0 pa2 br2 shadow-2 background' style={{ height: '150px', width: '150px' }}>
                <div>
                    <img alt='Magic Brain' src={MagicBrainLogo} width='130px' height='130px'></img>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;