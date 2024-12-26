import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const AssignmentDetails = () => {

    const { id } = useParams();
    const [assignment, setAssignment] = useState(null);
    const { user } = useAuth()


    useEffect(() => {
        axios
            .get(`http://localhost:5000/assignment/${id}`)
            .then((response) => {
                setAssignment(response.data);
            })
    }, [id]);


    const handleTakeAssignment = () => {
        document.getElementById('my_modal_5').showModal()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const googleDocsLink = formData.get("googleDocsLink");
        const quickNote = formData.get("quickNote");
        const examineeName = user?.displayName

        const submission = { googleDocsLink, quickNote, examineeName, }
        const assignment = {
            assignmentId: id,
            submission
        }


        axios.post(`http://localhost:5000/submit-assignment/${user?.email}`, assignment)
            .then(res => {
                if (res.data.data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: `${res.data.message}`,
                        icon: "success",
                        confirmButtonText: 'Done',
                        confirmButtonColor: "#4662B2",
                    });
                }
                form.reset()
                document.getElementById("my_modal_5").close()
            })
            .catch(err => {
                console.log(err.message);
            })

    }

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
                            <strong>Created By: </strong>{assignment.createdBy.name} | {assignment.createdBy.email}
                        </p>
                        <div className='flex justify-end'>
                            <button onClick={handleTakeAssignment} className='btn text-[16px] bg-[#4662B2] text-white hover:text-black font-semibold rounded-lg '>Take assignment</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading assignment details...</p>
            )}



            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-600 font-semibold text-[16px]">Google Docs Link</span>
                            </label>
                            <input type="text" name="googleDocsLink" placeholder="Google Docs Link" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-600 font-semibold text-[16px]">Quick Note</span>
                            </label>
                            <textarea name="quickNote" required className="textarea textarea-bordered" placeholder="Drop quickNote"></textarea>
                        </div>
                        <div className='flex justify-center mt-6'>
                            <input type='submit' value="Take" className='btn text-[16px] bg-[#4662B2] text-white hover:text-black font-semibold rounded-lg ' />
                            <button onClick={() => document.getElementById("my_modal_5").close()} className="btn ml-4">Close</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default AssignmentDetails;