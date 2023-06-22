import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allusers')
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'User has been deleted.', 'success');
              const remainingUsers = allUsers.filter((user) => user._id !== id);
              setAllUsers(remainingUsers);
            }
          });
      }
    });
  };

  return (
    <div className='mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto w-full md:w-[80%]'>
      {allUsers.map((user) => (
        <div key={user._id} className='card w-full bg-black text-primary-content'>
          <div className='card-body'>
            <h2 className='card-title'>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <div className='card-actions justify-end'>
              <Link
                to={{
                  pathname: `/updateuser/${user._id}`,
                  state: { user },
                }}
              >
                <button className='btn'>Update</button>
              </Link>
              <button className='btn' onClick={() => handleDelete(user._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
