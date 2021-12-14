import React from 'react'
import './SidebarBtn.css'

function SidebarBtn({ text, Icon}) {
    return (
        <div className='sidebarBtn'>
            <Icon />
            <h2>{text}</h2>
            
        </div>
    )
}

export default SidebarBtn
