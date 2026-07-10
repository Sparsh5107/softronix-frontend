const WhySoftronix = ({ data }) => {
  return (
    <>
      <div className="flex justify-center items-center mb-6 px-4 ">
        <div className=" mt-14 w-full max-w-6xl px-4 ">
          <h1 className=" text-3xl sm:text-3xl lg:text-4xl text-center font-bold mb-8 sm:mb-10">
            Why Softronix
          </h1>

          <div className=" w-full  p-6 sm:p-8  mb-4">
            {/* <div className ="flex flex-col justify-center items-center w-40  h-45 bg-blue-200" style={{clipPath:"polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"}}> */}
            <div className="flex flex-wrap  justify-center items-center gap-6 sm:gap-8">
              {data.map((item, index) => (
                <div key={index}>
                  <div
                    className="text-center flex flex-col justify-center items-center  sm:w-40 sm:h-48 w-40  h-40 bg-blue-200 hover:bg-blue-600 transition-all duration-300 cursor-pointer group"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  >
                    <span className="text-3xl pb-2">{item.icon}</span>
                    <h3 className=" font-medium hover:text-white pb-3">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default WhySoftronix;

// flex flex-row justify-center items-center gap-8
// flex flex-col justify-center items-center
