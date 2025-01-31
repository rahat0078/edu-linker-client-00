import Lottie from "lottie-react";
import groupwork from '../assets/lottie/groupwork.json';
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero bg-base-200 py-8 lg:py-12 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="ml-4 max-w-xs md:max-w-sm lg:max-w-lg">
                    <Lottie animationData={groupwork} loop={true} />
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-snug">Collaborate, Learn, and Grow Together!</h1>
                    <h2 className="py-4 text-lg text-gray-500">
                        Revolutionize group studies with seamless task management and peer grading.
                    </h2>
                    <div className="flex gap-4">
                        <Link to='/assignments' className="btn btn-outline border-[#4662B2] text-[16px] hover:bg-[#4662B2] font-semibold rounded-lg">Get Started for Free</Link>
                        <a href="#features" className="btn text-[16px] bg-[#4662B2] text-white hover:text-black font-semibold rounded-lg">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;