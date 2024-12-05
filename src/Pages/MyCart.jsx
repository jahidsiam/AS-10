import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { LuArrowBigUpDash } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import useTitle from "../Conponents/useTitle";

const MyCart = () => {
  useTitle('My cart')
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);
  

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://world-explor-server.vercel.app/add/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = cartData.filter(
                (singleDelete) => singleDelete._id !== _id
              );
              setCartData(remaining);
            }
          });
      }
    });
  };
  // console.log(user)
  useEffect(() => {
    fetch(`https://world-explor-server.vercel.app/myCart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCartData(data);
      });
  }, [user]);
  return (
    <div className="mt-14 mb-36">
      <h1 className="text-center my-6">This is my cart</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No:</th>
              <th>Country Name</th>
              <th>Spot Name</th>
              <th>Location</th>
              <th>user Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((singleCart, index) => (
              <tr className="" key={singleCart._id}>
                <th>{index + 1}</th>
                <td>{singleCart.country_name}</td>
                <td>{singleCart.spot_name}</td>
                <td>{singleCart.location}</td>
                <td>{singleCart.email}</td>
                <Link to={`/update/${singleCart._id}`}>
                  <td
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Update"
                    data-tooltip-place="top"
                    className="text-2xl"
                  >
                    <LuArrowBigUpDash />
                  </td>
                </Link>
                <td
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Delete"
                  data-tooltip-place="top"
                  onClick={() => handleDelete(singleCart._id)}
                  className="text-2xl cursor-pointer"
                >
                  <MdDelete />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default MyCart;
