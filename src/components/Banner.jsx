import Lottie from "lottie-react";
import groupwork from '../assets/lottie/groupwork.json';
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
    return (
        <header className="hero bg-base-200 py-8 lg:py-12 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="ml-4 max-w-xs md:max-w-sm lg:max-w-lg">
                    <Lottie animationData={groupwork} loop={true} />
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold">Collaborate, Learn, and Grow Together!</h1>
                    <p className="py-4 text-lg text-gray-500">
                    Revolutionize your group studies with effortless task coordination, real-time collaboration, and peer-based grading — all in one platform.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link to='/assignments' className="button-secondary flex items-center gap-1">Get Started for Free <FaLongArrowAltRight />
                        </Link>
                        <a href="#features" className="button-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;