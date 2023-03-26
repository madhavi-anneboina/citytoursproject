import React from 'react'

const Notes = ({element,notes,setNotes,editid,setEditid}) => {
    const removeHandler = (id) =>{
        const newNotes = notes.filter((ele) =>{
            if(ele.id !== id){
                return ele
            } 
        })
     setNotes(newNotes)
    }   
    const editHandler = (id) =>{
         setEditid(id)
        notes.filter((ele) =>{
            if(ele.id === id) {
                document.getElementById('edittitle').value = ele.title;
                document.getElementById('editdescription').value = ele.dec;
            } 
    })
}
    return (
        <div>
            <div class="card">
                <div class="card-body" style={{textTransform:"capitalize"}}>
                    <h5 class="card-title">{element.title}</h5>
                    <p class="card-text">{element.dec}</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                      onClick={() => {
                        editHandler(element.id)
                    }}
                    
                    >
                        Edit
                    </button>
                    <button className="btn btn-danger mx-2"
                    onClick={() => {
                        removeHandler(element.id)
                    }}
                     >Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Notes
