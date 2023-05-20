const Recomended = () => {
  return (
    <div className="mt-10 mb-10 ">
      <h1 className="text-center  text-5xl font-extrabold mt-10 mb-10">
        Recommended For You
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1">
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5"
        
        data-aos="fade-left"
        data-aos-duration="1000"
        >
          <figure>
            <img
              src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=1060&t=st=1684590060~exp=1684590660~hmac=10bb9ce2efba4753482ddf08a1692a907dddc48beecf7a69d86f931ae422eeb8"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex">
            <div className="text-center">
              <h2 className="font-extrabold text-center text-2xl">Train Set</h2>
              <p>Price: $450</p>
            </div>

            <button className="btn btn-primary ">Buy Now</button>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5"
          data-aos="slide-up"
          data-aos-duration="1000"
        >
          <figure>
            <img
              src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=1060&t=st=1684590060~exp=1684590660~hmac=10bb9ce2efba4753482ddf08a1692a907dddc48beecf7a69d86f931ae422eeb8"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex">
            <div className="text-center">
              <h2 className="font-extrabold text-center text-2xl">Train Set</h2>
              <p>Price: $450</p>
            </div>

            <button className="btn btn-primary ">Buy Now</button>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5"
          data-aos="slide-down"
          data-aos-duration="1000"
        >
          <figure>
            <img
              src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=1060&t=st=1684590060~exp=1684590660~hmac=10bb9ce2efba4753482ddf08a1692a907dddc48beecf7a69d86f931ae422eeb8"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex">
            <div className="text-center">
              <h2 className="font-extrabold text-center text-2xl">Train Set</h2>
              <p>Price: $450</p>
            </div>

            <button className="btn btn-primary ">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomended;
