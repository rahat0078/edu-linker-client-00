import { useState } from "react";
import { FaEye, FaEyeSlash, } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)

    const { googleLogin, loginUser } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()



    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                toast.success('Login successfully!');
                location?.state ? navigate(location.state.from ) : navigate("/");
            })
            .catch((err) => {
                toast.error(`${err.message}`);
            })
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get("email");
        const password = formData.get("password");

        loginUser(email, password)
            .then(() => {
                toast.success('SignIn successfully!');
                location?.state ? navigate(location.state.from) : navigate("/");
                form.reset()
            })
            .catch(() => {
                toast.error(`Invalid email or password`)
            })


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
                        <button to="/auth/login" style={{borderRadius: "9999px"}} className="button-primary">Login</button>
                    </div>
                    <div className="divider">or</div>
                    <div>
                        <p onClick={handleGoogleLogin} className="border rounded-full flex justify-center items-center py-2 px-4 gap-3 hover:cursor-pointer">
                        <FcGoogle className="text-2xl "/>
                            <span className="text-[#115ca1] font-bold text-lg">Sign in With Google</span>
                        </p>
                    </div>
                    <p className="pt-2 flex justify-end">Don&apos;t have an account?<Link state={location.state} to="/signUp" className="text-[#4662B2] underline">SignUp </Link> </p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;