import React, { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [posts, setPosts] = useState([]); // https://jsonplaceholder.typicode.com/posts

  useEffect(() => {
    // when the component mounts, fetch the posts (state changes) useEffect gets called
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data); // store resulting data from api call in state
      });
  }, []);

  const handleIncrement = () => {
    // setCounter and pass new state
    setCounter(counter + 1);
  };

  const handleNameChange = () => {
    setName("Heggy");
  };
  const postItems = posts.map((post) => (
    <li key={post.id}>
      {post.title}
      <p>{post.body}</p>
    </li>
  ));

  return (
    <div>
      <h1>{counter}</h1> - <h1>{name}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleNameChange}>Change Name</button>
      <hr />
      <ul>{postItems}</ul>
    </div>
  );
}

export default App;
