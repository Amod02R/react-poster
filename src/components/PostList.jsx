import Post from "./Post";
import { useLoaderData } from "react-router-dom";

import classes from "./PostList.module.css";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts !== undefined && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              desc={post.text}
            />
          ))}
        </ul>
      )}
      {posts !== undefined && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h4>Add something</h4>
          <p>Nothing added yet</p>
        </div>
      )}
    </>
  );
}

export default PostList;
