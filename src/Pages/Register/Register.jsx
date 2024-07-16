import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios"
import "./Style.css";
import { useContext } from "react";
import { userContext } from "../../UserAuth/UserAuth";
const Register = () => {
    const {name} = useContext(userContext)
    console.log(name)
  const handelSubmit = async (e) => {
    e.preventDefault();
    const event = e.target;
    const name = event.name.value;
    const email = event.email.value;
    const phone = event.phone.value;
    const pin = event.pin.value;
    const status = "pending"

    if ((name === "", email === "")) {
      return toast.error("Must Fillup Name And Email");
    }
    if (phone.length < 11 || phone === "") {
      return toast.error("Please Give Valid Phone number");
    }
    if (pin.length < 5 && pin === "") {
      return toast.error("Must Give 5 number only digit");
    } else {
      if (pin.length === 5) {
        const checkPin = pin.split("").every((num) => !isNaN(num));
        if (checkPin) {
            const user = { name, email, phone, pin, status}
            axios.post("http://localhost:5000/register", user)
            .then((res)=>{
                if(res.data.insertedId){
                    toast.success("Successfully Register")
                    event.reset()
                }
            })
            .catch((err)=> {
                toast.error(err.response.data.message)
            })
        } else {
          toast.error("Please Give Only digit in your pin do not use latter");
        }
      }else{
        toast.error("Your Password Must Be Give 5 digit")
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
              <h2 className="text-center text-[40px] font-[700]">Register</h2>
            </div>
            <div className="space-y-5">
              <div>
                <label htmlFor="">Enter Your Name</label>
                <input
                  name="name"
                  className="w-full p-[10px] rounded-lg"
                  type="text"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label htmlFor="">Enter Your Email</label>
                <input
                  name="email"
                  className="w-full p-[10px] rounded-lg"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label htmlFor="">Enter Your Phone</label>
                <input
                  name="phone"
                  className="w-full p-[10px] rounded-lg"
                  type="number"
                  placeholder="Enter Phone"
                />
              </div>
              <div>
                <label htmlFor="">Enter Your pin</label>
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
            <div className="mt-[20px]">
              <p>
                If You have Already An Account Please{" "}
                <Link to="/login">Login</Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
