import React, { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
function Dashboard() {
    const [displayform, setDisplayform]= useState(false)
    const [title, setTitle] =useState("")
    const [description, setDescription]= useState("")
    let [challengelist, setChallengelist]= useState([])
    let [count,setCount]= useState(0)
    function addthechallenge(e){
        e.preventDefault()
        setDisplayform(true)
    }
    function addchallenge(e){
        e.preventDefault()
        console.log("inside");
        let obj={
            Title: title,
            Description: description
        }
        console.log("ar ris ", obj);
        setChallengelist((prevchallenge)=> [...prevchallenge, obj])
        console.log(challengelist);
        setTitle("")
        setDescription("")
    }
    function sorting(){

    }
    
    let date= new Date()
  return (
    <div className='container'>
        <button onClick={addthechallenge} className='main'>Add a new challenge</button>
        {displayform?
        (<form>
           
            <input type='text' value={title} placeholder='Enter your title here' onChange={e=> setTitle(e.target.value)} ></input> <br></br>
            <input type='text' value={description} placeholder='Enter your description here' onChange={e=> setDescription(e.target.value)}></input> <br></br>
            <ThumbUpIcon onClick={()=>setCount(count+1)}/> {count}
            <button onClick={addchallenge}>Add Challenge</button>
        </form>)
        :
        <div></div>}
        
        {challengelist?             
                <table>
                    <thead>
                    <tr>                                       
                        <th onClick={()=> sorting("title")} style={{cursor: "pointer"}}>Title</th>
                        <th onClick={()=> sorting("author")}>Description</th>
                        <th onClick={()=> sorting("publication_year")}>Votes Count</th>
                        <th onClick={()=> sorting("genre")}>Creation date</th>
                    </tr>
                    </thead>
                    <tbody>
                        {challengelist.map((eachchallenge, index)=> 
                        <tr key={index}>                                  
                            <td>{eachchallenge.Title}</td>
                            <td>{eachchallenge.Description}</td>                            
                            
                            <td>{count}</td>
                        </tr>
                        )}
                       
                    </tbody>
                </table>
        :
            <div></div>
        }
        


    </div>
  )
}

export default Dashboard