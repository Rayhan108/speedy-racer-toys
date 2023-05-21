import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-cyan-800 to-white-600 py-16 px-4 mb-10">
        <div>
          <div className="flex flex-col lg:flex-row items-center justify-between " >
            <div
             data-aos="flip-left" data-aos-duration="500" 
             className="lg:w-1/2 overflow-x-hidden">
              <h1 className="text-4xl  font-extrabold text-white  md:text-6xl">
                Welcome to Speedy Car Toys
              </h1>
              <p className="mt-3   text-xl text-white ">
                Discover the thrill of high-speed racing with our premium collection of toy cars.
              </p>
            </div>
            <img
              className="w-full  max-w-lg mt-10 lg:mt-0"
              src="https://img.freepik.com/free-photo/child-having-fun-during-playtime_23-2149382708.jpg?w=996&t=st=1684355625~exp=1684356225~hmac=b82bc3f9df18daa9283595c9a8d512a56f070f26950ee36a688771f58e0a6db5"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Banner;