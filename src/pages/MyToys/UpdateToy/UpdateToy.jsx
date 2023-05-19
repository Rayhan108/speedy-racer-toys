
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateToy = () => {
    const singleToy =useLoaderData()
    const {_id,photoUrl,toyName,price,rating,quantity,sellerName,sellerEmail,category,description}=singleToy;
      const { register, handleSubmit, formState: { errors } } = useForm();
      
      const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:5000/post-toys/${_id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => {
            console.log(data);
                if(data.modifiedCount>0){
                    Swal.fire({
              title: 'success!',
              text: 'Update Succesfull',
              icon: 'success',
              confirmButtonText: 'Cool'
            })}
             
        });

            console.log(data);
      }
    return (
        <div>
        <div className=" min-h-screen bg-base-200">
          <div className="hero-content ">
            
            <div className="card w-full max-w-3xl shadow-2xl bg-base-100">
            <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} >
            {errors.exampleRequired && <span>This field is required</span>}
                <h1 className="text-center font-extrabold mt-5 mb-5 text-3xl">Update A Toy</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="url" placeholder="Photo URL" defaultValue={photoUrl} {...register("photoUrl", { required: true })} className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Toy Name</span>
                  </label>
                  <input type="text" placeholder="Toy Name" defaultValue={toyName}  {...register("toyName", { required: true })} className="input input-bordered" />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seller Name</span>
                  </label>
                  <input type="text" placeholder="Seller Name" defaultValue={sellerName} {...register("sellerName", { required: true })} className="input input-bordered" />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seller Email</span>
                  </label>
                  <input type="text" placeholder="Seller Email" defaultValue={sellerEmail} {...register("sellerEmail", { required: true })} className="input input-bordered" />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Sub Catagory</span>
                  </label>
                  <select className="input input-bordered" defaultValue={category} {...register("category")}>
                    <option value="bike">Bike</option>
                    <option value="sports-car">sports car</option>
                    <option value="mini-train">Mini Train</option>
                  </select>
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input type="text" placeholder="Price" defaultValue={price}  {...register("price", { required: true })} className="input input-bordered" />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input type="text" placeholder="Rating" defaultValue={rating}  {...register("rating", { required: true })} className="input input-bordered" />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input type="text" placeholder="Quantity" defaultValue={quantity}  {...register("quantity", { required: true })} className="input input-bordered" />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                 <textarea {...register("description", { required: true })} defaultValue={description}  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none  "></textarea>
                  <input type="text" defaultValue={_id} className="hidden" />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Update</button>
                </div>
            </form>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default UpdateToy;