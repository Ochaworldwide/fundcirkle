import React from 'react'
import BottomNav from '../../Component/BottomNav/BottomNav';
import Home from '../Home/Home';
import Discover from '../Discover/Discover';
import Payment from '../Payment/Payment';
import Settings from '../Settings/Settings';

function Dashboard() {
    const tabContent = {
      "My Cirkles": <Home />,
      Discover: <Discover />,
      Payments: <Payment/>,
      Settings: <Settings />,
    };
  return (
    <div>
      <BottomNav content={tabContent} />
    </div>
  );
}

export default Dashboard