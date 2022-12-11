import React from 'react'
import './ImageLinkForm.css'

export default function ImageLinkForm(props) {
    return (
     <div>
        <p>{'This technology will detect the faces in provided pictures - check it out!!'}</p>
        <div className='input-wrapper'>
            <div className='inner-wrapper shadow-5'>
                <input
                    onChange = {props.handleInputChange} 
                    className='input-bar ma3 f4 pa2 w-70 center' 
                    type='text' 
                />
                <button
                    onClick={props.handlePictureSubmit}
                    className='detect-button ma3 w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>
                        {'Detect'}
                </button> 
            </div>
            
        </div>
     </div>   
    )
}