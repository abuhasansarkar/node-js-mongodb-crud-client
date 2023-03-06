import React, { useState } from "react";

const Home = () => {
     const [users, setUsers] = useState({});

     const hendelAddUser = (e) =>{
          e.preventDefault();

          console.log(users);
          fetch('http://localhost:5000/users', {
               method: 'post', 
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(users)
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if(data.acknowledged){
               alert('User added successfully');
               e.target.reset();
           }
          })

          // console.log(e.target);
          // const form = e.target;
          // const name = form.name.value;
          // const address = form.address.value;
          // const email = form.email.value;
          // console.log(name, address, email);
     }

     const hendelOnBlur = (e) =>{
          const filed = e.target.name;
          // console.log(filed);
          const value = e.target.value;
          // console.log(value);
          const newUser = {...users};
          newUser[filed] = value;
          // console.log(newUser);
          setUsers(newUser);
     }

  return (
       <div className="bg-slate-800 w-[80%] mt-5 mx-auto">
         <h1 className="text-5xl pt-5">Add User</h1>
         <form onSubmit={hendelAddUser} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input 
                    onBlur={hendelOnBlur}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered" required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input 
                    onBlur={hendelOnBlur}
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="input input-bordered" required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input 
                    onBlur={hendelOnBlur}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered" required
                />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add User</button>
              </div>
            </form>
    </div>
  );
};

export default Home;
