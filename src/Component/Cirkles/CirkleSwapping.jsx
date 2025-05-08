import React from "react";
import Confetti from "../Confetti/Confetti";

function CirkleSwapping() {
  return (
    <div>
      <Confetti
        title="Swapping Request Sent !"
        message="Month swap request is sent. Once approved you will be notified."
        primaryButtonText="Go Home"
        secondaryButtonText="View Cirkles"
        primaryButtonLink="/home"
        secondaryButtonLink="/home"
      />
    </div>
  );
}

export default CirkleSwapping;
