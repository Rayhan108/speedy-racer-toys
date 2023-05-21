const Upcoming = () => {
  return (
    <div className="mb-10 mt-10 ">
      <h1 className="text-5xl font-extrabold text-center">Upcoming Toys</h1>
      <div
        className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 mt-10 "
        data-aos="flip-down"
        data-aos-duration="1000"
      >
        <div className="card w-96 bg-base-50 shadow-xl image-full">
        
            <img
              src="https://m.media-amazon.com/images/I/71PpoCF3wcL.jpg"
              alt="Racing Car"
            />
          
          <div className="card-body items-center ">
           
            <p>It is an amazing remote control racing car toys for child.</p>
        
              <button className="btn btn-primary">Details</button>
              <h2 className="card-title">Racing Car</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-50 shadow-xl image-full">
        
            <img
              src="https://media.istockphoto.com/id/530628491/photo/ferrari-f430.jpg?s=612x612&w=0&k=20&c=kBdPv9VzZEjWzPHDTU2RpLypjEeDXVYWSkLg9gLYA7g="
            />
          
          <div className="card-body items-center ">
           
            <p>It is an amazing toys for child.</p>
        
              <button className="btn btn-primary">Details</button>
              <h2 className="card-title">Ferrari</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-50 shadow-xl image-full">
        
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/61NliUe2xUL.jpg"
              alt="Racing Car"
            />
          
          <div className="card-body items-center ">
           
            <p>It is an amazing remote control toys for child.</p>
        
              <button className="btn btn-primary">Details</button>
              <h2 className="card-title">Racing Car</h2>
          </div>
        </div>
      
      
      </div>
    </div>
  );
};

export default Upcoming;
