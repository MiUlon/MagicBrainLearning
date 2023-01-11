import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, setFaceBox }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' className='center ma4' alt='' src={imageUrl} width='500px' height='auto'></img>
                <div className='bounding-box' style={{top: setFaceBox.topRow, right: setFaceBox.rightCol, bottom: setFaceBox.bottomRow, left: setFaceBox.leftCol}} ></div>
            </div>
        </div>
    )
}

export default FaceRecognition;