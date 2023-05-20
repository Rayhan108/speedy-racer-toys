

const Upcoming = () => {
    return (
        <div className="mb-10 mt-10">
            <h1 className="text-5xl font-extrabold text-center">Upcoming Toys</h1>
<div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 mt-10"  data-aos="flip-down"
         data-aos-duration="1000">
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" >Details</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>


</div>


        </div>
    );
};

export default Upcoming;