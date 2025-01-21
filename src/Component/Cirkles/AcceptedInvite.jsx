import React from 'react'
import Confetti from '../Confetti/Confetti';

function AcceptedInvite() {
  return (
    <div>
        <Confetti
        title="Welcome to the Cirkle!"
        message="You've successfully joined a new Cirkle. Ready to start contributing?"
        primaryButtonText="View Cirkle"
        secondaryButtonText="Make First Contribution"
        primaryButtonLink="/home"
        secondaryButtonLink="/home"
        />
    </div>
  );
}

export default AcceptedInvite