import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@material-ui/core"
import { collection, addDoc } from "firebase/firestore"
import db from "./firebase"

function TweetBox() {
  const [tweet, setTweet] = useState("")

  const saveTweet = async tweetInfo => {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        displayName: "Jared",
        text: tweetInfo,
        username: "atlien3000",
        verified: true
      });
      console.log("document written with ID: ", docRef.id);
      console.log(docRef)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweet == "") {
      return
    }
    console.log(tweet)
    saveTweet(tweet)
    setTweet("")
  }

  return (
      <div className="tweetBox">
        <form action="" >
          <div className="tweetBox__input">
            <Avatar></Avatar>
            <input placeholder="What's happening?" type="text" value={tweet} onChange={e => setTweet(e.target.value)}/>
          </div>
          <Button onClick={handleSubmit} className="tweetBox__tweetButton">Tweet</Button>
        </form>
      </div>
  )
}

export default TweetBox
