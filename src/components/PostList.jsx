import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostList.module.css";
import { useState } from "react";

function PostList({ isPosting, onStop }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existing) => [postData, ...existing]);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStop}>
          <NewPost onCancel={onStop} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.text} author={post.author} sent={post.text} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h4>Add something</h4>
          <p>Nothing added yet</p>
        </div>
      )}
    </>
  );
}

export default PostList;
