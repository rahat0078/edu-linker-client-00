import { FaTasks, FaChalkboardTeacher, FaChartLine, FaAward } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaTasks size={30} className="text-orange-500" />,
      title: "Effortless Assignment Management",
      description: "Create and assign tasks with ease. Track progress and stay organized.",
      backgroundColor: "bg-[#F0F8FF]", 
    },
    {
      icon: <FaChalkboardTeacher size={30} className="text-blue-500" />,
      title: "Peer Grading System",
      description: "Grade assignments collaboratively and receive constructive feedback.",
      backgroundColor: "bg-[#E0F7FA]",
    },
    {
      icon: <FaChartLine size={30} className="text-green-500" />,
      title: "Progress Tracking",
      description: "Monitor your achievements and stay motivated with progress trackers.",
      backgroundColor: " bg-[#E2F2F1]", 
    },
    {
      icon: <FaAward size={30} className="text-yellow-500" />,
      title: "Gamified Learning",
      description: "Earn rewards and badges as you complete tasks and participate actively.",
      backgroundColor: "bg-[#FFF7E6]", 
    },
  ];

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6
        ">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 ${feature.backgroundColor} shadow hover:scale-105 duration-300 ease-in-out rounded-xl`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
