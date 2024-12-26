import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa'; // React icon for the "Give Mark" button
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const PendingAssignments = () => {
    const { user } = useAuth();
    const [reload,setReload] = useState(false);
    const [pendingAssignments, setpendingAssignments] = useState();
    const [assignmentInfo, setassignmentInfo] = useState();

    useEffect(() => {
        axios.get("http://localhost:5000/pending-assignments",  {withCredentials: true})
            .then(res =>{
                 setpendingAssignments(res?.data?.data)
                setReload(false);
                })
    }, [reload])
    console.log(pendingAssignments);

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
        axios.patch(`http://localhost:5000/assgnment-mark/${user?.email}/${assignmentInfo?._id}`, {
            mark, feedBack
        }, {withCredentials: true})
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
                }
            })
    }

    return (
        <div className="container mx-auto my-12">
            <h2 className="text-3xl font-semibold text-center mb-6">Submitted Assignments</h2>
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
                                        className="btn text-[16px] bg-[#4662B2] text-white hover:text-black font-semibold rounded-lg flex items-center gap-2"
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
                                <span>Google Doc Link</span>
                                <a className="hover:text-blue-500" href={assignmentInfo?.submission?.googleDocsLink}>{assignmentInfo?.submission?.googleDocsLink}</a>


                                <span>Exameen Note</span>
                                <p>
                                    {
                                        assignmentInfo?.submission?.quickNote
                                    }
                                </p>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-600 font-semibold text-[16px]">Give Mark</span>
                                </label>
                                <input type="number" name="mark" placeholder="Give Mark" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-600 font-semibold text-[16px]">feedback </span>
                                </label>
                                <input type="text" name="feedback" placeholder="Give Mark" className="input input-bordered" required />
                            </div>
                            <div className='flex justify-center mt-6'>
                                <input type='submit' value="Give" className='btn text-[16px] bg-[#4662B2] text-white hover:text-black font-semibold rounded-lg ' />
                                <button onClick={() => document.getElementById("my_modal_6").close()} className="btn ml-4">Close</button>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default PendingAssignments;