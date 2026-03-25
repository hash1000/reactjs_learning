import { useState } from "react";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

function PostList({onClose,modalIsVisible}) {
  const [bodyEvent, setBodyEvent] = useState("");
  const [authorEvent, setAuthorEvent] = useState("");

  function handleBodyFunction(event) {
    setBodyEvent(event.target.value);
  }

  function handleAuthorFunction(event) {
    setAuthorEvent(event.target.value);
  }

  let modalContant;
  if (modalIsVisible) {
    modalContant = (
      <Modal onClose={onClose}>
        <NewPost
          onBodyChange={handleBodyFunction}
          onAuthorChange={handleAuthorFunction}
        />
      </Modal>
    );
  }

  return (
    <>
      {modalContant}
      <ul className={classes.post}>
        <Post author={bodyEvent} body={authorEvent} />
      </ul>
    </>
  );
}

export default PostList;
