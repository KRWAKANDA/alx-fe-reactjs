import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ backgroundColor: '#f0f8ff', padding: '20px', textAlign: 'justify', lineHeight: '1.6' }}>
      <h2 style={{ color: '#333' }}>Welcome to my city guide!</h2>
      <p>Here you'll find a collection of my favorite cities and interesting facts about them.</p>
      <UserProfile name="Tyrone" age={28} bio="A passionate web developer who loves learning React." />
      <UserProfile name="Sarah" age={25} bio="Traveler and foodie who enjoys new adventures." />
      
    </main>
  );
}

export default MainContent;

