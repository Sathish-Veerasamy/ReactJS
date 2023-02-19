import "./Post.css";
import { useState } from "react";

const Post = ({ userId, title }) => {
  const [likes, setLikes] = useState(1);

  const handleOnClick=()=>{
    setLikes((prev)=>prev+1)
  }
  return (
    <div className="card">
      <img
        src="https://fastly.picsum.photos/id/386/200/200.jpg?hmac=mPGpmd8a-dSFGBZWTzakrKK9snUfEYI764cWc7zihrg"
        alt="postImage"
      />
      <div className="content">
        <div className="userId">
          User Id : {userId}
        </div>
        <div className="title">
          Title :{title}
        </div>
        <div className="likes">
          Likes : {likes}
        </div>
      </div>
      <button className="button" onClick={handleOnClick}>Like</button>
    </div>
  );
};

export default Post;
