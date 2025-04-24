import axios from 'axios';
import { FaEdit, FaEye, FaSearch, FaTrashAlt } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import loadingSpinner from '../assets/loading.gif';

const Assignments = () => {
    const [assignments, setAssignments] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useAuth()
    const navigate = useNavigate()
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState("")


    useEffect(() => {
        axios.get(`https://edu-linker-server.vercel.app/assignments?filter=${filter === "All" ? "" : filter}&search=${search}`, { withCredentials: true })
            .then(res => {
                setAssignments(res.data)
                setLoading(false)
            })
    }, [filter, search])



    const handleDelete = (id) => {

        if (!user) {
            return navigate('/signIn')
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#115ca1",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://edu-linker-server.vercel.app/delete-assignment/${user.email}/${id}`, { withCredentials: true })
                    .then((response) => {
                        if (response.data.success) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `${response.data.message}`,
                                icon: "success"
                            });
                            const remaining = assignments.filter(a => a._id !== id)
                            setAssignments(remaining)
                        }
                        if (response.data.success === false) {
                            Swal.fire({
                                title: "Error!",
                                text: `${response.data.message}`,
                                icon: "error"
                            });
                        }

                    })
                    .catch((error) => {
                        console.error("Error deleting assignment:", error.message);
                    });
            }
        });
    }


    if (loading) {
        return <>
            <div className='flex justify-center items-center min-h-screen'>
                <img src={loadingSpinner} alt="" />
            </div>
        </>
    }


    return (
        <main className='container mx-auto section-design'>
            <h2 className='title'>Collaborate and Learn Together</h2>
            <p style={{ paddingBottom: "16px" }} className='description border-b'>Explore all assignments created by your peers. Stay on top of your learning journey by engaging with tasks, completing challenges, and reviewing the work of others. Collaborate, grow, and excel as a community!</p>
            <section>
                <div className='my-8 flex justify-center items-center flex-wrap gap-4'>

                    <div className="relative w-full max-w-xs">
                        <input
                            onChange={e => setSearch(e.target.value)}
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-full pr-[40px]"
                        />
                        <button className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500">
                            <FaSearch />
                        </button>
                    </div>

                    <select onChange={e => setFilter(e.target.value)} placeholder="Filter" className="select select-bordered w-full max-w-xs">
                        <option>All</option>
                        <option>easy</option>
                        <option>medium</option>
                        <option>hard</option>
                    </select>

                </div>
            </section>
            <div className='mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 md:px-0'>
                {assignments.map((assignment) => (
                    <div key={assignment._id} className="card card-compact bg-base-100 shadow-lg hover:scale-105 duration-300 ease-in-out cursor-pointer">

                        <figure className="h-60 overflow-hidden">
                            <img
                                src={assignment.thumbnail}
                                alt={assignment.title}
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


                            <p className="text-gray-400 text-sm mb-2 line-clamp-2">
                                {assignment.description.slice(0, 80)}....
                            </p>


                            <p className="font-semibold text-gray-500">
                                Marks: <span className="text-primary">{assignment.marks}</span>
                            </p>
                            <p className="font-semibold text-gray-500">
                                Author: <span className='text-gray-500'>{assignment.createdBy.email}</span>
                            </p>


                            <div className="flex justify-between mt-4">
                                <Link to={`/assignmentDetails/${assignment._id}`} className="button-secondary flex items-center text-blue-600">
                                    <FaEye className="mr-1" /> View
                                </Link>
                                <Link to={`/update/${assignment._id}`} className="button-secondary flex items-center text-yellow-500">
                                    <FaEdit className="mr-1" /> Update
                                </Link>
                                <button onClick={() => handleDelete(assignment._id)} className="button-secondary flex items-center text-red-600">
                                    <FaTrashAlt className="mr-1" /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Assignments;