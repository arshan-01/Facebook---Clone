import React from "react";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RecommendIcon from "@mui/icons-material/Recommend";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

function Post({ profilePic, caption, username, timestamp, postImage }) {
    console.log(timestamp)
  return (
    <div className="post">
      <div className="post__Top">
        <div className="postTop__left">
          <Avatar src={profilePic} />
          <div className="postTopleft__info">
            <h4>{username}</h4>
            <p>{timestamp?.toDate().toUTCString()}</p>
          </div>
        </div>
        <div className="postTop__right">
          <MoreHorizIcon />
        </div>
      </div>
      <div className="post__message">
        <p>{caption}</p>
      </div>
      <hr style={{ borderTop: "1px solid rgb(210, 211, 212)" }} />
      <div className="post__Image">
        <img src={postImage} alt="" />
      </div>
      <div className="post__countLikeComment">
        <div className="count__like">
          <RecommendIcon style={{ color: "#2e81f4" }} />
          <p> 3</p>
        </div>
        <p>4 comments</p>
      </div>
      <hr
        style={{
          width: "92%",
          margin: "auto",
          borderTop: "1px solid rgb(210, 211, 212)",
        }}
      />
      <div className="LikeCommentShare__Panel">
        <div className="count__like">
          <ThumbUpOffAltIcon style={{ color: "gray" }} />
          <p> Like</p>
        </div>
        <div className="count__like">
          <ChatBubbleOutlineSharpIcon style={{ color: "gray" }} />
          <p> comment</p>
        </div>
        <div className="count__like">
          <ShareOutlinedIcon style={{ color: "gray" }} />
          <p> share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
