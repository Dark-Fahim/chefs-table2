import './Banner.css'

const Banner = () => {
    return (
        <div className='banner my-5 md:my-10 w-full bg-no-repeat bg-center'>
            <div className='container mx-auto lg:p-40 p-1 md:p-20 space-y-7'>
                <h1 className='text-center text-2xl md:text-5xl font-bold text-white'>Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className='md:leading-[30px] text-[10px] md:text-[1rem] text-center  text-white'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className='text-center space-x-7 flex flex-wrap items-center justify-center'>
                    <button className='btn btn-primary'>Explore Now</button>
                    <button className='transparent primary-btn btn'>Our Feedback</button>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;