import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import loadingSpinner from '../assets/loading.gif';
import { Link } from "react-router-dom";


const MyAttemptedjAssignments = () => {

    const [assignments, setAssignments] = useState([])
    const { user } = useAuth()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://edu-linker-server.vercel.app/user-assignments/${user?.email}`, { withCredentials: true })
            .then(res => {
                setAssignments(res.data.data);
                setLoading(false)
            })
    }, [])




    if (loading) {
        return <>
            <div className='flex justify-center items-center min-h-screen'>
                <img src={loadingSpinner} alt="" />
            </div>
        </>
    }

    return (
        <main className="container mx-auto my-12">
            <h2 className="title mb-6">My Assignments</h2>
            {
                assignments.length > 0 ?
                    <section className="overflow-x-auto">
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
                                    <tr key={index} className="hover:bg-base-200">
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
                                        <td className="p-3">{assignment?.mark ? assignment?.mark : "Under Review"}</td>
                                        <td className="p-3">

                                            {assignment?.feedBack ? assignment?.feedBack : "Under Review"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section> 
                    : <>
                    <section className="min-h-[60vh] flex flex-col items-center gap-8">
                        <h3 className="text-4xl text-center font-bold text-orange-400">You didn't attempted any assignments</h3>
                        <Link to="/assignments" className="button-primary">Take assignment</Link>
                    </section>
                    </>
            }

        </main>
    );
};

export default MyAttemptedjAssignments;