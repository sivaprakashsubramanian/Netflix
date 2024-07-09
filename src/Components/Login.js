import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [userDetail,setUserDatail]=useState({
    name:'',
    mob_no:'',
    email:'',
    password:''
  })
  const handleChange=(e)=>{
    const{name,value}=e.target.value;
    setUserDatail(data=>({
      ...data,
      [name]:value
    }))
  }
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg"
          alt="img"
        />
        <form className="bg-black absolute w-3/12 p-10 my-36 mx-auto left-0 right-0 text-white">
          <h1 className="font-bold text-3xl my-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {isSignIn ? null : (
            <div>
            
              <input
                type="text"
                name="name"
                value={userDetail.name}
                placeholder="Enter your Name"
                className=" p-2 my-4 rounded w-[100%] bg-gray-800"
                onChange={handleChange}
              />
                <input
                type="text"
                name="mob_no"
                value={userDetail.mob_no}
                placeholder="Enter your Mobile No"
                className=" p-2 my-4 rounded w-[100%] bg-gray-800"
                onChange={handleChange}
              />
            </div>
          )}
          <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            value={userDetail.email}
            className=" p-2 my-4 rounded w-[100%] bg-gray-800"
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="Enter your Password"
            value={userDetail.password}
            className=" p-2 my-4 rounded w-[100%] bg-gray-800"
            onChange={handleChange}
          />
          <button className=" bg-red-400 rounded w-[100%] p-2 my-4">
          {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className=" cursor-pointer" onClick={toggleSignIn}>
            { isSignIn?"New to Netflix? Sign Up":"Already Register?Sign in"}
          </p>
        </form>

        {/* <div className=" relative w-3/4  h-[50%] mx-auto my-auto sm:my-auto  md:w-1/2  lg:w-2/6  bg-black text-white ">
        <div className="flex-col p-[10%]  justify-center items-center">
        <div className="mx-auto">
        <input type="text" name="email" placeholder="Enter your Email"  className="w-[100%] p-2 mb-4 rounded"/>
        <input type="text" name="password" placeholder="Enter your Password" className="w-[100%] p-2  rounded"/><br></br>
        <button className="bg-red-500 w-[100%] rounded p-2 mt-6">Sign in</button>
        </div>
        <div className="mt-4 flex justify-between">
        <div><input type="checkbox"/> Remember Me</div>
          <div>Need Help</div>
        </div>
        </div>
        
      </div> */}
      </div>
    </div>
  );
};

export default Login;
