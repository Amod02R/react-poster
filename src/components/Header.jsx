import classes from "./Header.module.css";
import { MdPostAdd, MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd className={classes.logo} />
          <h1>New Post</h1>
        </Link>
      </p>
    </header>
  );
}

export default Header;
