import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ onCancel, onAddPost }) {
  const [newText, setNewText] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  function textChangeHandler(event) {
    setNewText(event.target.value);
  }

  function authorChangeHandler(event) {
    setNewAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const postData = {
      text: newText,
      author: newAuthor,
    };

    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          row={3}
          onChange={textChangeHandler}
        ></textarea>
      </p>

      <p>
        <label htmlFor="name">Name</label>
        <input id="name" required onChange={authorChangeHandler}></input>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
