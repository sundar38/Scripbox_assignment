import {React, useState} from 'react'

const ChallengeTable = ({ challenges, onUpvote, setChallenges }) => { 
  const [order, setOrder]= useState("ASC")
  function sorting(text){
    if(text== "sortvote"){  
      if(order== "ASC"){    
        var sortedChallenges=[...challenges].sort((challenge1, challenge2)=> challenge1.upvotes- challenge2.upvotes)
        setOrder("DSC")
      }
      else{
        var sortedChallenges=[...challenges].sort((challenge1, challenge2)=> challenge2.upvotes- challenge1.upvotes)
        setOrder("ASC")
      }
      setChallenges(sortedChallenges)    
    }
    else{
      if(order== "ASC"){    
        var sortedChallenges=[...challenges].sort((challenge1, challenge2)=> challenge1.date.getDate()- challenge2.date.getDate())
        setOrder("DSC")
      }
      else{
        var sortedChallenges=[...challenges].sort((challenge1, challenge2)=> challenge2.date.getDate()- challenge1.date.getDate())
        setOrder("ASC")
      }
      setChallenges(sortedChallenges) 

    }
  }
    return (
    
        // <h3>Challenge</h3>
        <table className='challengetable'>
          <thead>
          <tr>                                                  
              <th >Title</th>
              <th>Description</th>
              <th >Tags</th>
              <th onClick={()=> sorting("sortdate")} style={{cursor: "pointer"}}>Date</th>
              <th onClick={()=> sorting("sortvote")} style={{cursor: "pointer"}}>Upvote</th>              
          </tr>
          </thead>
          <tbody>
        {challenges.map((challenge) => (       
              <tr key={challenge.id}>                 
                  <td>{challenge.title}</td>                                 
                  <td>{challenge.description}</td>
                  <td>{challenge.tags.join(', ')}</td>              
                  {/* <td>{challenge.date}</td> */}
                   <td>{new Date(challenge.createdDate).toLocaleString()}</td>
                   <td>{challenge.upvotes}</td>
                   <button onClick={() => onUpvote(challenge.id)}>Upvote</button>
                  {/* <ThumbUpIcon onClick={()=>handleupvote(index)}/> */}
              </tr>
              
              ))}
             
          </tbody>
      </table>
       
    );
  };
  

export default ChallengeTable