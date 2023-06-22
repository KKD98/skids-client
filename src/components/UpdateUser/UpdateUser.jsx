import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const UpdateUser = () => {

    const location = useLocation();
    const userId = location.pathname.split('/').pop();



    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const updatedUserDetails = {
            name: data.name,
            email: data.email,
            phone: data.phone,
        };

        fetch(`https://skids-server.vercel.app/user/${userId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedUserDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset();
                }
            });
    };

    const phoneRegex =  /^\+\d{1,3}\d{9,10}$/;
    return (
        <div>
            <Helmet>
                <title>Edit User</title>
            </Helmet>
            <p className="text-4xl text-center font-semibold text-black my-4">
            Edit User
            </p>

            <div className="bg-black rounded-xl w-[80%] md:w-[30%] mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control mx-3 p-3">
                        <label className="label">
                            <span className="label-text text-gray-400">Name</span>
                        </label>
                        <input
                            type="text"
                            {...register('name')}
                            placeholder="Name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mx-3 p-3">
                        <label className="label">
                            <span className="label-text text-gray-400">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register('email')}
                            placeholder="Email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mx-3 p-3">
                        <label className="label">
                            <span className="label-text text-gray-400">Phone</span>
                        </label>
                        <input
                            type="text"
                            {...register('phone', {
                                required: 'Phone number is required',
                                pattern: {
                                    value: phoneRegex,
                                    message: 'Invalid phone number format',
                                },
                            })}
                            placeholder="Exp:+123456789012"
                            className="input input-bordered"
                        />
                        {errors.phone && (
                            <span className="text-red-500">{errors.phone.message}</span>
                        )}
                    </div>
                    <div className="form-control mx-3 p-3">
                        <input
                            type="submit"
                            className="btn text-md text-black bg-gray-500 hover:bg-gray-600"
                            value="Submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;
