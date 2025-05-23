import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa'; // React icon for the "Give Mark" button
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import loadingSpinner from '../assets/loading.gif';
import { flushSync } from "react-dom";


const PendingAssignments = () => {
    const { user } = useAuth();
    const [reload, setReload] = useState(false);
    const [pendingAssignments, setpendingAssignments] = useState();
    const [assignmentInfo, setassignmentInfo] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("https://edu-linker-server.vercel.app/pending-assignments", { withCredentials: true })
            .then(res => {
                setpendingAssignments(res?.data?.data)
                setReload(false);
                setLoading(false)
            })
    }, [reload])

    
    const handlegivemark = (dt) => {
        document.getElementById('my_modal_6').showModal()
        setassignmentInfo(dt)
    }

    const handleGiveMarkSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);

        const mark = formData.get("mark");
        const feedBack = formData.get("feedback");

        // post data
        axios.patch(`https://edu-linker-server.vercel.app/assgnment-mark/${user?.email}/${assignmentInfo?._id}`, {
            mark, feedBack
        }, { withCredentials: true })
            .then(res => {
                if (res.data.success) {
                    Swal.fire({
                        title: "Success!",
                        text: "Assignment Marked successfully",
                        icon: "success",
                        confirmButtonText: 'Done',
                        confirmButtonColor: "#4662B2",
                    });
                    setReload(true);
                    document.getElementById("my_modal_6").close()
                    form.reset()
                }
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
        <section className="container mx-auto section-design mb-12">
            <h2 className="title mb-6">Submitted Assignments</h2>
            <div className="overflow-x-auto">
                <table className="table w-full table-zebra">
                    {/* Table Header */}
                    <thead>
                        <tr>
                            <th className="text-center">Assignment Title</th>
                            <th className="text-center">Assignment Marks</th>
                            <th className="text-center">Examinee Name</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Mapping through the assignments */}
                        {pendingAssignments?.map((assignment) => (
                            <tr key={assignment._id}>
                                <td className="text-center">{assignment?.assignmentDetails[0]?.title}</td>
                                <td className="text-center">{assignment?.assignmentDetails[0]?.marks}</td>
                                <td className="text-center">{assignment?.submission.examineeName}</td>

                                <td className="text-center flex justify-center items-center">
                                    {/* Button to "Give Mark" */}
                                    <button
                                        onClick={() => handlegivemark(assignment)}
                                        className="button-primary flex items-center gap-1"
                                    >
                                        <FaStar />
                                        Give Mark
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <form onSubmit={handleGiveMarkSubmit}>
                            <h2>Submitted Info</h2>
                            <div>
                                <span className="text-lg font-semibold">Google Doc Link: </span>
                                <a className="hover:text-blue-500 underline" href={assignmentInfo?.submission?.googleDocsLink}>{assignmentInfo?.submission?.googleDocsLink}</a>

                                <br />
                                <span className="text-lg font-semibold">Exameen Note:</span>
                                <p className="text-gray-500">
                                    {
                                        assignmentInfo?.submission?.quickNote
                                    }
                                </p>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500 font-semibold text-[16px]">Give Mark</span>
                                </label>
                                <input type="number" name="mark" placeholder="Give Mark" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500 font-semibold text-[16px]">feedback </span>
                                </label>
                                <input type="text" name="feedback" placeholder="Give Mark" className="input input-bordered" required />
                            </div>
                            <div className='flex justify-center mt-6'>
                                <input type='submit' value="Give" className='button-primary' />
                                <button onClick={() => document.getElementById("my_modal_6").close()} className="button-secondary ml-4">Close</button>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </section>
    );
};

export default PendingAssignments;