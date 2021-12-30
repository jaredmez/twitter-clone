import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
import {collection, getDocs} from "firebase/firestore";

function Feed() {
  const [posts, setPosts] =  React.useState([])

  async function getPosts(db) {
    const postCol = collection(db, 'posts');
    const postSnapshot = await getDocs(postCol);
    const postList = postSnapshot.docs.map(doc => doc.data());
    return postList;
    // console.log(postList);
  }



  React.useEffect(async ()=> {
    const postss = await getPosts(db);
    setPosts(postss);
    console.log(postss);
    // setPosts(getPosts(db));
    
    // const querySnapshot = await getDocs(collection(db, "posts"));
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // })
    
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
            key={post.text} 
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
