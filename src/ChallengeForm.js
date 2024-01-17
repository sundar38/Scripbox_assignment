import {React, useState} from 'react'

const ChallengeForm = ({ addtheChallenge }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addtheChallenge({ title, description, tags: tags.split(',') });
      setTitle("");
      setDescription("");
      setTags("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <br></br>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <br></br>
        <label>
          Tags (comma-separated):
          <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} required />
        </label>
        <br></br>
        <button type="submit">Add Challenge</button>
      </form>
    );
  };

export default ChallengeForm