import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const loadedUser = useLoaderData();
  console.log(loadedUser);
  const handleUpdate = e => {
    e.preventDefault()
    const form = e.target;
        const spot_name = form.spot_name.value;
        const country_name = form.country_name.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        const per_year = form.per_year.value;
        const photo = form.photo.value;
        console.log(spot_name,country_name,location,description,cost,seasonality,time,per_year,photo)
        const newData = {spot_name,country_name,location,description,cost,seasonality,time,per_year,photo}
        fetch(`https://world-explor-server.vercel.app/add/${loadedUser._id}`, {
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Swal.fire({
              title: 'success',
              text: 'Successfully update Data!',
              icon: 'success',
              confirmButtonText: 'Done'
            })
        })
  }
  return (
    <div>
      <h1>This is update route : {loadedUser.country_name}</h1>
      <form onSubmit={handleUpdate} className="">
        <div className="grid lg:grid-cols-2 gap-7">
          <div>
            <p className="text-lg font-semibold mb-1">Tourists Spot Name :</p>
            <input
              type="text"
              name="spot_name"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">Country Name :</p>
            <input
              type="text"
              name="country_name"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">Location :</p>
            <input
              type="text"
              name="location"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">Short Description :</p>
            <input
              type="text"
              name="description"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">Average Cost :</p>
            <input
              type="text"
              name="cost"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">Seasonality :</p>
            <input
              type="text"
              name="seasonality"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">Travel Time :</p>
            <input
              type="text"
              name="time"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">
              Total Visitors Per Year :
            </p>
            <input
              type="text"
              name="per_year"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="mt-7">
          <p className="text-lg font-semibold mb-1">Tourists Spot Image :</p>
          <input
            type="text"
            name="photo"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mt-5">
          <button className="btn w-full text-lg">Update</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
