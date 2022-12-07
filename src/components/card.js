function Card({ data, handleChange }) {
  return (
    <div className="p-4 lg:w-1/2 md:w-full">
      <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
        <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 flex-shrink-0">
          {!handleChange ? (
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          ) : (
            <div>
              <div className="block min-h-5 pl-8">
                <label>
                  <input
                    className="w-5 h-5 ease-soft text-base -ml-7 rounded checked:bg-gradient-to-tl checked:from-green-400 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                    type="checkbox"
                    value={data.id}
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
          )}
        </div>

        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">
            {data.name}
          </h2>
          <p className="leading-relaxed text-base">{data.desc}</p>
          <a href="/" className="mt-3 text-green-400 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
