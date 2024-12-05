import { useLoaderData } from "react-router-dom";
import TouristCard from "../Conponents/TouristCard";
import Country from "../Conponents/Country";
import useTitle from "../Conponents/useTitle";
import Swal from "sweetalert2";

const Home = () => {
  useTitle("Home");
  const handelConfirm = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Thanks for your conformation!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleTourist = () =>{
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Successfully Get This OFF!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  const addInfo = useLoaderData();
  return (
    <div>
      <div className="carousel lg:h-[90vh] mt-8 mb-8 w-full">
        <div id="slide1" className="carousel-item relative w-full">
          {/* <img
            src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full rounded-xl"
          /> */}

          <div
            className="hero lg:h-[90vh] rounded-xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/kXnFpqw/Islands.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">Island</h1>
                <p className="mb-5">
                  Islands are landmasses surrounded by water. They vary in size
                  from tiny islets to expansive land masses like Greenland.
                  Islands can be formed through volcanic activity, coral reefs,
                  or as a result of shifting tectonic plates.
                </p>
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          {/* <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full rounded-xl"
          /> */}

          <div
            className="hero lg:h-[90vh] rounded-xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/DY7YS2y/bankok.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">Bangkok</h1>
                <p className="mb-5">
                  Bangkok, the capital of Thailand, is a vibrant and bustling
                  city known for its rich cultural heritage, ornate temples, and
                  lively street life. It often referred to as the City of Angels
                  in Thai. Bangkok is famous for its delicious street food,
                  floating markets, and vibrant nightlife scene.
                </p>
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          {/* <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full rounded-xl"
          /> */}

          <div
            className="hero lg:h-[90vh] rounded-xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/MMtwqSM/kuala-lumpur.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">kuala-lumpur</h1>
                <p className="mb-5">
                  Kuala Lumpur, the capital of Malaysia, is a dynamic metropolis
                  known for its iconic skyline dominated by the Petronas Twin
                  Towers. The city is a melting pot of cultures, with influences
                  from Malay, Chinese, Indian, and indigenous communities. Kuala
                  Lumpur is a hub for shopping, dining, and entertainment, with
                  bustling street markets and upscale malls
                </p>
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div
            className="hero lg:h-[90vh] rounded-xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/FVy6fxr/sundarbon.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">Sundarban</h1>
                <p className="mb-5">
                  The Sundarbans is a vast mangrove forest located in the delta
                  region of the Bay of Bengal,straddling India West Bengal and
                  Bangladesh. It the largest mangrove forest in the world and a
                  UNESCO World Heritage Site.
                </p>
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center">Tourists Spots Section</h1>
      </div>
      <div>
        <h1>add data are : {addInfo.length}</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ml-4">
        {addInfo.map((singleAdd) => (
          <TouristCard key={singleAdd._id} singleAdd={singleAdd}></TouristCard>
        ))}
      </div>
      <div className="my-12">
        <div className="text-center my-10">
          <h1>What Type of Transport Do you Like</h1>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 grid-cols-1 max-w-4xl mx-auto">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/Gs2QTT4/ferry-boat-123059-1280.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Travel By Ship</h2>
              <div className="card-actions">
                <button onClick={handelConfirm} className="btn btn-primary">
                  Confirm
                </button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/qR4931g/railroad-8245483-1280.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Travel By Train</h2>
              <div className="card-actions">
                <button onClick={handelConfirm} className="btn btn-primary">
                  Confirm
                </button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/xFVWwqt/bus-2546383-1280.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Travel By Bus</h2>
              <div className="card-actions">
                <button onClick={handelConfirm} className="btn btn-primary">
                  Confirm
                </button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/XDQ6wjM/virgin-2721333-1280.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Travel By Plane</h2>
              <div className="card-actions">
                <button onClick={handelConfirm} className="btn btn-primary">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="text-center my-10">
          <h1>30% Discount for these place</h1>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <div onClick={handleTourist} className="cursor-pointer card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://i.ibb.co/CHBW3M8/architecture-3362225-1280.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Angkor Wat</h2>
              
            </div>
          </div>

          <div onClick={handleTourist} className="cursor-pointer card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://i.ibb.co/87XZdr8/ha-long-bay-2404431-1280.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Ha Long Bay</h2>
              {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
            </div>
          </div>

          <div onClick={handleTourist} className="cursor-pointer card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://i.ibb.co/1mjJ2ym/coxs-bazar-2894646-1280.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Cox’s Bazar</h2>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Country></Country>
      </div>
    </div>
  );
};

export default Home;
