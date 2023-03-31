import classes from "./Header.module.css";
import { MdPostAdd, MdMessage } from "react-icons/md";

function Header({ onCreate }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={classes.button} onClick={onCreate}>
          <MdPostAdd className={classes.logo} />
          New
        </button>
      </p>
    </header>
  );
}

export default Header;
