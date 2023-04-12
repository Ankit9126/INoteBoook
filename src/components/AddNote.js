import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote=(props)=> {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title:"",description:"",tag:""})
    props.showAlert("Note Added Successfully","success")
  };
  const onChangee = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (    
      <div className="container my-3">
        <h1>Add a Note:</h1>
        <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">            Title          </label>
          <input  minLength={5} required type="text"   className="form-control" value={note.title} id="title" name="title"  placeholder="Enter title"  onChange={onChangee}  />
        </div>
        <div className="mb-3">
          <label htmlFor="description"   className="form-label" >
            Description          </label>
          <input minLength={5} required type="text" className="form-control" value={note.description}   id="description"  name="description" onChange={onChangee}  ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">            Tag          </label>
          <input     type="text"   name="tag"  className="form-control"  value={note.tag}  id="tag"  onChange={onChangee}  />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>       Add Note    </button>
      </form>
      </div>
  );
}

export default AddNote;
