import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ backgroundColor: '#eef2f3', padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: 'darkgreen' }}>User Profiles</h2>
      <UserProfile name="Tyrone" age={28} bio="A passionate web developer who loves learning React." />
      <UserProfile name="Sarah" age={25} bio="Traveler and foodie who enjoys new adventures." />
      <"I love to visit New York, Paris, and Tokyo." />
    </main>
  );
}

export default MainContent;

