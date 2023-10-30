// import ecom from '../assets/portfolio_video/Ecom.mp4';
import { videoData } from '../data/data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Projects = () => {

    const project = videoData;

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    // };


    const settings = {
        centerMode: true,
        dots: true,
        autoplay: true,
        centerPadding: '60px',
        slidesToShow: 3,
        duration: 200,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                Infinity: true,
                slidesToShow: 1
            },
        }]
    };

    return (

        <div name="projects" className="w-full md:h-screen bg-[#010206] text-gray-300">
            <hr className="max-w-[1200px] mx-auto " />
            {/* <hr className="max-w-[1200px] mx-auto  flex  border-gray-100 dark:bg-white py-5 "></hr> */}
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>

                <div className="pb-2">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-600">
                        Projects Undertaken
                    </p>
                    <p className="py-6 text-2xl"> Check out some of my works...</p>
                </div>

                <Slider {...settings}>
                    {project.map((item, i) => (
                        <div key={i} className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                            <div className="border-2 rounded-xl">

                                <iframe width="270px" height="240px"
                                    className=' rounded-t-xl'
                                    src={`https://www.youtube.com/embed/${item.youtube_id}?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0" allow="accelerometer; autoplay;" allowfullscreen`}>
                                </iframe>


                                {/* <video src={item.videoLink} autoPlay loop muted className="w-[350px]" type='video/mp4' /> */}
                                <div className="text-center bg-[#081132] border rounded-b-xl px-5">
                                    <h2 className="pt-2 fw-bold text-white font-bold text-2xl">{item.name}</h2>
                                    {/* <p className="px-2 text-white"></p> */}
                                    <div className='grid lg:grid-cols-2 md:grid-cols-1 mx-auto py-3 my-2 items-center justify-center gap-3'>
                                        <div>
                                            <a href={item.github} target="_blank" rel="noreferrer" className=" ">
                                                <button className="text-white mx-auto py-3 my-2 w-full items-center bg-[#0F205E] hover:bg-blue-700 rounded-md">
                                                    GIthub
                                                </button></a>
                                        </div>
                                        <div>
                                            <a href={item.link} target="_blank" rel="noreferrer" className=" ">
                                                <button className="text-white mx-auto py-3 my-2 w-full items-center bg-[#0F205E] hover:bg-blue-700 rounded-md">
                                                    Website
                                                </button></a>
                                        </div>
                                    </div>
                                </div>


                            </div>


                        </div>

                    ))}
                </Slider>
                {/* <Slider {...settings}>
                    {project.map((val, i) => (

                        <div key={i} className="card">
                            <div className="imgbox">
                                <video autoPlay loop controls>
                                    <source src={val.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className='p_name pt-4 text-2xl font-semibold text-black text-center w-full'>{val.name}</div>
                            </div>

                            <div className="content">
                                <h2 className='text-2xl text-black'>dcjsh</h2>
                                <div className="flex flex-row gap-4">
                                    <a href={val.github} target="_blank" rel='noreferrer'>
                                        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-pink-600 hover:border-pink-600 rounded-2xl">
                                            Github
                                        </button>
                                    </a>
                                    <a href={val.link} target="_blank" rel='noreferrer'>
                                        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-pink-600 hover:border-pink-600 rounded-2xl">
                                            Website

                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider> */}

            </div>
        </div>

    )
}

export default Projects;