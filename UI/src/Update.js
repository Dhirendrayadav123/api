import { useState } from "react";
import axios from "axios";

const Update =()=>{
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const handleUpdate = async () => {

        try {
          await axios.put(`/posts/${id}`, {
            username: name,
          });          
        } catch (err) {}
      };

    return(

        <form onSubmit={handleUpdate}>
        <div className="position-absolute top-50 start-50 translate-middle mt-3 ">
        <div><h className="title fs-1">UPDATE NAME</h></div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">UserID</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter your UserID' onChange={(e)=>setId(e.target.value)}/>
        </div>
        <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Name</label>
        <input type="text" className="form-control" id="Name" aria-describedby="emailHelp" placeholder='Enter your Name ...' 
        onChange={(e)=>setName(e.target.value)}/>
        <div id="emailHelp" className="form-text"></div>
        </div>
        <button type="submit" className="btn btn-danger ">Update</button>
        </div>
        </form>
    );
}
export default Update;