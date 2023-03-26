import React from 'react'

const Editmodel = ({ editid, notes, setNotes }) => {
    const updateHandler = () => {
      const updateNotes = notes.map((elem) =>
             {
            if (editid === elem.id) {
                return([{
                    ...elem, title: document.getElementById('edittitle').value,
                    desc: document.getElementById('editdescription').value
                }])
         

            }
        })
        setNotes(updateNotes)

    }
    return (
        <div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Notes</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form style={{ border: '2px solid #ced4da', borderRadius: "10px", padding: "30px" }}>
                                <div className="mb-3">
                                    <label for="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="edittitle" placeholder='Enter your Title' />
                                </div>
                                <div className="mb-3">
                                    <label for="description" className="form-label">Description</label>
                                    <textarea name="Decription" id="editdescription" rows="3" className="form-control" placeholder='Enter your description'> </textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={updateHandler}>Edit Notes</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Editmodel
