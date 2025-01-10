import Lottie from 'lottie-react';
import faqimg from '../assets/faqimg.jpeg'
import faq from '../assets/lottie/faq.json';

const Faq = () => {
    const faqItems = [
        {
            question: "How do I create an assignment?",
            answer: "To create an assignment, click on the 'Create Assignment' button from your dashboard, enter the task details, and assign it to your group.",
        },
        {
            question: "How do I track my progress?",
            answer: "Your progress will be displayed in the 'Progress Tracking' section, where you can see tasks completed and feedback received.",
        },
        {
            question: "Can I grade my friend's assignments?",
            answer: "Yes! The peer grading system allows you to grade your friend's assignments, giving feedback and suggestions.",
        },
        {
            question: "What is gamified learning?",
            answer: "Gamified learning incorporates reward systems such as badges and points, which encourage engagement and motivate learners.",
        },
        {
            question: "Can I participate in multiple group studies?",
            answer: "Yes, you can join as many group studies as you like. Simply create or join a group study, and collaborate with your peers on assignments",
        },
        {
            question: "Is this platform free?",
            answer: "Yes, this platform is free to use with basic features. We also offer premium features such as advanced progress tracking and personalized feedback, available for a subscription.",
        },
    ];

    return (
        <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
                <div>
                    <Lottie animationData={faq} loop={true} />
                </div>
                <div className='flex flex-col gap-3 lg:col-span-2'>
                    <div className='flex justify-center items-center gap-3'>
                        <h2 className="py-6 text-4xl font-semibold text-center ">Frequently Asked Questions</h2>
                        <img className='w-8 -mt-8' src={faqimg} alt="" />
                    </div>
                    {
                        faqItems.map((faq, index) =>
                            <div key={index} className="collapse collapse-arrow bg-base-200 w-full">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">{faq.question}</div>
                                <div className="collapse-content">
                                    <p className='text-gray-500'>{faq.answer}</p>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Faq;
