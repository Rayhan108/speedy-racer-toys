// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import { Navigation, Pagination, Scrollbar } from "swiper";

const Gallary = () => {
    return (
        <div className='space-y-10 mb-10 p-10'>
            <h1 className='text-center font-extrabold text-3xl'>Gallary</h1>
         <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
        pagination={{ clickable: true }}
       
        scrollbar={{ draggable: true }}
    >
       
  
          <SwiperSlide>
            <img
              style={{ width: "100%" }}
              className=""
              src="https://img.freepik.com/free-photo/kids-playing-outside-with-cart_23-2147782169.jpg?w=996&t=st=1684357133~exp=1684357733~hmac=0bc3843f9951b9a130de8952b4afebd46ce0139f13950ff23f30429ade4af9f9"
              alt="First slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "100%" }}
              className=""
              src="https://img.freepik.com/free-photo/full-shot-smiley-girl-with-tricycle_23-2149363914.jpg?w=996&t=st=1684357632~exp=1684358232~hmac=cf44894d4be5d4a954b75289d23aa86b8fb9a50270d02552011249655bbd5513"
              alt="First slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "100%" }}
              className=""
              src="https://img.freepik.com/free-photo/kid-playing-with-toy-train_23-2148131041.jpg?w=996&t=st=1684358004~exp=1684358604~hmac=f68f1f0ea35a601b5dfc592fde34fed860a06b70f67aadc36021f9f920e89d2c"
              alt="First slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "100%" }}
              className=""
              src="https://img.freepik.com/premium-photo/miniature-people-railway-staff-are-working-railway_28710-1068.jpg?w=996"
              alt="First slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "100%" }}
              className=""
              src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=996&t=st=1684357940~exp=1684358540~hmac=5e05545cdff9fea79d1db583c30ce64cadb75afb4c5b6525553fed80fea63c80"
              alt="First slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "100%" }}
              className=""
              src="https://img.freepik.com/free-photo/full-shot-little-kid-sitting-tricycle-home_23-2149308367.jpg?w=996&t=st=1684357194~exp=1684357794~hmac=c3ea7ced2029b5e809c589ad1c326c8069f49a0af4898c3264c0c738b6340863"
              alt="First slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "100%" }}
              className=""
              src="https://img.freepik.com/free-photo/cute-adorable-kid-blue-t-shirt-riding-segway-pink-wall_179666-740.jpg?w=996&t=st=1684357378~exp=1684357978~hmac=f6299c57bbe8f5fea7a1ecbc10c21e3ce0d5fb0a7c0bf2c63ece08f0d09329af"
              alt="First slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "100%" }}
              className=""
              src="https://img.freepik.com/free-photo/full-shot-little-kid-sitting-tricycle_23-2149308376.jpg?w=996&t=st=1684357517~exp=1684358117~hmac=0b2c435b1cf894a32386dc025672319e65eadf5042b9173e079682220cc10b71"
              alt="First slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "100%" }}
              className=""
              src="https://img.freepik.com/premium-photo/boy-baby-motorcycle_93200-3971.jpg?w=996"
              alt="First slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "100%" }}
              className="max-w-lg"
              src="https://img.freepik.com/free-photo/so-little-so-big-boy-child-looks-brave-driving-his-toy-outlander_1304-2723.jpg?w=996&t=st=1684356770~exp=1684357370~hmac=2c7e8e8b211ae7155ec8a28acd7ff4de0958517a9f374eaa779f0e92bf4e466a"
              alt="First slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "100%" }}
              className="max-w-lg"
              src="https://img.freepik.com/free-photo/little-baby-girl-playing-car_155003-4389.jpg?w=996&t=st=1684356866~exp=1684357466~hmac=59edb365d7e8056c69b620443abe0f615e67686b233e53078ae6794124bec04d"
              alt="First slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "100%" }}
              className="max-w-lg"
              src="https://img.freepik.com/free-photo/little-baby-girl-playing-car_155003-6783.jpg?w=996&t=st=1684356921~exp=1684357521~hmac=3cb3f0cdba20110ae44df92933cda49a8a66a0d14c3d19282f3b06c1747a1d85"
              alt="First slide"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Gallary;