import { GoHome } from 'react-icons/go';
import { FcAbout } from 'react-icons/fc';
import { GiSkills } from 'react-icons/gi';
import { BsPersonWorkspace } from 'react-icons/bs';
import { FiActivity } from 'react-icons/fi';
import { RiContactsLine } from 'react-icons/ri';
import { FaRegNewspaper } from 'react-icons/fa';
import { Link } from 'react-scroll';

const SideNavbar = () => {
    return (
        <>

            <aside className="font-bold z-10 hidden md:flex h-screen pt-[50px] pl-8 justify-center fixed  ">


                {/* <div className='h-full flex flex-col'> */}
                    <div className="mt-auto mb-auto text-md w-full group transition-transform transform duration-300 ease-out " >

                        <button type='button' className=" flex  my-2 py-2 ">
                            <Link to='home' smooth={true} duration={500}>
                                <div className=" flex ">
                                    <GoHome className="w-6 h-6 mr-4 " />
                                    <h1 className='hidden group-hover:block' >Home</h1>
                                </div>
                            </Link>
                        </button>

                        <button type='button' className=" btn flex  my-2 py-2 ">
                            <Link to='about' smooth={true} duration={500}>
                                <div className=" flex ">
                                    <FcAbout className="w-6 h-6 mr-4 " />
                                    <h1 className='hidden group-hover:block' >About Me</h1>
                                </div>
                            </Link>
                        </button>

                        <button type='button' className=" btn flex  my-2 py-2 ">
                            <Link to='startup' smooth={true} duration={500}>
                                <div className=" flex ">
                                    <FiActivity className="w-6 h-6 mr-4 " />
                                    <h1 className='hidden group-hover:block' >StartUp</h1>
                                </div>
                            </Link>
                        </button>

                        <button type='button' className=" btn flex  my-2 py-2 ">
                            <Link to='skills' smooth={true} duration={500}>
                                <div className=" flex ">
                                    <GiSkills className="w-6 h-6 mr-4 " />
                                    <h1 className='hidden group-hover:block' >Skills</h1>
                                </div>
                            </Link>
                        </button>

                        <button type='button' className=" btn flex  my-2 py-2 ">
                            <Link to='projects' smooth={true} duration={500}>
                                <div className=" flex ">
                                    <BsPersonWorkspace className="w-6 h-6 mr-4 " />
                                    <h1 className='hidden group-hover:block' >Projects</h1>
                                </div>
                            </Link>
                        </button>
                        
                        <button type='button' className=" btn flex  my-2 py-2 ">
                            <Link to='certificates' smooth={true} duration={500}>
                                <div className=" flex ">
                                    <FaRegNewspaper className="w-6 h-6 mr-4 " />
                                    <h1 className='hidden group-hover:block' >Certificates</h1>
                                </div>
                            </Link>
                        </button>

                        <button type='button' className=" btn flex  my-2 py-2 ">
                            <Link to='contact' smooth={true} duration={500}>
                                <div className=" flex ">
                                    <RiContactsLine className="w-6 h-6 mr-4 " />
                                    <h1 className='hidden group-hover:block' >Contact</h1>
                                </div>
                            </Link>
                        </button>



                    </div>
                {/* </div> */}

            </aside>

        </>
    )
}

export default SideNavbar;