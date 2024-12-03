import React from 'react'
import Confetti from '../../Component/Confetti/Confetti';

const CirkleCreationSuccess = () => {
  return (
    <div>
      <Confetti
        title="Congratulations Your Cirkle is Live!"
        message="You’ve successfully created a new Cirkle. Invite your friends and start contributing today!"
        primaryButtonText="Invite Members"
        secondaryButtonText="View Cirkle"
        primaryButtonLink="/home"
        secondaryButtonLink="/home"
      />
    </div>
  );
}

export default CirkleCreationSuccess