import React, { useState } from "react";

function Counting() {
  var [like, setlike] = useState(0);
  function handleLike() {
    setlike(like + 1);
  }
  return (
    <div>
      <h1>Counting</h1>
      <p>Like: {like}</p>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default Counting;
