import React, { Component } from 'react';

export default function Image( props ){
    return (
        <div>
            <img src= { props.image} alt="violin" />
        </div>
    )
}