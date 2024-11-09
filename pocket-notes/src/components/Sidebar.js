// Sidebar.js
import React, { useState } from 'react';

function Sidebar({ groups, onGroupSelect, onAddGroup }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddGroup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="Sidebar">
      <h2>Pocket Notes</h2>
    
      <button onClick={handleAddGroup}>+</button>
     
    </div>
  );
}

export default Sidebar;
