import React from "react";
import "../MainBody/MainBody.css";
import post1 from "../../assets/post1.jpg";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
// import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
// import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import { Avatar, Button } from "@mui/material";
import { useSelector } from "react-redux";
import Post from "./Post";
import { useEffect } from "react";
import db, { storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
const MiddleFeed = () => {
  const [postss, setpostss] = useState([]);
  const [postImage, setpostImage] = useState(null);
  const [postInput, setpostInput] = useState("");
  const [imageUrl, setimageUrl] = useState("");

  //getting user form redux
  let user = useSelector((state) => state.MenuState_Reducer.user);

  // Getting firebase post
  console.log(postss);
  useEffect(() => {
    const postRef = query(
      collection(db, "posts"),
      orderBy("timestamp", "desc")
    );
    onSnapshot(postRef, (querySnapshot) => {
      setpostss(
        querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  function handlePost(event) {
    
    event.preventDefault();    // for prevent deafult behave
    // uploading image to firebase storage 
    const storageRef = ref(storage, `/fb-clone-images/${postImage.name}`);
    const uploadTask = uploadBytesResumable(storageRef, postImage);

    // download url
    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
      setimageUrl(url);
      // sending data tofirestire
      // posts is name of database 
      const dbRef = collection(db, "posts");
      addDoc(dbRef, {
        caption: postInput,
        timestamp: serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        postImage: url,
      })

      //if success
        .then((docRef) => {
          console.log("Document has been added successfully");
          setpostImage(null);
          setpostInput("");
        })
        // if fail 
        .catch((error) => {
          console.log(error);
        });
    });
  }
  return (
    <div className="Main__MiddleFeed">
      <div className="fb__story">
        {/* <div className="user__story" style={{backgroundImage:`linear-gradient(transparent,rgba(0,0,0,0.5)),url(${post1})`}}>
        <Avatar src={post1}/>
          <h4>Username</h4>
        </div> */}
        <div className="friends__story">
          <div
            className="singlefriend__story"
            style={{
              backgroundImage: `linear-gradient(transparent,rgba(0,0,0,0.5)),url(${post1})`,
            }}
          >
            <Avatar src={post1} />
            <h4>Username</h4>
          </div>
          <div
            className="singlefriend__story"
            style={{
              backgroundImage: `linear-gradient(transparent,rgba(0,0,0,0.5)),url(${post1})`,
            }}
          >
            <Avatar src={post1} />
            <h4>Username</h4>
          </div>
          <div
            className="singlefriend__story"
            style={{
              backgroundImage: `linear-gradient(transparent,rgba(0,0,0,0.5)),url(${post1})`,
            }}
          >
            <Avatar src={post1} />
            <h4>Username</h4>
          </div>
          <div
            className="singlefriend__story"
            style={{
              backgroundImage: `linear-gradient(transparent,rgba(0,0,0,0.5)),url(${post1})`,
            }}
          >
            <Avatar src={post1} />
            <h4>Username</h4>
          </div>
          <div
            className="singlefriend__story"
            style={{
              backgroundImage: `linear-gradient(transparent,rgba(0,0,0,0.5)),url(${post1})`,
            }}
          >
            <Avatar src={post1} />
            <h4>Username</h4>
          </div>
          <div
            className="singlefriend__story"
            style={{
              backgroundImage: `linear-gradient(transparent,rgba(0,0,0,0.5)),url(${post1})`,
            }}
          >
            <Avatar src={post1} />
            <h4>Username</h4>
          </div>
        </div>
      </div>
      <div className="submit__post">
        <div className="submitpost__top">
          <Avatar src={user.photoURL} />
          <div className="submitpost__input">
            <input
              type="text"
              onChange={(e) => setpostInput(e.target.value)}
              value={postInput}
              placeholder={`What's on your mind, ${user.displayName} ?`}
            />
          </div>
          <Button onClick={handlePost} variant="contained">
            Post
          </Button>
        </div>
        <hr
          style={{
            width: "92%",
            margin: "auto",
            borderTop: "1px solid rgb(210, 211, 212)",
          }}
        />
        <div className="submitpost__bottom">
          <div className="submitpost_icon">
            <VideocamOutlinedIcon style={{ color: "#ff3758" }} />
            <p> Live </p>
          </div>
          <div className="submitpost_icon">
            <input
              type="file"
              name=""
              id=""
              onChange={(e) => setpostImage(e.target.files[0])}
            />
          </div>
          {/* <div className="submitpost_icon">
            <EmojiEmotionsOutlinedIcon style={{ color: "#ffde34" }} />
            <p> Feeling/activity</p>
          </div> */}
        </div>
      </div>
      {postss.map((post) => (
        <Post
          key={post.id}
          username={post.data.username}
          profilePic={post.data.profilePic}
          timestamp={post.data.timestamp}
          postImage={post.data.postImage}
          caption={post.data.caption}
        />
      ))}
    </div>
  );
};

export default MiddleFeed;
