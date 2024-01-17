import React, { useState, useEffect } from 'react';
import ChallengeForm from './ChallengeForm';
import ChallengeTable from './ChallengeTable';

const Dashboard2 = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const storedChallenges = JSON.parse(localStorage.getItem('challenges')) || [];
    setChallenges(storedChallenges);
    // localStorage.removeItem("challenges")
  }, []);

  const addtheChallenge = (newChallenge) => {
    const updatedChallenges = [...challenges, { ...newChallenge, id: Date.now(), upvotes: 0 }];
    console.log(updatedChallenges);
    setChallenges(updatedChallenges);
    localStorage.setItem('challenges', JSON.stringify(updatedChallenges));
  };

  const handleUpvote = (challengeId) => {
    const updatedChallenges = challenges.map((challenge) =>
      challenge.id === challengeId ? { ...challenge, upvotes: challenge.upvotes + 1 } : challenge
    );
    setChallenges(updatedChallenges);
    localStorage.setItem('challenges', JSON.stringify(updatedChallenges));
  };

  return (
    <div>
      <h1>Hack Ideas</h1>
      <ChallengeForm addtheChallenge={addtheChallenge} />
      <ChallengeTable challenges={challenges} onUpvote={handleUpvote} setChallenges={setChallenges} />
    </div>
  );
};

export default Dashboard2;