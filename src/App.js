import React from "react";
//Import components
import Tweet from "./components/Tweet";
import CreateTweet from "./components/CreateTweet";

function App() {
  //Here is the place to write normal js
  const name = "Chad";
  const message = 'I woke up today.'
  return (
    <div>
      <h1>Hello React</h1>
      <CreateTweet />
      <Tweet name={name} message='this is the actual tweet'/>
    </div> 
  );
}

export default App;
