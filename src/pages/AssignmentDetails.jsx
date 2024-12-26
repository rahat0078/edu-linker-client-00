import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AssignmentDetails = () => {

    const { id } = useParams();
    const [assignment, setAssignment] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/assignment/${id}`)
            .then((response) => {
                setAssignment(response.data);
            })
    }, [id]);

    console.log(assignment);

    return (
        <div className='container mx-auto'>
            {assignment ? (
                <div>
                    <div className="p-6 bg-white shadow-xl rounded-lg w-full max-w-2xl mx-auto my-12 border">
                        <h1 className="text-xl font-bold mb-4">{assignment.title}</h1>
                        <img
                            src={assignment.thumbnail}
                            alt="Thumbnail"
                            className="w-full h-64 object-cover rounded"
                        />
                        <p className="mt-4">{assignment.description}</p>
                        <p className="mt-2">
                            <strong>Marks:</strong> {assignment.marks}
                        </p>
                        <p className="my-2">
                            <strong>Difficulty:</strong> {assignment.difficulty}
                        </p>
                        <p >
                            <strong>Due Date:</strong> {new Date(assignment.dueDate).toLocaleDateString()}
                        </p>
                        <p className="my-2">
                            <strong>Created By:</strong>{assignment.createdBy.email}
                        </p>
                        <div className='flex justify-end'>
                            <button className='btn text-[16px] bg-[#4662B2] text-white hover:text-black font-semibold rounded-lg '>Take assignment</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading assignment details...</p>
            )}
        </div>
    );
};

export default AssignmentDetails;