import {React, useState} from 'react'

const ChallengeTable = ({ challenges, onUpvote, setChallenges }) => { 
  const [order, setOrder]= useState("ASC")

  function sorting(text){
    if(text== "sortvote"){  //sorting based on number of votes
      if(order== "ASC"){    //in ascending order
        var sortedChallenges=[...challenges].sort((challenge1, challenge2)=> challenge1.upvotes- challenge2.upvotes)
        setOrder("DSC")
      }
      else{                 //in descending order
        var sortedChallenges=[...challenges].sort((challenge1, challenge2)=> challenge2.upvotes- challenge1.upvotes)
        setOrder("ASC")
      }
      setChallenges(sortedChallenges)    
    }
   else{

   }
  }
    return (      

        <table className='challengetable'>
          <thead>
            <tr>                                                  
              <th >Title</th>
              <th>Description</th>
              <th >Tags</th>
              <th>Date</th>
              <th onClick={()=> sorting("sortvote")} style={{cursor: "pointer"}}>Upvote</th>                           
            </tr>
          </thead>
          <tbody>
            {challenges.map((eachchallenge) => (        //rendering each challenge in table
              <tr key={eachchallenge.id}>                 
                  <td>{eachchallenge.title}</td>                                 
                  <td>{eachchallenge.description}</td>
                  <td>{eachchallenge.tags.join(', ')}</td>             
                  <td>{eachchallenge.createdDate}</td>
                   <td>{eachchallenge.upvotes}</td>
                   <button onClick={() => onUpvote(eachchallenge.id)}>Upvote</button>
                  {/* <ThumbUpIcon onClick={()=>handleupvote(index)}/> */}
              </tr>              
              ))}
             
          </tbody>
      </table>
      
    );
  };
  

export default ChallengeTable