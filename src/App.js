import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import Notes from './Components/Notes';
import Editmodel from './Components/Editmodel';

const App = () => {
  const [notes,setNotes] = useState('')
  const [editid,setEditid] = useState('')
  localStorage.setItem("notes",JSON.stringify(notes))
  return (
    <div>
    <Editmodel  editid={editid}/>
      <Navbar />
      <Form  notes={notes} setNotes={setNotes}/>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
          <h1 className='mb-3'>Your Notes</h1>
          {notes.length == 0 ? 
             <div class="card">
            <div class="card-body">
                    <h5 class="card-title">Message: </h5>
                    <p class="card-text">No Notes Avilable</p>
                    </div>
                </div>
                 : notes.map((element) =>{
                  return(
                    <Notes  element={element} key={element.id} notes={notes} setNotes={setNotes} setEditid={setEditid}
                    />
                  )
                })}
          
          </div>
        </div>
      </div>
    </div>
  )
  function getNotesFromLs(){
    const note = JSON.parse(localStorage.getItem("notes"))
    if(note) {
      return note  
    } else {
      return []
    }
  }
}

export default App
