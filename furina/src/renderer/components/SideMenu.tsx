import React, { useState } from 'react';
import './SideMenu.css';

const SideMenu = () => {
  
  const [open, setOpen] = useState(false);
  const [manualClose, setManualClose] = useState(false);

  // Show menu on hover unless manually closed
  const handleEdgeEnter = () => {
    if (!manualClose) setOpen(true);
  };
  const handleEdgeLeave = () => {
    console.log("hio")
    if (!manualClose) setTimeout(()=>setOpen(false), 500)
  };
  const handleClose = () => {
    window.close()
    setOpen(false);
    setManualClose(true);
    // Optionally, reset manualClose after a delay or on next hover
    setTimeout(() => setManualClose(false), 2000);
  };

  return (
    <>
      {/* Invisible hover area on the left edge */}
      <div
        className="side-hover-area"
        onMouseEnter={handleEdgeEnter}
        onMouseLeave={handleEdgeLeave}
      />
      {/* The menu itself */}
      <div className={`side-menu${open ? ' open' : ''}`}>
        <button className="close-btn" onClick={handleClose}>
          ✕ Close
        </button>
        {/* Menu content here */}
       
      </div>
    </>
  );
};

export default SideMenu; 