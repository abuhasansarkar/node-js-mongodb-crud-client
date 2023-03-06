import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
     const users = useLoaderData();
     const [updateUsers, setUpdateUsers] = useState(users)
     // console.log(users.name);

     const hendelUpdateUser= (e) =>{
          e.preventDefault();
          console.log(updateUsers);
          fetch(`http://localhost:5000/users/${updateUsers._id}`, {
               method: 'put',
               headers: {
                    'content-type': 'application/json' 
               },
               body: JSON.stringify(updateUsers)
          })
          .then(res => res.json())
          .then(data => {})
          
     }

     const hendelOnChange = (e) =>{
          const filed = e.target.name;
          // console.log(filed);
          const value = e.target.value;
          // console.log(value);
          const newUser = {...users};
          newUser[filed] = value;
          // console.log(newUser);
          setUpdateUsers(newUser);
     }
     return (

          <div className="bg-slate-800 w-[80%] mt-5 mx-auto">
          <h1 className="text-5xl pt-5">Update User Information</h1>
          <form onSubmit={hendelUpdateUser} className="card-body ">
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Name</span>
                 </label>
                 <input 
                     onChange={hendelOnChange}
                   type="text"
                   name="name"
                   placeholder="Name"
                   className="input input-bordered" defaultValue={users.name}
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Address</span>
                 </label>
                 <input 
                     onChange={hendelOnChange}
                   type="text"
                   name="address"
                   placeholder="Address"
                   className="input input-bordered" defaultValue={users.address}
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input 
                     onChange={hendelOnChange}
                   type="email"
                   name="email"
                   placeholder="Email"
                   className="input input-bordered" defaultValue={users.email}
                 />
               
               </div>
               <div className="form-control mt-6">
                 <button className="btn btn-primary">Add User</button>
               </div>
             </form>
     </div>
     );
};

export default UpdateUser;