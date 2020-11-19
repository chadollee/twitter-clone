import React from "react";
//Import components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  //Here is the place to write normal js
  const name = "Chad";
  const message = 'I woke up today.'
  return (
    <div>
      <h1>Hello React</h1>
      <CreateTweet />
      <TweetList />
    </div> 
  );
}

export default App;
