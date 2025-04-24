import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';



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
        {
            _id: "4",
            name: "Rafiul Islam",
            image: "https://static.vecteezy.com/system/resources/thumbnails/026/911/382/small_2x/happy-student-boy-with-books-isolated-free-photo.jpg",
            feedback: "Edulinker helped me stay organized and never miss a deadline.",
            rating: 4,
            reviewDate: "04/10/2024",
        },
        {
            _id: "5",
            name: "Jannatul Ferdous",
            image: "https://media.istockphoto.com/id/1272815911/photo/young-indian-female-university-student-stock-photo.jpg?s=612x612&w=0&k=20&c=Iwdc08GR3pw8_Qg3_nabNJUQYTo52EU3dvW4tsth1tE=",
            feedback: "Thanks to Edulinker, I submitted all my assignments on time this semester!",
            rating: 4,
            reviewDate: "18/06/2025",
        },
    ]


    return (
        <section className='section-design'>
            <h2 className='title pb-8'>What Our Students Say</h2>

            {/* card  */}



            <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                breakpoints={{ 
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {
                    testmonialData?.map((data) => (
                        <SwiperSlide
                            key={data._id}
                            className="flex flex-col justify-between p-6 bg-base-200 shadow-lg rounded-lg space-y-2 h-full"
                        >
                            <div className="flex gap-6 items-center">
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img className='object-cover' alt={data?.name} src={data?.image} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold">{data?.name}</h3>
                            </div>
                            <p>{data?.feedback}</p>
                            <div className="flex justify-between items-center">
                                <Rating style={{ maxWidth: 120 }} value={data?.rating} readOnly />
                                <p className="font-semibold">Reviewed on: {data?.reviewDate}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>



        </section>
    );
};

export default Testimonial;