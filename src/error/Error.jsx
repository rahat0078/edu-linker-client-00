import { Link } from 'react-router-dom';
import error from '../assets/404.gif';
import { FaHome } from 'react-icons/fa';

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <img src={error} alt="" />
            <Link to="/" className='btn bg-[#4662B2] hover:bg-[#4662B2] text-white'>Back to home <FaHome/>    </Link>
        </div>
    );
};

export default Error;