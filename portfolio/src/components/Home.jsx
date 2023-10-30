
// import PROFILE from "../assets/PROFILE.jpeg";
import PROFILE from "../assets/photo.jpg";
import Resume from "../assets/Resume__New_.pdf";
import bg from '../assets/portfolio_video/bg_video.mp4';
import Typical from "react-typical";
import { FaDownload } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { SocialIcon } from 'react-social-icons'
// import '../App.css';

const Home = () => {
  return (
    <div name="home" className="w-full md:h-screen bg-[#010206] ">
      {/* <div className=" overlay absolute left-0 top-0 w-[100%] h-[100%] "> */}
      <div className=" overlay w-[100%] h-[100%] bg-opacity-80 bg-black z-10  ">

          <video src={ bg} loop autoPlay muted className="absolute inset-0 w-[100%] h-[100%]  object-cover opacity-20 bg-black -z-1" />
          {/* Container */}
          <div className="relative max-w-[1000px] mx-auto pb-3 flex flex-col justify-center items-center w-[100%] h-[100%]">

            <div className=" glassmorphism-container justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              <div className="container justify-center  items-center">
                <p className=" text-2xl text-green-600 mt-10 ">Hi, my name is</p>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#edf2ff]">
                  Ranjan Kumar
                </h1>
                <h2 className="text-2xl sm:text-2xl font-bold text-[#f5f8ff]">
                  I'm a{" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "MERN Developer",
                      1200,
                      "Full Stack Developer",
                      1000,
                      "C++ Programmer",
                      1000,
                    ]}
                  // wrapper="p"
                  />
                </h2>
                <p className="text-white py-4 max-w-[700px]">
                  I’m a Full-Stack developer and always try to build exceptional applications.
                  {/* specializing in building exceptional digital experiences. */}
                  Currently, I’m focused on building responsive full-stack web
                  applications.
                </p>
                <div className="flex flex-row gap-4">
                  <Link to="projects" smooth={true} duration={500}>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-2xl">
                      View Work
                      <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-3 " />
                      </span>
                    </button>
                  </Link>
                  <a href={Resume} download={Resume}>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-400 rounded-2xl">
                      Get Resume
                      <span className="">
                        <FaDownload className="ml-3 " />
                      </span>
                    </button>
                  </a>
                </div>
              </div>

              {/* IMage Profile */}
              <div className="image py-4  mx-auto justify-center items-center md:justify-center md:mx-auto ">
                <div></div>
                <div className="p-auto">
                  <img
                    className="ml-10  rounded-[10px]"
                    src={PROFILE}
                    alt="profile-image"
                    style={{ width: "220px" }}
                  />


                  {/* Social Icon  */}
                  <div className="flex ">
                    <ul className="flex flex-row mx-auto pt-5 gap-2 pl-10 justify-center items-center">

                      <SocialIcon network="linkedin" style={{ width: 35, height: 35 }} className="" url="https://www.linkedin.com/in/ranjan-kumar-2023s/" target="_blank" />

                      <SocialIcon network="github" style={{ width: 35, height: 35 }} url="https://github.com/ranjangupta4590" target="_blank" />
                      <SocialIcon network="instagram" style={{ width: 35, height: 35 }} url="https://www.instagram.com/ranjan_gupta_official/" target="_blank" />

                      <Link to='contact' smooth={true} duration={500}>
                        <SocialIcon network="email" style={{ width: 35, height: 35 }} />
                      </Link>

                      <SocialIcon network="telegram" style={{ width: 35, height: 35 }} target="_blank" url="https://drive.google.com/file/d/1qxomjc3s6Gu5ZJmyaaCXLJfF3ts93TC9/view?usp=drive_link" />

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      );
};

      export default Home;
