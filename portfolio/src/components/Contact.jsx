import pic from '../assets/portfolio_video/2.svg';


const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen  text-gray-300 bg-[#010206]  justify-center items-center'>
      <hr className="max-w-[1200px] mx-auto   flex  border-gray-100 dark:bg-gray-700"></hr>

      <div className='max-w-[1000px] pl-10  mx-auto mt-8'>
        <p className='text-4xl font-bold inline border-b-4 border-green-600 text-gray-300'>Contact</p>
        <p className='text-gray-300 py-4'></p>
      </div>

      <div className=" max-w-[1000px] pl-10 flex justify-center items-center mx-auto gap-10">

        <div className=' mx-auto pr-10 flex flex-col justify-center items-center w-full h-full'>
          <form method='POST' action="https://formspree.io/f/xoqblope" className='flex flex-col mx-auto pt-4 max-w-[600px] w-full '>


            {/* <span className='text-2xl text-white'>Name:   </span> */}
            <input className='bg-[#f9fafc] p-2  text-black rounded-md ' type="text" placeholder='Name' name='name' required />
            <input className='mt-4 bg-[#f9fafc] p-2 text-black rounded-md' type="text" placeholder='Mobile No.' name='mobile' required />
            <input className='my-4 p-2 bg-[#f9fafc] text-black rounded-md' type="email" placeholder='Email' name='email' required />
            <textarea className='bg-[#f9fafc] p-2 text-black rounded-md' name="message" rows="10" placeholder='Message' minLength={5}></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md' type='submit'>Send</button>
          </form>
        </div>

        <div className='hidden md:flex items-center justify-center w-[1000px] pl-10'>
          <img src={pic} alt="svg_pic" />
        </div>
      </div>
    </div>
  )
}

export default Contact;