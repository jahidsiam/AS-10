import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Toaster, toast } from "sonner";
import useTitle from "../Conponents/useTitle";
const Login = () => {
  useTitle('Login')
  const { loginUser, googleLogin, gitHubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [registerError, setRegisterError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successfully!");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message);
      });
  };

  const handleGoogleIn = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successfully!");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGitHub = () => {
    gitHubLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successfully!");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="lg:max-w-lg mx-auto mb-9 mt-10  border-solid border-2 border-indigo-600 p-8 rounded-xl w-11/12">
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <p className="text-lg font-bold">Email</p>
          <input
            type="text"
            name="email"
            required
            placeholder="Name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="relative">
          <p className="text-lg font-bold">Password</p>
          <input
            type={showPass ? "text" : "password"}
            name="password"
            required
            placeholder="password"
            className="input input-bordered w-full"
          />
          <span
            className="absolute top-[42px] right-3 text-xl"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {registerError && <p className="text-red-600">{registerError}</p>}
        <div className="">
          <button className="btn btn-outline  text-lg font-semibold btn-accent w-full mt-5">
            Login
          </button>
        </div>
        <div className="">
          <p className="my-6">
            Do not have account,Please?
            <Link
              to="/register"
              className="link text-lg font-bold link-primary"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
      <Toaster position="bottom-left" richColors  />
      <div className="my-3">
        <p className="text-center text-2xl font-bold underline">Login With</p>
      </div>
      <div className="mt-6 border flex justify-center gap-5 items-center">
        <div>
          <button onClick={handleGoogleIn} className="cursor-pointer text-3xl">
            <FaGoogle />
          </button>
        </div>
        <div>
          <button onClick={handleGitHub} className="cursor-pointer text-3xl">
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
