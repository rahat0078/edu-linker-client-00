import { FiMenu } from "react-icons/fi";
import logo from '../assets/logo.png';
import { Link, NavLink } from "react-router-dom";
import useAuth from './../hooks/useAuth';
import { FaArrowRightToBracket } from "react-icons/fa6";


const Navbar = () => {

    const { user, handleSignOut } = useAuth()
    console.log(user);

    const handleSignOutBtn = () => {
        handleSignOut()
    }


    const links = <>
        <NavLink to="/"
            className={({ isActive }) =>
                isActive
                    ? "text-[#FD7441] text-lg font-semibold  p-2 rounded"
                    : "p-2 text-lg font-semibold hover:text-[#FD7441] hover:underline"
            }>
            Home
        </NavLink>
        <NavLink to="/assignments"
            className={({ isActive }) =>
                isActive
                    ? "text-[#FD7441] text-lg font-semibold  p-2 rounded"
                    : "p-2 text-lg font-semibold hover:text-[#FD7441] hover:underline"
            }>
            Assignments
        </NavLink>
    </>;

    return (
        <div className="bg-base-100 sticky top-0 z-50">
            <div className="navbar container mx-auto py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FiMenu />
                        </div>
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow`}>
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="cursor-pointer flex items-center gap-2 p-2 rounded border">
                        <img className="sm:w-10 w-6 h-full" src={logo} alt="" />
                        <a className="md:text-xl text-[18px] font-bold">EduLinker</a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul
                        className={`menu menu-horizontal px-1 gap-1 items-center`}>
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    {
                        user?.email ?

                            <>
                                <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                                    <div tabIndex={0} role="button" className="m-1">
                                        <img
                                            className="rounded-full w-14"
                                            alt="User Profile"
                                            src={user?.photoURL}
                                        />
                                    </div>
                                    <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        <li className="text-center text-lg font-semibold">{user?.displayName}</li>
                                        <li><Link>Create Assignment</Link></li>
                                        <li><Link>My Attempted Assignments</Link></li>
                                        <li onClick={handleSignOutBtn} className="text-[#4662B2] text-[16px] font-semibold"><a href=""><FaArrowRightToBracket />
                                        Logout</a></li>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <Link to="/signUp" className="btn text-[16px] rounded-lg">SignUp</Link>
                                <Link to="/signIn" className="btn bg-[#FD7441] text-[16px] hover:bg-[#4662B2] text-white font-semibold rounded-lg">SignIn</Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;
