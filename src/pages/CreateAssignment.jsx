import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";


const CreateAssignment = () => {

  const { user } = useAuth()

  const [startDate, setStartDate] = useState(new Date());



  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const title = formData.get("title");
    const description = formData.get("description");
    const marks = formData.get("marks");
    const thumbnail = formData.get("thumbnail");
    const difficulty = formData.get("difficulty");
    const dueDate = startDate
    const createdBy = {
      name: user?.displayName,
      email: user?.email,
    }

    const assignment = {
      title, description, marks, thumbnail, difficulty, dueDate, createdBy
    }


    axios.post('http://localhost:5000/create-assignment', assignment, {withCredentials: true})
      .then(data => {

        if (data.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Assignment created successfully",
            icon: "success",
            confirmButtonText: 'Done',
            confirmButtonColor: "#4662B2",
          });
        }
        form.reset()
      })





  };

  return (
    <div className="container mx-auto my-12">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto shadow-md rounded-lg p-8 space-y-2 border-t-2 border-t-[#4662B2]">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Create Assignment
        </h2>

        {/* TITLE  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 font-semibold text-[16px]">Title</span>
          </label>
          <input type="title" name="title" placeholder="Enter assignment title" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 font-semibold text-[16px]">Description</span>
          </label>
          <textarea name="description" required className="textarea textarea-bordered" placeholder="Enter assignment description"></textarea>
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 font-semibold text-[16px]">Marks</span>
          </label>
          <input type="number" name="marks" placeholder="Enter total marks" className="input input-bordered" required />
        </div>

        {/* Thumbnail URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 font-semibold text-[16px]">Thumbnail Image URL</span>
          </label>
          <input type="text" name="thumbnail" placeholder="Enter image URL" className="input input-bordered" required />
        </div>


        <div className="flex gap-4 justify-between pb-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-gray-600 font-semibold text-[16px]">Difficulty Level</span>
            </label>
            <select name="difficulty" required className="select select-bordered w-full">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>


          <div className="form-control w-full">
            <label className="label">

              <span className="label-text text-gray-600 font-semibold text-[16px]">Due Date</span>
            </label>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="border text-start py-3 pl-3 rounded-lg " />

          </div>
        </div>


        <button
          type="submit"
          className="btn btn-primary w-full mt-4 bg-[#4662B2] hover:bg-[#FD7441] text-white font-semibold"
        >
          Create Assignment
        </button>
      </form>
    </div>
  );
};

export default CreateAssignment;