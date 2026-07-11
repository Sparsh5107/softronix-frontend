const Cards = ({ data }) => {
  return (
    // <section className="w-full mx-10  sm:mx-auto py-8 sm:py-10 lg:py-14">
    <section className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-10 lg:py-14">
      
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-10 bg-gray-200 py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {data.map((product, id) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-lg p-5 sm:p-6 flex flex-col items-center text-center transition-transform  hover:shadow-xl"
            >
              <div className="flex justify-center items-center mb-4 text-3xl sm:text-4xl w-14 h-14 sm:w-16 sm:h-16">
                {product.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-2 sm:mb-3">
                {product.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
                {product.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    
    </section>
  );
};

export default Cards;
