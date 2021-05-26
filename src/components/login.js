import React from 'react';
import Swal from "sweetalert2";

export const Login = (props) => {
    const handleSubmit = () => {

        Swal.fire({
          title: "Login done sucessfully",

          icon: "success",
        
        })
       
         props.history.push(`/products`);

    }

    return (

        <div className='container'>
            
                <h2 >Login Form</h2>

           
             <form onSubmit={handleSubmit} >
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
  
    <input type="submit" value="Submit"/>
  </form>
        </div>

    )
}