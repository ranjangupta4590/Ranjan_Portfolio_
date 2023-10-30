

const Startup = () => {
  return (
    <div name="startup" className="w-full md:h-screen text-gray-300 bg-[#010206]">
      <hr className="max-w-[1200px] mx-auto flex  border-gray-100 dark:bg-gray-700"></hr>

      <div className="max-w-[1000px] mx-auto p-4 pb-8 flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-600">
            Startup
          </p>
          <div className="justify-between grid grid-cols-2">
            <div>
              <p className="pt-6 pb-2 text-2xl text-left font-bold justify-between"> Quick-On-Door</p>
              <p className="pt-0 pb-2 text-2xl text-left justify-between"> Co-Founder</p>
            </div>
            <div className="pt-8 ">
              <p className="py-0  text-1xl text-right"> Araria(Bihar),India</p>
              <p className="py-0  text-1xl text-right">  April-2021 - June/2021</p>
            </div>
          </div>

        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 px-4 sm:pb-7">
          <div className="justify-center ">
            <p>
              Being a co-founder of Quickondoor my responsibility was to look
              over the procedure of delivering orders and to connect people with
              local vendors. We used to deliver grocery and bakery items.
              Customer used to connect with us through our website and whatsApp.
              In 2 months we have delivered more than 400+ orders but due to
              lack of fund and unable to generate profit in small town we have
              to close it.{" "}
            </p>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Startup;
