import React from 'react'
import "./Post.css"
import { Avatar } from "@material-ui/core"
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

function Post( { 
    displayName,
    username,
    verified,
    text,
    image,
    avatar
 }) {
    return (
      <div className="post">
        <div className="post__avatar">
            <Avatar></Avatar>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                JaredMez 
                <span>
                  <VerifiedIcon className="post__badge"></VerifiedIcon>
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>Here is the text for this post.</p>
            </div>
          </div>
          <img src="https://media1.giphy.com/media/xTOxl052neakq3bvPv/giphy.gif" />
          <div className="post__footer">
            <ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon>
            <RepeatIcon></RepeatIcon>
            <FavoriteBorderIcon></FavoriteBorderIcon>
            <IosShareOutlinedIcon></IosShareOutlinedIcon>
          </div>
        </div>
      </div>
    )
}

export default Post
