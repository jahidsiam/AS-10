import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import useTitle from "../Conponents/useTitle";

const AddTourist = () => {
  useTitle('Add Tourist')
    const {user} = useContext(AuthContext) || {}
    const handleAddSpot = e =>{
        e.preventDefault();
        const form = e.target;
        const spot_name = form.spot_name.value;
        const country_name = form.country_name.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        const per_year = form.per_year.value;
        const email = user.email;
        const name = user.displayName;
        const photo = form.photo.value;

        const newAdd = {spot_name,country_name,location,description,cost,seasonality,time,per_year,email,name,photo}
        console.log(newAdd)

        fetch('https://world-explor-server.vercel.app/add', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newAdd)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
              form.reset()
              Swal.fire({
                title: 'Success!',
                text: 'Successfully insert your Data',
                icon: 'success',
                confirmButtonText: 'Done'
              })
            }
        })
        
    }
  return (
    <div className="mt-10 mb-10 w-11/12 mx-auto">
        <div className="mb-8">
        <span className="text-xl" style={{ color: 'green', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Add Tourist Post']}
            loop={5}
            cursor
            
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        </div>
      <form onSubmit={handleAddSpot} className="">
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
          <p className="text-lg font-semibold mb-1">Total Visitors Per Year :</p>
          <input
            type="text"
            name="per_year"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p className="text-lg font-semibold mb-1">User Email :</p>
          <input
            type="text"
            name="email"
            placeholder="Type here"
            // disabled
            readOnly
            defaultValue={user?.email}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p className="text-lg font-semibold mb-1">User Name :</p>
          <input
            type="text"
            name="name"
            // disabled
            readOnly
            defaultValue={user?.displayName}
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
          <button className="btn w-full text-lg bg-green-500">Add Spot</button>
        </div>
      </form>
    </div>
  );
};

export default AddTourist;
