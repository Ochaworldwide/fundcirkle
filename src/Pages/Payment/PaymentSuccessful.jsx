import React from "react";
import Confetti from "../../Component/Confetti/Confetti";

const PaymentSuccess = () => {
  return (
    <div>
      <Confetti
        title="Payment Successful!"
        message="Great job! Your first contribution has been made. Keep up the good work!"
        primaryButtonText="View Payment Details"
        secondaryButtonText="Return to Dashboard"
        primaryButtonLink="/home"
        secondaryButtonLink="/home"
      />
    </div>
  );
};

export default PaymentSuccess;
