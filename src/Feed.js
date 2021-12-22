import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
import {collection, getDocs} from "firebase/firestore";

function Feed() {
  const [posts, setPosts] =  React.useState([])

  React.useEffect(async ()=> {

    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    })
    
    // db.collection('posts').onSnapshot(snapshot => (
    //   setPosts(snapshot.docs.map(doc => doc.data()))
    // ))
  }, [])

  return (
      <div className='feed'>
          <div className="feed__header">
              <h2>Home</h2>
          </div>

          <TweetBox/>
          {posts.map(post => (
            <Post 
            displayName={post.displayName}
            username={post.username}
            verifed={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            />
          ))}
          
      </div>
  )
}

export default Feed;
