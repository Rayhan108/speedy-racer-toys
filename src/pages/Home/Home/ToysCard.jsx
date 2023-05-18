

const ToysCard = ({toy}) => {
    // console.log(toy);
    const {photoUrl,toyName,rating,price}=toy || {};
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photoUrl} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Toys Name: {toyName}</h2>
          <p>Toys Price:${price}</p>
          <p>Ratings:{rating}</p>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default ToysCard;