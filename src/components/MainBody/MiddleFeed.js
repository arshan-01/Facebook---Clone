import React from "react";
import "../MainBody/MainBody.css";
import post1 from "../../assets/post1.jpg";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import Post from "./Post";
import { useEffect } from "react";
import db from "../../firebase/firebase";
import { useState } from "react";
import { doc, collection, onSnapshot, query } from "firebase/firestore";
const MiddleFeed = () => {
  const [postss, setpostss] = useState([]);

  let user = useSelector((state) => state.MenuState_Reducer.user);

  // Getting firebase post
  console.log(postss);
  useEffect(() => {
    const q = query(collection(db, "posts"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      setpostss(querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

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
            <input type="text" placeholder="What's on your mind ?" />
          </div>
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
            <CollectionsOutlinedIcon style={{ color: "#24d400" }} />
            <p> Photo/video</p>
          </div>
          <div className="submitpost_icon">
            <EmojiEmotionsOutlinedIcon style={{ color: "#ffde34" }} />
            <p> Feeling/activity</p>
          </div>
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
