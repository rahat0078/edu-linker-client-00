import error from '../assets/404.gif';

const Error = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <img src={error} alt="" />
        </div>
    );
};

export default Error;