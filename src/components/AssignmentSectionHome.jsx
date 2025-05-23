import axios from "axios";
import { useEffect, useState } from "react";
import { FaEye, FaLongArrowAltRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AssignmentSectionHome = () => {

    const [assignments, setAssignments] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://edu-linker-server.vercel.app/assignments')
            .then(res => {
                setAssignments(res.data)
            })
    }, []);

    return (
        <section className="section-design">
            <h3 className="title">Unlock Your Learning Potential</h3>
            <p className="description">Explore and complete your assignments effortlessly with our curated tasks. Dive into engaging challenges designed to boost your knowledge and skills!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                {assignments.slice(0, 8).map((assignment) => (
                    <div
                        key={assignment._id}
                        className="card card-compact bg-base-100 shadow-lg"
                    >

                        <figure className="h-60 overflow-hidden">
                            <img
                                src={assignment?.thumbnail}
                                alt={assignment.title}
                                className="w-full h-full object-cover"
                            />
                        </figure>


                        <div className="card-body">

                            <h2 className="card-title flex justify-between items-center">
                                {assignment.title}
                                <span
                                    className={`badge ${assignment?.difficulty === "easy"
                                        ? "badge-success"
                                        : assignment.difficulty === "medium"
                                            ? "badge-warning"
                                            : "badge-error"
                                        }`}
                                >
                                    {assignment?.difficulty}
                                </span>
                            </h2>


                            <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                                {assignment?.description.slice(0, 80)}....
                            </p>


                            <p className="font-semibold text-gray-500">
                                Marks: <span className="text-primary">{assignment?.marks}</span>
                            </p>
                            <p className="font-semibold text-gray-500">
                                Author: <span className='text-gray-500'>{assignment?.createdBy.email}</span>
                            </p>


                            <div className="flex justify-end">
                                <Link to={`/assignmentDetails/${assignment?._id}`} className="button-secondary flex justify-center items-center gap-2">
                                    <FaEye /> See More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => navigate('/assignments')} className="flex items-center gap-1 button-secondary"> See All Assignments <FaLongArrowAltRight /></button>
        </section>
    );
};

export default AssignmentSectionHome;