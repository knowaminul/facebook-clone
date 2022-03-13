import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./PostCreator.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../../StateProvider";
import db from "../../firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function PostCreator() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");

  console.log("check", firebase.firestore);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      profileImage: user.photoURL,
      image: imageURL,
      userName: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() || null,
      message: input,
    });

    setInput("");
    setImageURL("");
  };

  return (
    <div className="postCreator">
      <div className="postCreator_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="postCreator_input"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="image URL(optional)"
          />
          <button onClick={handleSubmit}>Hidden Submit</button>
        </form>
      </div>
      <div className="postCreator_bottom">
        <div className="postCreator_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="postCreator_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="postCreator_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default PostCreator;
