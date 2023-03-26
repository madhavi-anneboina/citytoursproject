import React,{useState, useSyncExternalStore} from 'react'

const Form = ({notes,setNotes}) => {
    const[title,setTitle] = useState('')
    const [dec,setDec] = useState('')
    const changeHandler = (e) => {
     if(e.target.id == "title") {
        setTitle(e.target.value)
     } else{
        setDec(e.target.value)
     }
    }
    const notesHandler = (e) =>{
        e.preventDefault()
        if(title !== "" && dec !== ""){
        setNotes((note)=>{
            return(
                [...note,{
                    title:title,
                    dec : dec,
                    id : new Date().getTime()
                }]
            )

        })
        setTitle('')
        setDec('')
    }
}

    return (
        <div className='container my-3'>
            <div className='row justify-content-center'>
                <div className="col-md-10">
                    <div>
                        <form style={{border:'2px solid #ced4da',borderRadius:"10px",padding:"30px"}}>
                            <div className="mb-3">
                                <label for="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" onChange={changeHandler} placeholder='Enter your Title' value={title}/>
                            </div>
                            <div className="mb-3">
                                <label for="description" className="form-label">Description</label>
                                <textarea name="Decription" id="description" rows="3" className="form-control" value={dec} placeholder='Enter your description' onChange={changeHandler}> </textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={notesHandler}>Add Notes</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Form
