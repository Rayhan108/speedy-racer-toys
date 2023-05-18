import { useLoaderData } from "react-router-dom";

const Details = () => {
    const toy = useLoaderData()
    console.log(toy);
    return (
        <div>
            <h1 className="text-3xl">details page</h1>
        </div>
    );
};

export default Details;