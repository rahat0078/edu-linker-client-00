import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import loadingSpinner from '../assets/loading.gif';

const AssignmentDetails = () => {

    const { id } = useParams();
    const [assignment, setAssignment] = useState(null);
    const [loading, setLoading] = useState(true)
    const { user } = useAuth()
    const title = assignment?.title;
    const marks = assignment?.marks;
    const navigate = useNavigate()
    const location = useLocation()



    console.log(user);



    useEffect(() => {
        axios
            .get(`https://edu-linker-server.vercel.app/assignment/${id}`)
            .then((response) => {
                setAssignment(response.data);
                setLoading(false)
            })
    }, [id]);


    const handleTakeAssignment = () => {
        if (user == null) {
            return navigate('/signIn', { state: { from: location.pathname } })
        }
        else {
            document.getElementById('my_modal_5').showModal()
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const googleDocsLink = formData.get("googleDocsLink");
        const quickNote = formData.get("quickNote");
        const examineeName = user?.displayName;


        const submission = { googleDocsLink, quickNote, examineeName, }
        const assignment = {
            assignmentId: id,
            submission
        }


        axios.post(`https://edu-linker-server.vercel.app/submit-assignment/${user?.email}`, assignment, { withCredentials: true })
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

    if (loading) {
        return <>
            <div className='flex justify-center items-center min-h-screen'>
                <img src={loadingSpinner} alt="" />
            </div>
        </>
    }

    return (
        <div className='container mx-auto'>
            {assignment ? (
                <div>
                    <div className="p-6 bg-base-100 shadow-md rounded-lg w-full max-w-2xl mx-auto my-12">
                        <h1 className="text-xl font-bold mb-4">{assignment.title}</h1>
                        <img
                            src={assignment.thumbnail}
                            alt={assignment.title}
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
                            <button onClick={handleTakeAssignment} className='button-primary'>Take assignment</button>
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
                                <span className="label-text text-gray-500 font-semibold text-[16px]">Google Docs Link</span>
                            </label>
                            <input type="text" name="googleDocsLink" placeholder="Google Docs Link" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-500 font-semibold text-[16px]">Quick Note</span>
                            </label>
                            <textarea name="quickNote" required className="textarea textarea-bordered" placeholder="Drop quickNote"></textarea>
                        </div>
                        <div className='flex justify-center mt-6'>
                            <input type='submit' value="Take" className='button-primary' />
                            <p onClick={() => document.getElementById("my_modal_5").close()} className="button-secondary ml-4">Close</p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default AssignmentDetails;