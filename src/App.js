import "./App.css";
import Search from "./Components/Search/Search";
import Post from './Components/Post/Post';
import { useState,useEffect } from "react";
import axios from "axios";


function App() {

  const[posts,setPosts]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts?_page=$%7Bpage%7D&_limit=20')
    .then((response)=>setPosts(response.data)).then(console.log(posts))
    
  },[])


  


  return (
    <div className="App">


      <Search />
      <div className="posts">
        {posts.map(post=>{
          return(
            <Post userId={post.userId} title={post.title}/>
          )
        })}
      
      
      </div>
      <button className="loadMore">Load More...</button>
    </div>

   
  );
}

export default App;
