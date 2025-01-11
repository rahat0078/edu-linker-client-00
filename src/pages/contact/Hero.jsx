import contactImg from '../../assets/contact.jpg';

const Hero = () => {
    return (
        <div>
            <div className="hero bg-[#144273] pt-16">
                <div className="hero-content flex-col lg:flex-row container mx-auto px-6 md:px-0">
                    <div>
                        <h1 className="text-2xl md:text-5xl font-bold text-white">Get in Touch with Us</h1>
                        <p className="py-6 text-gray-300 max-w-lg">
                            Have questions or need support? Fill out the form below, and our team will get back to you shortly!
                        </p>

                    </div>
                    <div className='relative'>  
                        <img
                            src={contactImg}
                            className="max-w-sm w-full rounded-lg shadow-2xl" />
                        <div className='w-14 h-14 bg-[#1453ff98] absolute -bottom-2 right-7 z-10'></div>
                        <div className='w-14 h-14 bg-orange-400 rounded-full absolute -bottom-10 right-0'></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;