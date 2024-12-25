import { Link, } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const SignUp = () => {

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const name = formData.get("name");
        const email = formData.get("email");
        const photo = formData.get("photo");
        const password = formData.get("password");

        console.log({name, email, photo, password});
    }

    return (
        <div className="py-16 flex justify-center items-center">
            <div className="card w-full max-w-lg  shrink-0 shadow-xl border-t-2 border-t-[#4662B2] my-12">
                <h3 className="text-center mt-6 text-4xl font-bold text-[#4662B2] ">Register Now !</h3>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered rounded-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered rounded-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter PhotoURL" className="input input-bordered rounded-full" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name='password' placeholder="Enter Password" className="input input-bordered rounded-full" required />

                    </div>
                    <div className="form-control mt-6">
                        <button to="/auth/login" className="btn bg-[#4662B2] border-none rounded-full text-white hover:bg-[#4662B2] text-lg">SignUp</button>
                    </div>
                    <div className="divider">or</div>

                    <div>
                        <p className="flex items-center gap-4 border p-3  text-[#FD7E14] hover:text-[#4662B2] w-full justify-center rounded-full cursor-pointer">
                            <FaGoogle></FaGoogle>
                            <span className="text-xl font-semibold">SignIn With Google</span>
                        </p>
                    </div>
                    <p className="pt-2 flex justify-end">Already have an account?  <span><Link to="/signIn" className="text-[#4662B2] underline">Login</Link></span> </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;