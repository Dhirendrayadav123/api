import axios from "axios";
import React, { useState } from 'react';
const Add=()=>{
    let countAdd=0;
    const [user,setUser]=useState(""); 
    
        const handleSubmit=async(e)=>{
            e.preventDefault();
            try{
                const res= await axios("/",{
                user,
                });
                if(res.data)
                {
                    countAdd++;
                }
            }catch(err){
            console.log(err);

        }
    }
 
    return(
        <form className="position-absolute top-50 start-50 translate-middle mt-3 " onSubmit={handleSubmit} >

                    <div className="mb-3">
                    <div><h className="title fs-1">ADD NAME</h></div>
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder='Enter your Name ...'
                        
                        onChange={e=>setUser(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text"></div>
                    </div>
                    <button type="submit" className="btn btn-danger ">Add</button>
                    <p>`Data base added ${countAdd} times`</p>
        </form>
    );
}
export default Add;
