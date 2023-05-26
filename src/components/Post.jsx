import classes from "./Post.module.css";
import { Link } from "react-router-dom";

function Post({ id, author, desc }) {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <h2 className={classes.author}>{author}</h2>
        <p className={classes.text}> {desc}</p>
      </Link>
    </li>
  );
}

export default Post;
