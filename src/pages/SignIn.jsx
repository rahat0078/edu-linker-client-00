import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get("email");
        const password = formData.get("password");

        console.log({ email, password});
    }

    return (
        <div className="py-16 flex justify-center items-center">
            <div className="card w-full max-w-lg  shrink-0 shadow-xl border-t-2 border-t-[#4662B2]  my-12">
                <h3 className="text-center mt-6 text-4xl font-bold text-[#4662B2]">SignIn Now!</h3>
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered rounded-full" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name='password' placeholder="Enter Password" className="input input-bordered rounded-full" required />
                        <p
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute right-4 bottom-4'>
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye></FaEye>
                            }
                        </p>
                    </div>
                    <div className="form-control mt-6">
                        <button to="/auth/login" className="btn bg-[#4662B2] border-none rounded-full text-white hover:bg-[#4662B2] text-lg">Login</button>
                    </div>
                    <div className="divider">or</div>
                    <div>
                        <p className="flex items-center gap-4 text-[#FD7E14] hover:text-[#4662B2] border p-3 bg-white w-full justify-center cursor-pointer rounded-full">
                            <FaGoogle></FaGoogle>
                            <span className="text-xl font-bold ">Login With Google</span>
                        </p>
                    </div>
                    <p className="pt-2 flex justify-end">Don&apos;t have an account?<Link state={location.state} to="/signUp" className="text-[#4662B2] underline">SignUp </Link> </p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;