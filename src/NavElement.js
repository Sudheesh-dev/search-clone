import React from 'react'
import './NavElement.css'

function NavElement(props) {
    return (
        <div style={props.styleChange}className='NavElement'>
            {props.icon}
            <p className='NavElementText' >{props.text}</p>
        </div>
    )
}

export default NavElement
