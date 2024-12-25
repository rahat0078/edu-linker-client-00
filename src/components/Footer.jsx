import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content p-10">
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <div className='flex gap-12'>
                    <nav className='flex flex-col gap-4'>
                        <h6 className="footer-title">Company</h6>
                        <Link to='/' className="link link-hover">Home</Link>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav className='flex flex-col gap-4'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <div className=''>
                        <h4 className='text-lg text-gray-600 font-semibold text-start pb-4'>Drop a message</h4>
                        <div className='flex'>
                            <input type="text" placeholder="Type here" className="input rounded-r-none w-full max-w-xs" />
                            <button className='btn bg-[#4662B2] rounded-r-lg text-[16px] hover:bg-[#4662B2] text-white rounded-none font-semibold'>Send</button>
                        </div>
                    </div>
                </div>

            </div>
            <p>&copy; 2024 EduLinker. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;