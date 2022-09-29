import React from 'react'
import "../MainBody/MainBody.css"
import post1 from "../../assets/post1.jpg"
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RecommendIcon from '@mui/icons-material/Recommend';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Avatar } from '@mui/material';
const MiddleFeed = () => {
  return (
    <div className='Main__MiddleFeed'>
    <div className="fb__story">
        {/* <div className="user__story" style={{backgroundImage:`linear-gradient(transparent,rgba(0,0,0,0.5)),url(${post1})`}}>
        <Avatar src={post1}/>
          <h4>Username</h4>
        </div> */}
        <div className="friends__story">
        <div className="singlefriend__story" style={{backgroundImage:`linear-gradient(transparent,rgba(0,0,0,0.5)),url(${post1})`}}>
        <Avatar src={post1}/>
          <h4>Username</h4>
        </div>
        <div className="singlefriend__story" style={{backgroundImage:`linear-gradient(transparent,rgba(0,0,0,0.5)),url(${post1})`}}>
        <Avatar src={post1}/>
          <h4>Username</h4>
        </div>
        <div className="singlefriend__story" style={{backgroundImage:`linear-gradient(transparent,rgba(0,0,0,0.5)),url(${post1})`}}>
        <Avatar src={post1}/>
          <h4>Username</h4>
        </div>
        <div className="singlefriend__story" style={{backgroundImage:`linear-gradient(transparent,rgba(0,0,0,0.5)),url(${post1})`}}>
        <Avatar src={post1}/>
          <h4>Username</h4>
        </div>
        <div className="singlefriend__story" style={{backgroundImage:`linear-gradient(transparent,rgba(0,0,0,0.5)),url(${post1})`}}>
        <Avatar src={post1}/>
          <h4>Username</h4>
        </div>
        <div className="singlefriend__story" style={{backgroundImage:`linear-gradient(transparent,rgba(0,0,0,0.5)),url(${post1})`}}>
        <Avatar src={post1}/>
          <h4>Username</h4>
        </div>
        
      </div>
    </div>
    <div className="submit__post">
    <div className="submitpost__top">
    <Avatar/>
    <div className="submitpost__input">
    <input type="text" placeholder="What's on your mind, Arshan?"/>
    </div>
    </div>
    <hr style={{ width:"92%",margin:"auto",borderTop:"1px solid rgb(210, 211, 212)"}}/>
    <div className="submitpost__bottom">
    <div className="submitpost_icon">
    <VideocamOutlinedIcon style={{color:"#ff3758"}}/> 
    <p>  Live video</p>
    </div>
    <div className="submitpost_icon">
    <CollectionsOutlinedIcon style={{color:"#24d400"}}/> 
    <p>  Photo/video</p>
    </div>
    <div className="submitpost_icon">
    <EmojiEmotionsOutlinedIcon  style={{color:"#ffde34"}}/> 
    <p>  Feeling/activity</p>
    </div>
    </div>
    </div>
    <div className="post">
    <div className="post__Top">
    <div className="postTop__left">
    <Avatar/>
    <div className="postTopleft__info">
    <h4>Arshan Nawaz</h4>
      <p>21 September at 15.29</p>
    </div>
    </div>
    <div className="postTop__right">
      <MoreHorizIcon/>
    </div>
    </div>
    <div className="post__message">
      <p>Hi this is my 1st post</p>
    </div>
    <hr style={{ borderTop:"1px solid rgb(210, 211, 212)"}}/>
    <div className="post__Image">
      <img src={post1} alt="" />
    </div>
    <div className="post__countLikeComment">
    <div className="count__like">
    <RecommendIcon style={{color:"#2e81f4"}}/> 
    <p>  3</p>
    </div>
      <p>4 comments</p>
    </div>
    <hr style={{ width:"92%",margin:"auto",borderTop:"1px solid rgb(210, 211, 212)"}}/>
    <div className="LikeCommentShare__Panel">
    <div className="count__like">
    <ThumbUpOffAltIcon style={{color:"gray"}}/> 
    <p>  Like</p>
    </div>
    <div className="count__like">
    <ChatBubbleOutlineSharpIcon style={{color:"gray"}}/> 
    <p>  comment</p>
    </div>
    <div className="count__like">
    <ShareOutlinedIcon  style={{color:"gray"}}/> 
    <p>  share</p>
    </div>
    </div>
    </div>
    <div className="post">
    <div className="post__Top">
    <div className="postTop__left">
    <Avatar/>
    <div className="postTopleft__info">
    <h4>Arshan Nawaz</h4>
      <p>21 September at 15.29</p>
    </div>
    </div>
    <div className="postTop__right">
      <MoreHorizIcon/>
    </div>
    </div>
    <div className="post__message">
      <p>Hi this is my 1st post</p>
    </div>
    <hr style={{ borderTop:"1px solid rgb(210, 211, 212)"}}/>
    <div className="post__Image">
      <img src={post1} alt="" />
    </div>
    <div className="post__countLikeComment">
    <div className="count__like">
    <RecommendIcon style={{color:"#2e81f4"}}/> 
    <p>  3</p>
    </div>
      <p>4 comments</p>
    </div>
    <hr style={{ width:"92%",margin:"auto",borderTop:"1px solid rgb(210, 211, 212)"}}/>
    <div className="LikeCommentShare__Panel">
    <div className="count__like">
    <ThumbUpOffAltIcon style={{color:"gray"}}/> 
    <p>  Like</p>
    </div>
    <div className="count__like">
    <ChatBubbleOutlineSharpIcon style={{color:"gray"}}/> 
    <p>  comment</p>
    </div>
    <div className="count__like">
    <ShareOutlinedIcon  style={{color:"gray"}}/> 
    <p>  share</p>
    </div>
    </div>
    </div>
    <div className="post">
    <div className="post__Top">
    <div className="postTop__left">
    <Avatar/>
    <div className="postTopleft__info">
    <h4>Arshan Nawaz</h4>
      <p>21 September at 15.29</p>
    </div>
    </div>
    <div className="postTop__right">
      <MoreHorizIcon/>
    </div>
    </div>
    <div className="post__message">
      <p>Hi this is my 1st post</p>
    </div>
    <hr style={{ borderTop:"1px solid rgb(210, 211, 212)"}}/>
    <div className="post__Image">
      <img src={post1} alt="" />
    </div>
    <div className="post__countLikeComment">
    <div className="count__like">
    <RecommendIcon style={{color:"#2e81f4"}}/> 
    <p>  3</p>
    </div>
      <p>4 comments</p>
    </div>
    <hr style={{ width:"92%",margin:"auto",borderTop:"1px solid rgb(210, 211, 212)"}}/>
    <div className="LikeCommentShare__Panel">
    <div className="count__like">
    <ThumbUpOffAltIcon style={{color:"gray"}}/> 
    <p>  Like</p>
    </div>
    <div className="count__like">
    <ChatBubbleOutlineSharpIcon style={{color:"gray"}}/> 
    <p>  comment</p>
    </div>
    <div className="count__like">
    <ShareOutlinedIcon  style={{color:"gray"}}/> 
    <p>  share</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default MiddleFeed