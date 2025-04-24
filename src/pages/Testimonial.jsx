import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react';

const Testimonial = () => {


    const rating = 4;

    const testmonialData = [
        {
            _id: "1",
            name: "Ayesha Karim",
            image: "https://img.freepik.com/free-photo/smiling-woman-with-afro-posing-pink-sweater_273609-31988.jpg",
            feedback: "Submitting assignments is now easier than ever with Edulinker!",
            rating: 3,
            reviewDate: "03/12/2024",
        },
        {
            _id: "2",
            name: "Tanvir Rahman",
            image: "https://plus.unsplash.com/premium_photo-1682091992663-2e4f4a5534ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
            feedback: "The interface is so simple that even beginners can navigate it easily.",
            rating: 4,
            reviewDate: "18/05/2025",
        },
        {
            _id: "3",
            name: "Nafisa Mim",
            image: "https://media.istockphoto.com/id/1365601848/photo/portrait-of-a-young-woman-carrying-her-schoolbooks-outside-at-college.jpg?s=612x612&w=0&k=20&c=EVxLUZsL0ueYFF1Nixit6hg-DkiV52ddGw_orw9BSJA=",
            feedback: "This website is the best solution for managing my college tasks!",
            rating: 5,
            reviewDate: "26/07/2024",
        },

    ]


    return (
        <section className='my-12'>
            <h2 className='text-3xl text-center py-12 font-bold'>What Our Students Say</h2>
            <div className="grid grid-cols-3 gap-6">
            {/* card  */}
            {
                testmonialData?.map((data) => <div key={data._id} className="p-6 bg-base-200 shadow-lg rounded-lg space-y-4">
                    <div className="flex gap-6 items-center">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img className='object-cover' alt={data?.name} src={data?.image} />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold">{data?.name}</h3>
                    </div>
                    <p>{data?.feedback}</p>
                    <div className="flex justify-between">
                        <div>
                            <Rating style={{ maxWidth: 120 }} value={data?.rating} />
                        </div>
                        <p className="text-semibold">
                            Reviewed on: {data?.reviewDate}
                        </p>
                    </div>
                </div>)
            }
            </div>
        </section>
    );
};

export default Testimonial;