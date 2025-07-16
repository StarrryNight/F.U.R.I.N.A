import React from 'react';
import Avatar from './components/Avatar';
import SoundEffect from './components/SoundEffect';
import SideMenu from './components/SideMenu';
import AIchat from './components/AIchat';
import AIresponse from './components/AIresponse';
import { useState, useCallback } from 'react';
export default function App() {
  const [AIcontent,setAIContent] = useState('')

  const changeResponse = useCallback((res: string) => {
    setAIContent(res);
    console.log(AIcontent)
  }, []);
  return (
    <>
      <SideMenu />
      <div style={{
        minHeight: '60vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}>
          <div style={{ textAlign: 'center', marginBottom: '2vh' }}>
            <h1 style={{
              fontSize: '2.5rem',
              letterSpacing: '0.2em',
              margin: 0,
              color: '#1f4b74',
              fontWeight: 800,
              textShadow: '0 2px 8px rgba(31,75,116,0.08)'
            }}>F.U.R.I.N.A</h1>
            <div style={{
              fontSize: '1rem',
              color: '#3a6ea5',
              fontWeight: 500,
              marginTop: '0.5rem',
              letterSpacing: '0.08em',
              opacity: 0.85
            }}>
              FANTASTIC UNREAL RESPONSIVE INTELLIGENT NETWORKED ASSISTANT
            </div>
          </div>
          <div style={{ marginTop: '1vw' }}>
            <Avatar />
            <SoundEffect />
          </div>
        
      </div>
      <div style={{
        height: '40vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
        <div className="aichat-row">
          <AIchat onRefresh={(res)=>changeResponse(res)} />
        </div>
        <div className="airesponse-row">
          <AIresponse content={AIcontent}/>
        </div>
      </div>
    </>
  );
}
