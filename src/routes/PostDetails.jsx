import { useLoaderData, Link } from "react-router-dom";
import classes from "./PostDetails.module.css";
import Modal from "../components/Modal";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.post}>
          <h2 className={classes.author}>Not a post</h2>
          <p className={classes.desc}>The requested post could not be found.</p>
          <p>
            <Link to="..">Cancel</Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.post}>
        <h2 className={classes.author}>{post.author}</h2>
        <p className={classes.desc}>{post.text}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }) {
  const response = await fetch("http://localhost:8080/posts/" + params.id);
  const resData = await response.json();
  return resData.post;
}
