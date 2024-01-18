import './App.css';
import Login from './Components/Login';
import { useState, useEffect } from 'react';
import ChallengeForm from './Components/ChallengeForm';
import ChallengeTable from './Components/ChallengeTable';
function App() {  
  const [loggedinuser, setLoggedinuser]= useState(false)
  const [challenges, setChallenges] = useState([]);
  const [employeeid, setEmployeeid]= useState()
  useEffect(() => {
    const storedChallenges = JSON.parse(localStorage.getItem('challenges')) || [];
    setChallenges(storedChallenges);
    //  localStorage.removeItem("challenges")
  }, []);

  const addtheChallenge = (newChallenge) => {
    const updatedChallenges = [...challenges, { ...newChallenge, id: Date.now(), createdDate: new Date().toDateString(), upvotes: 0 }];
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
  function receivemployeeid(empid){
    setEmployeeid(empid)
    setLoggedinuser(true)
  }
  return (
    <div className="App">     
        
        {!loggedinuser?
              <Login receivemployeeid={receivemployeeid}/>:
              <div className='container'>
                <h2 className='heading'>Hello {employeeid}!!!</h2>
                <h2>Hack Ideas</h2>
                <ChallengeForm addtheChallenge={addtheChallenge} />
                <ChallengeTable challenges={challenges} onUpvote={handleUpvote} setChallenges={setChallenges} />
              </div>
}
         

    </div>
  );
}

export default App;
