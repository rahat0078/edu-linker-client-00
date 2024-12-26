import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';


const MyAttemptedjAssignments = () => {

    const [assignments, setAssignments] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        axios.get(`http://localhost:5000/user-assignments/${user?.email}` , {withCredentials: true})
            .then(res => {
                setAssignments(res.data.data);
            })
    }, [])

    console.log(assignments)

    return (
        <div className="container mx-auto my-12">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">My Assignments</h2>

            <div className="overflow-x-auto">
                <table className="table w-full border-collapse">
                    <thead>
                        <tr className="bg-[#4662B2] text-white">
                            <th className="p-3">Title</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Total Marks</th>
                            <th className="p-3">Obtained Marks</th>
                            <th className="p-3">Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments.map((assignment, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="p-3">{assignment?.assignmentDetails[0].title}</td>
                                <td className="p-3">
                                    {assignment?.status === "completed" ? (
                                        <span className="badge badge-success">
                                            <FaCheckCircle className="inline mr-1" /> Completed
                                        </span>
                                    ) : (
                                        <span className="badge badge-warning">
                                            <FaTimesCircle className="inline mr-1" /> Pending
                                        </span>
                                    )}
                                </td>
                                <td className="p-3">{assignment?.assignmentDetails[0].marks}</td>
                                <td className="p-3">{assignment?.mark?assignment?.mark:"Under Review"}</td>
                                <td className="p-3">
                                    
                                        {assignment?.feedBack ? assignment?.feedBack :"Under Review"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAttemptedjAssignments;