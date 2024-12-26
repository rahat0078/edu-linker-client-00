import { FiMenu } from "react-icons/fi";
import logo from '../assets/logo.png';
import { Link, NavLink } from "react-router-dom";
import useAuth from './../hooks/useAuth';
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";


const Navbar = () => {

    const { user, handleSignOut } = useAuth()
    
        const [theme, setTheme] = useState(
            localStorage.getItem("isDark") === "true" // Initialize from localStorage
        )

    // Apply the theme on mount and when theme changes
    useEffect(() => {
        if (theme) {
            document.documentElement.setAttribute("data-theme", "synthwave");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
        localStorage.setItem("isDark", theme); // Persist theme preference
    }, [theme]);

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
        {
            user?.email ? <NavLink to="/pendingAssignments"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#FD7441] text-lg font-semibold  p-2 rounded"
                        : "p-2 text-lg font-semibold hover:text-[#FD7441] hover:underline"
                }>
                Pending assignments
            </NavLink> : ""
        }
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




                    <label className="swap swap-rotate">
                        {/* Checkbox to toggle theme */}
                        <input
                            type="checkbox"
                            checked={theme}
                            onChange={() => setTheme(!theme)}
                        />

                        {/* Sun Icon */}
                        <FaSun className="swap-off h-10 w-10 fill-current text-yellow-500" />

                        {/* Moon Icon */}
                        <FaMoon className="swap-on h-10 w-10 fill-current text-blue-500" />
                    </label>



                    {
                        user?.email ?

                            <>
                                <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                                    <div tabIndex={0} role="button" className="m-1">
                                        <div className="w-14 h-14">
                                            <img
                                                className="rounded-full w-full h-full"
                                                alt="User Profile"
                                                src={user?.photoURL}
                                            />
                                        </div>
                                    </div>
                                    <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        <li className="text-center text-lg font-semibold">{user?.displayName}</li>
                                        <li><Link to='/createAssignment'>Create Assignment</Link></li>
                                        <li><Link to="/myAttemptedAssignment">My Attempted Assignments</Link></li>
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
