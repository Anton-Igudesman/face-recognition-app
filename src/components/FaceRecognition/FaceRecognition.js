import React from 'react';
import './FaceRecognition.css';

export default function FaceRecognition(props) {
    const styles = {
        top: props.box.topRow,
        right: props.box.rightCol,
        bottom: props.box.bottomRow,
        left: props.box.leftCol
    }
    console.log('styles: ', styles)

    return(
        <div className='image-wrapper center ma mt4'>
            <div className='absolute mt2'>
                {props.imageURL.length > 1 && <>
                                                <img  id="inputimage"
                                                width='500px' 
                                                height='auto' 
                                                alt='undetermined face image' 
                                                src ={props.imageURL} 
                                                />
                
                <div 
                    style={styles}
                    className='bounding-box'>
                </div>
                </>
                }
            </div>
        </div>
    )
}