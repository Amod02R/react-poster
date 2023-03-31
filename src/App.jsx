import PostList from "./components/PostList";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [modalState, setModalState] = useState(false);

  function showModalHandler() {
    setModalState(true);
  }

  function hideModalHandler() {
    setModalState(false);
  }

  return (
    <>
      <Header onCreate={showModalHandler} />
      <main>
        <PostList isPosting={modalState} onStop={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
