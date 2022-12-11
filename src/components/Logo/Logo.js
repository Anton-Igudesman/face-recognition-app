import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from '../assets/icons8-brain-96.png'

export default function Logo() {
    return (
        <div className='ma4 mt0'>
            <Tilt className='logo shadow-5'>
                <div>
                    <img alt='brain logo' src={brain} />
                </div>
            </Tilt>
        </div>
    )
}