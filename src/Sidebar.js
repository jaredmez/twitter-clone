import React from 'react'
import "./Sidebar.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarBtn from './SidebarBtn';
import Button from '@mui/material/Button';


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarBtn className="sidebar__twitterIcon" Icon={TwitterIcon}/>
            <SidebarBtn active text="Home" Icon={HomeOutlinedIcon}/>
            <SidebarBtn text="Explore" Icon={SearchIcon}/>
            <SidebarBtn text="Notifications" Icon={NotificationsNoneIcon}/>
            <SidebarBtn text="Messages" Icon={MailOutlineIcon}/>
            <SidebarBtn text="Bookmarks" Icon={BookmarkBorderIcon} />
            <SidebarBtn text="Lists" Icon={ListAltIcon}/>
            <SidebarBtn text="Profile" Icon={PersonOutlineIcon}/>
            <SidebarBtn text="More" Icon={MoreHorizIcon}/>
           

            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
            
        </div>
    )
}

export default Sidebar
