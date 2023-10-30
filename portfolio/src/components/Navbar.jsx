import { useState, useEffect } from "react";
import logo from '../assets/portfolio_video/R.png';
import {
  FaBars, FaTimes,
  // FaGithub,
  // FaLinkedin
} from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

import { Link } from "react-scroll";

const Navbar = () => {
  const [navState, setnavState] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setnavState(true);
    } else {
      setnavState(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <div className={
      !navState
        ? "z-10 top-0 fixed w-full h-[80px] flex justify-between items-center px-4  text-gray-300"
        : "fixed top-0 left-0  right-0 h-[10vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
    }>
      <div className="container pb-7">
        <span className=" ml-1"><img src={logo} className="w-[7rem] h-[6.5rem]" alt="logo" /></span>
        {/* <Link to='contact' smooth={true} duration={500}><Button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'>Hire Me</Button></Link> */}
      </div>

      {/* menu */}
      {/* <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='startup' smooth={true} duration={500}>
            Startup
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul> */}

      <div className="container flex md:pr-5 justify-end">
        <Link to='contact' smooth={true} duration={500}>
          <button type="button" className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-2xl">
            Hire Me
          </button>
        </Link>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden pl-5 z-10">

        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-2 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="startup" smooth={true} duration={500}>
            Startup
          </Link>
        </li>

        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>

        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="certificates" smooth={true} duration={500}>
            Certificates
          </Link>
        </li>

        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>




      {/* Social icons */}
      
      {/* <div className='fixed hidden lg:flex flex-col top-[35%] right-0 '>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/ranjan-kumar-40117120a'
              target="_blank"
              rel='noreferrer'
            >
              <FaLinkedin size={30} />Linkedin
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/ranjangupta4590'
              target="_blank"
              rel='noreferrer'
            >
              <FaGithub size={30} />Github
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-[#6fc2b0]'>
            <Link
              className='flex justify-between items-center w-full text-gray-300'
              to='contact'
            >
              <HiOutlineMail size={30} />Email
            </Link>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1qxomjc3s6Gu5ZJmyaaCXLJfF3ts93TC9/view?usp=drive_link'
              target="_blank"
              rel='noreferrer'
            >
              <BsFillPersonLinesFill size={30} />Resume
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
