import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const AssignmentSectionHome = () => {

    const [assignments, setAssignments] = useState([])

    useEffect(() => {
        axios.get('https://edu-linker-server.vercel.app/assignments')
            .then(res => {
                setAssignments(res.data)
            })
    }, [])


    return (
        <div className="mt-16 px-6 md:px-0">
            <div className="text-center">
                <h3 className="text-2xl md:text-4xl font-semibold">Unlock Your Learning Potential</h3>
                <p className="text-gray-500 max-w-2xl mx-auto pt-4">Explore and complete your assignments effortlessly with our curated tasks. Dive into engaging challenges designed to boost your knowledge and skills!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
                {assignments.slice(0,8).map((assignment) => (
                    <div
                        key={assignment._id}
                        className="card card-compact bg-base-100 shadow-lg"
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
                                {assignment.description.slice(0, 80)}....
                            </p>


                            <p className="font-semibold text-gray-700">
                                Marks: <span className="text-primary">{assignment.marks}</span>
                            </p>
                            <p className="font-semibold text-gray-700">
                                Author: <span className='text-gray-500'>{assignment.createdBy.email}</span>
                            </p>


                            <div className="flex justify-end gap-2 mt-4">
                                <Link to={`/assignmentDetails/${assignment._id}`} className="btn btn-sm btn-outline text-blue-600">
                                    <FaEye /> See More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link to='/assignments' className="flex items-center w-52 btn text-[16px] bg-[#4662B2] text-white hover:text-black font-semibold"> See All Assignments <FaArrowRight/></Link>
        </div>
    );
};

export default AssignmentSectionHome;