import React from "react";
import furina from '../pics/furina.jpg';
import '../App.css';

const Avatar = () => {
    
  return (
   
      <div style={{
        width: '30vw',
        height: '30vw',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)',
        boxShadow: '0 4px 32px 0 rgba(39,142,165,0.15)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        border: '4px solid #278ea5',
      }}>
        <img
          src={furina}
          alt="Avatar"
          style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
        />
      </div>
  );
};

export default Avatar;