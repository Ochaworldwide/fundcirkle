import React from 'react'
import BottomNav from '../../Component/BottomNav/BottomNav';
import Home from '../Home/Home';
import Discover from '../Discover/Discover';

function Dashboard() {
    const tabContent = {
      "My Cirkles": <Home />,
      Discover: <Discover />,
      Payments: (
        <div className="p-4 text-center">
          This Page is Still Under Development
        </div>
      ),
      Settings: (
        <div className="p-4 text-center">
          This Page is Still Under Development
        </div>
      ),
    };
  return (
    <div>
      <BottomNav content={tabContent} />
    </div>
  );
}

export default Dashboard