import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Assignments = () => {

    const [assignments, setAssignments] = useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/assignments',)
            .then(data => {
                setAssignments(data.data)
            })
    }, [setAssignments])


    console.log(assignments);


    return (
        <div className='container mx-auto'>
            <div className='text-center my-12'>
                <h2 className='text-3xl font-semibold'>Collaborate and Learn Together</h2>
                <p className='text-gray-500 w-full max-w-3xl mx-auto py-6 border-b'>Explore all assignments created by your peers. Stay on top of your learning journey by engaging with tasks, completing challenges, and reviewing the work of others. Collaborate, grow, and excel as a community!</p>
            </div>
            <div className='mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 md:px-0'>
                {assignments.map((assignment) => (
                    <div
                        key={assignment._id}
                        className="card card-compact bg-base-100 shadow-lg hover:scale-105 duration-300 ease-in-out cursor-pointer"
                    >
                        
                        <figure className="h-60 overflow-hidden">
                            <img
                                src={assignment.thumbnail}
                                alt="thumbnail"
                                className="w-full h-full object-cover"
                            />
                        </figure>

                       
                        <div className="card-body">
                            
                            <h2 className="card-title flex justify-between items-center">
                                {assignment.title}
                                <span
                                    className={`badge ${assignment.difficulty === "easy"
                                            ? "badge-success"
                                            : assignment.difficulty === "medium"
                                                ? "badge-warning"
                                                : "badge-error"
                                        }`}
                                >
                                    {assignment.difficulty}
                                </span>
                            </h2>

                            
                            <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                                {assignment.description.slice(0,80)}....
                            </p>

                            
                            <p className="font-semibold text-gray-700">
                                Marks: <span className="text-primary">{assignment.marks}</span>
                            </p>

                           
                            <div className="flex justify-between mt-4">
                                <Link to={`/assignmentDetails/${assignment._id}`} className="btn btn-sm btn-outline text-blue-600">
                                    <FaEye className="mr-2" /> View
                                </Link>
                                <button className="btn btn-sm btn-outline text-yellow-500">
                                    <FaEdit className="mr-2" /> Update
                                </button>
                                <button className="btn btn-sm btn-outline text-red-600">
                                    <FaTrashAlt className="mr-2" /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Assignments;