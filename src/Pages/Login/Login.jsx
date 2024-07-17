import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./Style.css";
import createToken from "../../Hooks/CreateJwt";
import { useContext } from "react";
import { userContext } from "../../UserAuth/UserAuth";
const Login = () => {
  const navigate = useNavigate()
  const {users} = useContext(userContext);
  if(users.status === true){
    navigate("/dashboard")
  }
  
  const handelSubmit = async (e) => {
    e.preventDefault();
    const event = e.target;
    const user = event.user.value;
    const pin = event.pin.value;
    if (user === "") {
      return toast.error("Must Fillup Name And Email");
    }
    if (pin.length < 5 && pin === "") {
      return toast.error("Must Give 5 number only digit");
    } else {
      if (pin.length === 5) {
        const checkPin = pin.split("").every((num) => !isNaN(num));
        if (checkPin) {
          const users = { user, pin };
          axios
            .post("http://localhost:5000/login", users)
            .then((res) => {
              if (res.data.message) {
                navigate("/dashboard");
                createToken({ user });
                toast.success("Successfully Login");
                event.reset();
                setTimeout(()=>{
                  window.location.reload()
                  setTimeout(()=>{
                    navigate("/dashboard");
                  }, 500)
                }, 500)
              }
            })
            .catch((err) => {
              toast.error(err.response.data.message);
            });
        } else {
          toast.error("Please Give Only digit in your pin do not use latter");
        }
      } else {
        toast.error("Your Password Must Be Give 5 digit");
      }
    }
  };
  return (
    <div className="register-bg">
      <div className="w-[60%] mx-auto h-full  flex justify-center items-center">
        <div className=" w-full p-[50px] reg-bg">
          <ToastContainer />
          <form onSubmit={handelSubmit}>
            <div>
              <h2 className="text-center text-[40px] font-[700] text-white">
                Login
              </h2>
            </div>
            <div className="space-y-5">
              <div>
                <label className="text-white" htmlFor="">
                  Enter Your Phone Or Email
                </label>
                <input
                  name="user"
                  className="w-full p-[10px] rounded-lg"
                  type="text"
                  placeholder="Enter Phone Or Email"
                />
              </div>
              <div>
                <label className="text-white" htmlFor="">
                  Enter Your pin
                </label>
                <input
                  name="pin"
                  className="w-full p-[10px] rounded-lg"
                  type="password"
                  placeholder="Enter Pin"
                />
              </div>
              <div>
                <button className="w-full py-[10px] bg-gray-300 rounded-lg">
                  Submit
                </button>
              </div>
            </div>
            <div className="mt-[20px] text-white">
              <p>
                If You have No Account <Link to="/register">Register</Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
