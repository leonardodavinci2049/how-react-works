import React, { useState } from "react";

const TabContent = ({ content }) => {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  console.log('RENDER');

  function handleInc() {
    setLikes((l) => l + 1);
  }

  function handleTripleInc() {
/*     setLikes(likes + 1);
    setLikes(likes + 1);
    setLikes(likes + 1); */

    setLikes((l) => l + 1);
    setLikes((l) => l + 1);
    setLikes((l) => l + 1);

  }

  function handleUndo() {
    setShowDetails(true);
    setLikes(0);
    console.log(likes);
  }

  function handleUndoLater() {
    setTimeout(handleUndo, 2000);
  }

  return (
    <div className="tab-content">
      <h4>{content.summary}</h4>
      {showDetails && <p>{content.details}</p>}
      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} Details
        </button>
        <div className="hearts-counter">
          <span>{likes} 💖</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleTripleInc}>+++</button>
        </div>
      </div>
      <div className="tab-undo">
        <button onClick={handleUndo }>Undo</button>
        <button onClick={handleUndoLater}>Undo in 2s</button>
      </div>
    </div>
  );
};

export default TabContent;
