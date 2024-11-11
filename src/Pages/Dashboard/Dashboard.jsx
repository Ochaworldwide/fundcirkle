import React from 'react'
import BottomNav from '../../Component/BottomNav/BottomNav';
import Home from '../Home/Home';

function Dashboard() {
    const tabContent = {
      "My Cirkles": <Home />,
      Discover: <div className="p-4">This is Discover content</div>,
      Payments: <div className="p-4">This is Payments content</div>,
      Settings: <div className="p-4">This is Settings content</div>,
    };
  return (
    <div>
      <BottomNav content={tabContent} />
    </div>
  );
}

export default Dashboard