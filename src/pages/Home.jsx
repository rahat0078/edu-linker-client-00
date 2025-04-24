import AssignmentSectionHome from "../components/AssignmentSectionHome";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Features from "../components/Features";
import SupportTeam from "../components/SupportTeam";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <AssignmentSectionHome/>
            <Features></Features>
            <Faq></Faq>
            <Testimonial/>
            <SupportTeam/>
        </div>
    );
};

export default Home;