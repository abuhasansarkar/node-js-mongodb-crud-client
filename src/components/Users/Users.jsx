import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);
  // console.log(users);

  const hendelDelete = (user) => {
    console.log(user._id);
    const agree = window.confirm(
      `Are you Sure you went to Delete : ${user.name}`
    );
    if (agree) {
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("User deleted successfully.");
            const remainingUsers = displayUsers.filter(
              (usr) => usr._id !== user._id
            );
            setDisplayUsers(remainingUsers);
          }
        });
    }
  };

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-5xl p-5">All Users Here</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {displayUsers.map((user) => (
              <tr key={user._id}>
                <th></th>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>
                 <Link  to={`/update/${user._id}`}>
                 <button className="bg-black px-3 py-1">Update</button>
                 </Link>
                </td>
                <td>
                  <button
                    onClick={() => hendelDelete(user)}
                    className="bg-red-600 px-3 py-2"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
