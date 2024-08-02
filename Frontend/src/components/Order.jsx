function Order({ item }) {
  return (
    <>
      <div className="py-8 flex flex-wrap md:flex-nowrap justify-around width-full ml-20">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col justify-center items-end">
          <div className="flex flex-col justify-center">
            <figure className="w-full">
              <img src={item.item_id.image} alt="Shoes" className="h-64" />
            </figure>
            <div className="mt-5 flex justify-center items-center flex-col">
              <span className="font-semibold title-font text-white">
                Reaching on
              </span>
              <span className="mt-1 text- text-sm text-white mt-3">
                {item.deliveryDate}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <h2 className="text-2xl font-medium white title-font mb-2 text-white">
              {item.item_id.name}
            </h2>
            <h6 className="text-2xl font-medium white title-font mb- text-white">
              {item.item_id.title}
            </h6>
            <p className="leading-relaxed text-white mt-7">
              This will reach soon to {item.address} {item.city} {item.state}
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-4">
              Show More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
