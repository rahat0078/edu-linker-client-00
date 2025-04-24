import { FaEnvelope, FaPhone } from "react-icons/fa";

const SupportTeam = () => {
    const teamMembers = [
        {
            name: "Sarah Parker",
            role: "Support Specialist",
            bio: "Helping students succeed with Edulinker since 2024.",
            email: "sarah@edulinker.com",
            phone: "+123-456-7890",
            image: "https://i.ibb.co.com/NCM9yGt/1.jpg",
        },
        {
            name: "John Doe",
            role: "Technical Expert",
            bio: "Ensuring a seamless experience for all our users.",
            email: "john@edulinker.com",
            phone: "+123-456-7891",
            image: "https://i.ibb.co.com/C124GyT/2.jpg",
        },
        {
            name: "Alice Smith",
            role: "Customer Support Manager",
            bio: "Passionate about delivering excellent service and resolving customer inquiries.",
            email: "alice@edulinker.com",
            phone: "+123-456-7892",
            image: "https://i.ibb.co.com/7zMpmbj/3.jpg",
        }
    ];

    return (
        <section className="section-design mb-12">
            <div className="container mx-auto">
                <h2 className="title">Meet Our Support Team</h2>
                <p className="description">
                    Our dedicated team is here to ensure your experience with Edulinker is smooth and productive.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="card shadow-xl bg-base-300 p-6">
                            <div className="flex items-center mb-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full border-2 border-primary"
                                />
                                <div className="ml-4">
                                    <h3 className="text-xl font-semibold">{member.name}</h3>
                                    <p className="text-sm text-gray-500">{member.role}</p>
                                </div>
                            </div>
                            <p className="text-lg mb-4">{member.bio}</p>

                            <p
                                className="text-[#4662B2] hover:text-blue-600"
                            >
                                <FaEnvelope className="inline-block mr-2" />
                                {member.email}
                            </p>

                            <p

                                className="text-[#4662B2] hover:text-blue-600 mt-2"
                            >
                                <FaPhone className="inline-block mr-2" />
                                {member.phone}

                            </p>


                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SupportTeam;
