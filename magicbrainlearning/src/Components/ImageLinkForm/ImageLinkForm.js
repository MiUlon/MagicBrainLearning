import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onLinkChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>{'Magic Brain app will detect faces in your pictures. Give it a try!'}</p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5 imageLinkFormBackground maxWidth'>
                    <input className='center w-70 f4 pa2 br3' type='text' onChange={onLinkChange}></input>
                    <button className='center w-30 grow f4 link ph3 pv2 dib white bg-light-purple br3' onClick={onButtonSubmit}>Detect!</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;