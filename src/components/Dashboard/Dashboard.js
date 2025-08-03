import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="kpi-cards">
        <div className="card">Total Students: 120</div>
        <div className="card">Today's Classes: 8</div>
        <div className="card">Pending Fees: ₹25,000</div>
      </div>
      {/* Add quick links to modules */}
    </div>
  );
}

export default Dashboard;