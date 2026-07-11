const Offerings = ({ data }) => {
  return (
    <section className="bg-blue-600 mx-3 sm:mx-4 lg:mx-10 px-3 sm:px-6 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-14 text-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white font-medium text-3xl sm:text-3xl md:text-4xl p-3 sm:p-4 md:p-6">
          {data.title}
        </h1>
        <p className="text-white px-2 text-base sm:text-lg md:text-xl">
          {data.para}
        </p>

        {/* RECEIVING BTN FROM GETSTART COMPONENT */}

        {data.buttonText && (
          <div className="mt-4 sm:mt-6">
            <button className="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-xl cursor-pointer text-sm sm:text-base transition-colors">
              {data.buttonText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Offerings;