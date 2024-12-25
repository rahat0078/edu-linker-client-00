import Lottie from "lottie-react";
import groupwork from '../assets/lottie/groupwork.json';

const Banner = () => {
    return (
        <div className="hero bg-base-200 py-20 rounded-lg my-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="ml-4">
                    <Lottie animationData={groupwork} loop={true} />
                </div>
                <div>
                    <h1 className="text-5xl font-bold leading-snug">Collaborate, Learn, and Grow Together!</h1>
                    <h2 className="py-6 text-xl text-gray-500">
                        Revolutionize group studies with seamless task management and peer grading.
                    </h2>
                    <div className="flex gap-4">
                        <button className="btn btn-outline border-[#4662B2] text-[16px] hover:bg-[#4662B2] font-semibold rounded-lg">Get Started for Free</button>
                        <button className="btn text-[16px] bg-[#4662B2] text-white hover:text-black font-semibold rounded-lg">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;