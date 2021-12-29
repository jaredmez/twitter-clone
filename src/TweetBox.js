import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@material-ui/core"

function TweetBox() {
    return (
        <div className="tweetBox">
          <form action="">
            <div className="tweetBox__input">
              <Avatar></Avatar>
              <input placeholder="What's happening?" type="text" />
            </div>
            <Button className="tweetBox__tweetButton">Tweet</Button>
          </form>
        </div>
    )
}

export default TweetBox
