import React from "react";
import Confetti from "../Confetti/Confetti";

function GoalAchieved() {
  return (
    <div>
      <Confetti
        title="Goal Achieved !"
        message="Congratulations! You've reached your savings goal. Keep up the momentum!"
        primaryButtonText="Set New Goal"
        secondaryButtonText="View Summary"
        primaryButtonLink="/home"
        secondaryButtonLink="/home"
      />
    </div>
  );
}

export default GoalAchieved;
