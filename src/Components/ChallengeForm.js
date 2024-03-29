import {React, useState} from 'react'

const ChallengeForm = ({ addtheChallenge, employeeid }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("hi");

      // const namecheck=/^[0-9a-zA-Z ]$/
      // console.log(namecheck.exec(title));
      // if(title==" "){
      //   alert("not working")
      // }




      title==" "? alert("not working") :addtheChallenge({ employeeid, title, description, tags: tags.split(',') });//assigning all the values to challenge
      setTitle("");
      setDescription("");
      setTags(""); //making all these values to "" after pushing
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" className='fields' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter the title of the challenge' required />
        </label>
        <br></br>
        <label>
          Description:
          <textarea value={description} className='fields' onChange={(e) => setDescription(e.target.value)} placeholder='Enter the description of the challenge' required />
        </label>
        <br></br>
        <label>
          Tags (Add tags seperated by comma):
          <input type="text" value={tags} className='fields' onChange={(e) => setTags(e.target.value)} placeholder='Enter the tags' required />
        </label>
        <br></br>
        <button type="submit">Add Challenge</button>        
      </form>
    );
  };

export default ChallengeForm