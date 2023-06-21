import React, { useEffect, useState } from 'react';

const AllUsers = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allusers')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllUsers(data)
            })
    }, [])
    return (
        <div className='mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto w-full md:w-[80%]'>
            {
                allUsers.map(user =>
                    <div key={user._id} className="card w-full bg-black text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">{user.name}</h2>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                            <div className="card-actions justify-end">
                                <button className="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AllUsers;