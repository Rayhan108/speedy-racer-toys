import { useForm } from "react-hook-form";

const AddToy = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        

<div>
<div className=" min-h-screen bg-base-200">
  <div className="hero-content ">
    
    <div className="card w-full max-w-3xl shadow-2xl bg-base-100">
    <div className="card-body">
    <form onSubmit={handleSubmit(onSubmit)} >
    {errors.exampleRequired && <span>This field is required</span>}
        <h1 className="text-center font-extrabold mt-5 mb-5 text-3xl">Add A Toy</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" placeholder="Photo URL"  {...register("photo-url", { required: true })} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input type="text" placeholder="Toy Name"  {...register("toy-name", { required: true })} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input type="text" placeholder="Seller Name"  {...register("seller-name", { required: true })} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input type="text" placeholder="Seller Email"  {...register("seller-email", { required: true })} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub Catagory</span>
          </label>
          <select className="input input-bordered" {...register("category")}>
            <option value="bike">Bike</option>
            <option value="sports-car">sports car</option>
            <option value="mini-train">Mini Train</option>
          </select>
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="Price"  {...register("price", { required: true })} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" placeholder="Rating"  {...register("rating", { required: true })} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="text" placeholder="Quantity"  {...register("quantity", { required: true })} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
         <textarea {...register("description", { required: true })}  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none  "></textarea>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Toy</button>
        </div>
    </form>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default AddToy;