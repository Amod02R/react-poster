import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostList.module.css";

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
      <ul className={classes.posts}>
        <Post author="nm" sent="bl" />
      </ul>
    </>
  );
}

export default PostList;
