import React, { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
function Dashboard() {
    const [displayform, setDisplayform]= useState(false)
    const [title, setTitle] =useState("")
    const [description, setDescription]= useState("")
    let [challengelist, setChallengelist]= useState([])
    let [count,setCount]= useState(0)
    const [upvote, setUpvote]= useState([])
    const [order, setOrder]= useState("ASC")
    const [index, setIndex]= useState(1)
    function addthechallenge(e){
        e.preventDefault()
        setDisplayform(true)
    }
    function addchallenge({index}){
        // e.preventDefault()
        console.log("inside");
        // let upvotearr= upvote.find(eachchall=> eachchall.index== index)
        // let obj={
        //     Title: title,
        //     Description: description
        // }
        // // console.log("ar ris ", obj);
        // setChallengelist((prevchallenge)=> [...prevchallenge, obj])
        // console.log("challenfe lis tis",challengelist);
        let finalarr={
            id: index,
            Count: count,
            Title: title,
            Desc: description
        }
        setTitle("")
        setDescription("")
    }
    function sorting(text){
        console.log(upvote);
        if(text=="votescount"){
        if(order== "ASC"){
            console.log("in");
            upvote.sort((a,b)=> a.count- b.count)
            setOrder("DSC")
            console.log("upvote is", upvote);
             setChallengelist(upvote)
            console.log("challengelist is ", challengelist);
        }
        else{
            upvote.sort((a,b)=> b.count- addchallenge.count)
            setOrder("ASC")
        }
    }
        // if(text=="votescount"){
        //     challengelist.sort((ch1, ch2)=> )
        // }
    }
    function handleupvote({index}){
        console.log(index);
        setCount(count+1)
        // const updatedvotes=[...upvote]
        // const position=updatedvotes.findIndex(entry=> entry.id==index)
        // console.log("position is", position)
        // if(position!==-1){
        //      updatedvotes[position].count+=1
        //     // console.log("count is",updatedvotes[position].count);
        // }
        // else{
        //     updatedvotes.push({id: index, count:0})
        // }
        //  console.log("updated cotes is",updatedvotes);
        // setUpvote(updatedvotes)

    // console.log(upvote[index]);
    // setUpvote(upvote[index]= (upvote[index]||0)+1)

    }
    function getupvotecount(index){
        const upvoteentry= upvote.find(entry=> entry.id==index)
        return upvoteentry? upvoteentry.count:0
    }
    
    let date= new Date()
  return (
    <div className='container'>
        <button onClick={addthechallenge} className='main'>Add a new challenge</button>
        {displayform?
        (<form>
           
            <input type='text' value={title} placeholder='Enter your title here' onChange={e=> setTitle(e.target.value)} ></input> <br></br>
            <input type='text' value={description} placeholder='Enter your description here' onChange={e=> setDescription(e.target.value)}></input> <br></br>
            <ThumbUpIcon onClick={()=>handleupvote({index})}/>
            <button onClick={()=>addchallenge({index})}>Add Challenge</button>
        </form>)
        :
        <div></div>}
        
        {challengelist?             
                <table>
                    <thead>
                    <tr> 
                        <th>Id</th>                                      
                        <th  style={{cursor: "pointer"}}>Title</th>
                        <th >Description</th>
                        <th onClick={()=> sorting("votescount")}>Votes Count</th>
                        <th onClick={()=> sorting("date")}>Creation date</th>
                        <th>Please click here to upvote</th>
                    </tr>
                    </thead>
                    <tbody>
                        {challengelist.map((eachchallenge, index)=> 
                        <tr key={index}> 
                            <td>{index+1}</td>                                 
                            <td>{eachchallenge.Title}</td>
                            <td>{eachchallenge.Description}</td> 
                            {console.log("challengelist render is ", challengelist)} 
                            
                             <td>{getupvotecount(index)}</td>
                            <td>{new Date().toLocaleDateString()}</td>
                            {/* <ThumbUpIcon onClick={()=>handleupvote(index)}/> */}
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