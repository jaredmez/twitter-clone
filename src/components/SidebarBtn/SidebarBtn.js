import React from 'react'
import './SidebarBtn.css'

function SidebarBtn({ active, text, Icon}) {
    return (
        <div className={`sidebarBtn ${active && 'sidebarBtn--active'}`}>
            <Icon />
            <h2>{text}</h2>
            
        </div>
    )
}

export default SidebarBtn
