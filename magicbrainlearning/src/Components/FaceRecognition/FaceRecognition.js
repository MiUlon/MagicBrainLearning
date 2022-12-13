import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div>
            <img className='center ma4' alt='' src={imageUrl} width='500px' height='auto'></img>
        </div>
    )
}

export default FaceRecognition;