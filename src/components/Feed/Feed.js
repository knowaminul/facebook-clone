import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import PostCreator from "../PostCreator/PostCreator";
import StoryReel from "../StoryReel/StoryReel";
import "./Feed.css";
import db from "../../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  console.log("posts", posts);

  return (
    <div className="feed">
      <StoryReel />
      <PostCreator />
      {posts.map((post) => (
        <Post
          key={post.id}
          profileImage={post.data.profileImage}
          image={post.data.image}
          userName={post.data.userName}
          timestamp={post.data.timestamp}
          message={post.data.message}
        />
      ))}
      {/* <Post
        profileImage="https://randomuser.me/api/portraits/thumb/men/10.jpg"
        image="https://picsum.photos/id/1015/367/267"
        userName="userName here"
        timestamp="timestamp here"
        message="message here"
      />
      <Post
        profileImage="https://randomuser.me/api/portraits/thumb/men/11.jpg"
        image="https://picsum.photos/id/1011/367/267"
        userName="userName here"
        timestamp="timestamp here"
        message="message here"
      />
      <Post
        profileImage="https://randomuser.me/api/portraits/thumb/men/12.jpg"
        image="https://picsum.photos/id/1012/367/267"
        userName="userName here"
        timestamp="timestamp here"
        message="message here"
      /> */}
    </div>
  );
}

export default Feed;
