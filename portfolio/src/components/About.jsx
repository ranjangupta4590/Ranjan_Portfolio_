
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#010206] text-gray-300">
      <hr className="max-w-[1200px] mx-auto  flex  border-gray-100 dark:bg-gray-700 "></hr>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <p>
              Namaste. I'm Ranjan Kumar
            </p>
            <p className="sm:text-right text-3xl">
              {" "}
              Please take a look around.</p>
          </div>
          <div className="text-white">
            <p>
              I am passionate about building excellent application that improves
              the lives of those around me.
            </p>
            <p>
              {" "}
              Where accuracy meets creativity in competitive programming and web development or software developement is where I find my niche. My track record as a constant top performer in competitive programming speaks to my abilities for problem-solving and willingness to take on new challenges. As an enthusiast of web development, I've effectively applied my knowledge to practical situations, utilising my front-end expertise to produce seamless user experiences.

            </p>
            <p>
              {" "}
              My endless interest and adaptability in the learning environment are what make me unique. I take an open-minded approach to every project, keen to explore new areas and technology in order to keep up with the changing needs of the business world.
              I have a very flexible way of learning and I am open to learning new fields as per the requirements.</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
