import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";


const ContInfo = () => {
    return (
        <div className="my-16">
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-6">Contact Information</h2>
                    <p className="text-center text-gray-600 mb-10">
                        We’re here to help! Reach out to us through any of the channels below.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Email */}
                        <div className="card shadow-lg bg-white p-6 text-center">
                            <FaEnvelope className="text-[#4662B2] text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                            <p className="text-gray-600 mb-4">support@edulinker.com</p>
                            <a
                                href="mailto:support@edulinker.com"
                                className="btn btn-primary btn-sm"
                            >
                                Send an Email
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="card shadow-lg bg-white p-6 text-center">
                            <FaPhone className="text-[#4662B2] text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                            <p className="text-gray-600 mb-4">+123-456-7890</p>
                            <a
                                href="tel:+1234567890"
                                className="btn btn-primary btn-sm"
                            >
                                Call Now
                            </a>
                        </div>

                        {/* Address */}
                        <div className="md:col-span-2 col-span-1 flex justify-between shadow-lg bg-white">
                            <div className=" p-6 text-center">
                                <FaMapMarkerAlt className="text-[#4662B2] text-4xl mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                                <p className="text-gray-600 mb-4">
                                    123 Edulinker Lane, Education City, Country
                                </p>
                                <a
                                    target="_blank"
                                    href="https://maps.app.goo.gl/W5ebxHmcapnJYbwP7"
                                    className="btn btn-primary btn-sm w-full"
                                >
                                    View on Map
                                </a>
                            </div>
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.97311706415!2d90.3371167693569!3d23.7808185444538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1736578741368!5m2!1sen!2sbd" className="h-full w-full"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContInfo;