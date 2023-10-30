import { certificates } from "../data/data.js";
import Slider from "react-slick";
// import react from '../assets/certificates/JPMC.png'


const Certificate = () => {
  // projects file
  const certi = certificates;
  const settings = {
    centerMode: true,
    dots: true,
    autoplay: true,
    centerPadding: '60px',
    slidesToShow: 3,
    duration:200,
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
    <div name="certificates" className="w-full md:h-screen text-gray-300 bg-[#010206] pb-9">
      <hr className="max-w-[1200px] mx-auto   flex border-gray-100 dark:bg-gray-700 "></hr>

      <div className=" certificate max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-600">
            Certificates
          </p>
          <p className="py-6 text-2xl"> Check out some of my Achievements...</p>
        </div>

        {/* container for projects */}
        {/* Gird Item */}
        <Slider {...settings}>
          {certi.map((item, i) => (
            <div key={i} className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4">

              <div className="slider">
                <div className=" ">
                  <img src={item.image} alt="" className=" border rounded-t-md" />
                  <div className="text-center xyz bg-[#081132] border rounded-b-md px-5">
                    <h2 className="pt-2 pb-0 fw-bold text-white font-bold text-2xl">{item.name}</h2>
                    {/* <p className="px-2 text-white"></p> */}
                    <a href={item.Link} target="_blank" rel="noreferrer" className=" ">
                      <button className="text-white  py-3 my-2 w-full items-center bg-[#0F205E] hover:bg-blue-700 rounded-md">
                        Link
                      </button></a>
                  </div>
                </div>
              </div>


            </div>

          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Certificate;
