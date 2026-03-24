import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import  classes from "./PostList.module.css";

function PostList() {
    const [bodyEvent, setBodyEvent]=useState("");
    const [authorEvent, setAuthorEvent]=useState("");

    function handleBodyFunction(event){
        console.log(">>>> body",event.target.value);
        setBodyEvent(event.target.value)
    }
     function handleAuthorFunction(event){
        console.log(">>>> Author",event);
        setAuthorEvent(event.target.value)
    }
  return (
    <>
    <NewPost onBodyChange={handleBodyFunction} onAuthorChange={handleAuthorFunction}/>
    <ul className={classes.post}>
        <Post author={bodyEvent} body={authorEvent}/>
    </ul>
    </>
  );
};

export default PostList;
