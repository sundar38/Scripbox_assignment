import './App.css';
import Login from './Components/Login';
import { useState, useEffect } from 'react';
import ChallengeForm from './Components/ChallengeForm';
import ChallengeTable from './Components/ChallengeTable';

function App() {  
  const [isuserloggedin, setIsuserLoggedin]= useState(false)
  const [challenges, setChallenges] = useState([]);
  const [employeeid, setEmployeeid]= useState()
  
  useEffect(() => {
    const storedChallenges = JSON.parse(localStorage.getItem('challenges')) || [];
    setChallenges(storedChallenges);
      // localStorage.removeItem("challengeslist")
  }, []);

  const addtheChallenge = (newChallenge) => {
    const updatedChallenges = [...challenges, { ...newChallenge, id: Date.now(), createdDate: new Date().toDateString(), upvotes: 0 }];
    console.log(updatedChallenges);
    setChallenges(updatedChallenges);
    localStorage.setItem('challengeslist', JSON.stringify(updatedChallenges));
  };

  const handleUpvote = (challengeId) => {
    const updatedChallenges = challenges.map((challenge) =>
      (challenge.id === challengeId) && (employeeid!=challenge.employeeid) ? { ...challenge, upvotes: challenge.upvotes + 1 } : challenge
    );
    setChallenges(updatedChallenges);
    localStorage.setItem('challenges', JSON.stringify(updatedChallenges));
  };
  function receivemployeeid(empid){
    setEmployeeid(empid)
    setIsuserLoggedin(true)
  }
  return ( //render login page only if user is loggedin or else then navigate him to challengeform page 
    <div className="App">   
         
        
        {!isuserloggedin?
              <Login receivemployeeid={receivemployeeid}/>:
              <div className='container'>
                <h2 className='heading'>Hello {employeeid}!!!</h2>
                <h2>Hack Ideas</h2>

                <ChallengeForm addtheChallenge={addtheChallenge} employeeid={employeeid}/> 

                <ChallengeTable challenges={challenges} onUpvote={handleUpvote} setChallenges={setChallenges} employeeid={employeeid} />
               
                
              </div>
        }        
    </div>
  );
}

export default App;
