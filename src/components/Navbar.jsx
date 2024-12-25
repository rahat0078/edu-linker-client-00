import { FiMenu } from "react-icons/fi";
import logo from '../assets/logo.png';
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {


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
                    <Link to="/signUp" className="btn text-[16px] rounded-lg">SignUp</Link>
                    <Link to="/signIn" className="btn bg-[#FD7441] text-[16px] hover:bg-[#4662B2] text-white font-semibold rounded-lg">SignIn</Link>
                    {/* {
                        user?.email ?
                            <div className="dropdown dropdown-end group">
                                <div tabIndex={0} role="button" className="btn w-14 btn-ghost btn-circle avatar">
                                    <div className="w-full rounded-full">
                                        <img
                                            alt="User Profile"
                                            src={user?.photoURL}
                                        />
                                    </div>
                                </div>
                                <div
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 p-4 rounded-lg z-[1] mt-3 w-52 shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <p className="text-xl font-semibold text-orange-500 mb-4">{user?.displayName}</p>
                                    <button onClick={handleLogout} className="btn bg-[#28A745] hover:bg-[#37b855] text-white w-full">Logout</button>
                                </div>
                            </div>
                            :
                            <>
                                <Link to="/auth/login" className="bg-[#28A745] hover:bg-[#37b855] text-white px-4 py-2 font-semibold rounded-md">Login</Link>
                                <Link to="/auth/register" className="bg-[#28A745] hover:bg-[#37b855] text-white px-4 py-2 font-semibold rounded-md hidden sm:block">Register</Link>
                            </>
                    } */}

                </div>
            </div>
        </div>
    );
};

export default Navbar;
