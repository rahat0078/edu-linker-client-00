import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import toast from 'react-hot-toast';

const Footer = () => {

    const handleSend = e => {
        e.preventDefault()
        const message = e.target.message.value;
        if (!message) {
            return toast.error('Please write something');
        } else {
            toast.success('Thank you! Your message dropped')
        }
        console.log(message);

        e.target.reset()
    }

    return (
        <footer className="footer footer-center bg-base-200 text-base-content p-10">
            <div>
                <img className='w-40 h-40' src={logo} alt="" />
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='flex gap-12 justify-center'>
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
                    </div>
                    <div className=''>
                        <h4 className='text-lg text-gray-500 font-semibold text-start pb-4'>Drop a message</h4>
                        <form onSubmit={handleSend} className='flex'>
                            <input type="text" name='message' placeholder="Type here" className="input rounded-r-none w-full max-w-xs" />
                            <input type='submit' value='Send' className='bg-[#115ca1] text-white font-semibold px-4 py-2  hover:bg-[#104272] transition duration-200 rounded-r-lg rounded-none' />
                        </form>
                    </div>
                </div>
            </div>
            <p>&copy; 2024 EduLinker. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;