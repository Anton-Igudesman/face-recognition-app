import React from 'react';

export default function Rank(props) {
    return (
        <div>
            <div className='white f3'>
                {props.name}, your current entry count is...
            </div>
            <div className='white f1'>{props.entries}</div>
        </div>
    )
}