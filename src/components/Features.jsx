import { FaTasks, FaChalkboardTeacher, FaChartLine, FaAward } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaTasks size={30} className="text-orange-500" />,
      title: "Effortless Assignment Management",
      description: "Create and assign tasks with ease. Track progress and stay organized.",
      backgroundColor: "bg-[#f0f8f150]", 
    },
    {
      icon: <FaChalkboardTeacher size={30} className="text-blue-500" />,
      title: "Peer Grading System",
      description: "Grade assignments collaboratively and receive constructive feedback.",
      backgroundColor: "bg-[#e0f7f150]",
    },
    {
      icon: <FaChartLine size={30} className="text-green-500" />,
      title: "Progress Tracking",
      description: "Monitor your achievements and stay motivated with progress trackers.",
      backgroundColor: "bg-[#e6edf150]", 
    },
    {
      icon: <FaAward size={30} className="text-yellow-500" />,
      title: "Gamified Learning",
      description: "Earn rewards and badges as you complete tasks and participate actively.",
      backgroundColor: "bg-[#fff7e150]", 
    },
  ];

  return (
    <section id="features" className="section-design">
      <div className="container mx-auto ">
        <h2 className="title">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4 pt-8
        ">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`md:p-6 p-4 ${feature.backgroundColor} shadow-lg hover:scale-105 duration-300 ease-in-out rounded-xl`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
