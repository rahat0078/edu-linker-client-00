import aboutImg from '../../assets/about.jpg';

const AboutUs = () => {
    return (
        <main className='py-12 bg-[#6881c41f]'>
            <section className="container mx-auto">
                <section className="flex items-center flex-col md:flex-row justify-between bg-base-200">
                    <div className='space-y-2 p-6 h-full'>
                        <h5 className='text-xl font-semibold text-orange-400 '>About EduLinker</h5>
                        <h2 className='text-3xl md:text-4xl font-semibold '>Transforming Student Success </h2>
                        <p style={{textAlign: "start"}} className='description'>Edulinker is the ultimate tool for students, designed to simplify the way assignments are managed and completed. Whether you're tracking deadlines, organizing tasks, or seeking academic support, Edulinker brings everything together in one easy-to-use platform. Our mission is to make academic life smoother, more efficient, and less stressful—so students can focus on what truly matters: learning and succeeding.</p>
                    </div>
                    <div className='p-6'>
                        <img className='max-w-lg w-full rounded-lg' src={aboutImg} alt="Thumbnail- happy students in group" />
                    </div>
                </section>
                <section class="section-design text-center">
                    
                        <h2 class="title mb-6">Edulinker's Impact at a Glance</h2>
                        <div class="flex justify-center items-center flex-wrap gap-8">
                            <div class="stat-card bg-base-300 p-8 rounded-xl shadow-xl">
                                <h3 class="text-2xl font-semibold ">10,000+</h3>
                                <p class="text-gray-500">Students Served</p>
                            </div>
                            <div class="stat-card bg-base-300 p-8 rounded-xl shadow-xl">
                                <h3 class="text-2xl font-semibold ">50,000+</h3>
                                <p class="text-gray-500">Assignments Completed</p>
                            </div>
                            <div class="stat-card bg-base-300 p-8 rounded-xl shadow-xl">
                                <h3 class="text-2xl font-semibold ">98%</h3>
                                <p class="text-gray-500">Satisfaction Rate</p>
                            </div>
                        </div>
                </section>

            </section>

        </main>
    );
};

export default AboutUs;