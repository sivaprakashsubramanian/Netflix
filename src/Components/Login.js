import React, { useState } from "react";
import Header from "./Header";
import { logo_bg } from "../Assets/images/images";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
 

 

  
  // it is first used method
  // const formik = useFormik({
  //   initialValues: { email: "",firstName:"",secondName:"" },
  //   validationSchema: Yup.object({
  //     firstName: Yup.string()
  //       .max(15, 'Must be 15 characters or less')
  //       .required('Required'),
  //     secondName: Yup.string()
  //       .max(20, 'Must be 20 characters or less')
  //       .required('Required'),
  //     email: Yup.string().email('Invalid email address').required('Required'),
  //   }),
  //   onSubmit: values => {
  //     // console.log(values,"gi")
  //     alert(JSON.stringify(values, null, 2));
  //   }
  // });
  // it is component based 
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //   },
  //   validationSchema: Yup.object({
  //     firstName: Yup.string()
  //       .max(15, 'Must be 15 characters or less')
  //       .required('Required'),
  //     lastName: Yup.string()
  //       .max(20, 'Must be 20 characters or less')
  //       .required('Required'),
  //     email: Yup.string().email('Invalid email address').required('Required'),
  //   }),
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });
  

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src={logo_bg}
          alt="img"
        />
        {/* <form onSubmit={(e)=>e.preventDefault()}  className="bg-black absolute w-3/12 p-10 my-36 mx-auto left-0 right-0 text-white">
          <h1 className="font-bold text-3xl my-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {isSignIn ? null : (
            <div>
            
              <input
              
                type="text"
                // name="name"
                // value={userDetail.name}
                placeholder="Enter your Name"
                className=" p-2 my-4 rounded w-[100%] bg-gray-800"
                // onChange={handleChange}
              />
                <input
                type="text"
                name="mob_no"
                // value={userDetail.mob_no}
                placeholder="Enter your Mobile No"
                className=" p-2 my-4 rounded w-[100%] bg-gray-800"
                // onChange={handleChange}
              />
            </div>
          )}
          <input
            type="text"
            ref={email}
            // name="email"
            placeholder="Enter your Email"
            // value={userDetail.email}
            className=" p-2 my-4 rounded w-[100%] bg-gray-800"
            // onChange={handleChange}
          />
          <input
            type="text"
            ref={password}
            // name="password"
            placeholder="Enter your Password"
            // value={userDetail.password}
            className=" p-2 my-4 rounded w-[100%] bg-gray-800"
            // onChange={handleChange}
          />
          <p>{errMsg}</p>
          <button className=" bg-red-400 rounded w-[100%] p-2 my-4" onClick={handleSubmit} >
          {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className=" cursor-pointer" onClick={toggleSignIn}>
            { isSignIn?"New to Netflix? Sign Up":"Already Register?Sign in"}
          </p>
        </form> */}
        {/* Formik */}
       
    {isSignIn?<SignIn isSignIn={isSignIn} setIsSignIn={setIsSignIn}/>:<SignUp isSignIn={isSignIn} setIsSignIn={setIsSignIn}/>}
    
       
  
    {/* <form onSubmit={formik.handleSubmit} className="bg-black absolute w-3/12 p-10 my-36 mx-auto left-0 right-0 text-white">
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        // value={formik.values.email}
        {...formik.getFieldProps('email')}
         className=" p-2 my-4 rounded w-[100%] bg-gray-800"
      />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <label htmlFor="firstName">First Name</label>
        <input
        id="firstName"
        // name="firstName"
        type="text"
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        // value={formik.values.firstName}
        {...formik.getFieldProps('firstName')}
         className=" p-2 my-4 rounded w-[100%] bg-gray-800"
      />
      {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      <label htmlFor="secondName">Second Name</label>
        <input
        id="secondName"
        // name="secondName"
        type="text"
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        // value={formik.values.secondName}
        {...formik.getFieldProps('secondName')}
         className=" p-2 my-4 rounded w-[100%] bg-gray-800"
      />
      {formik.touched.firstName && formik.errors.secondName ? <div>{formik.errors.secondName}</div> : null}
      <button type="submit">Submit</button>
    </form> */}

  

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
       {/* <form onSubmit={formik.handleSubmit} >
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         type="text"
        
         {...formik.getFieldProps('firstName')}
       />
       {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
 
       <label htmlFor="lastName">Last Name</label>
       <input id="lastName" type="text" {...formik.getFieldProps('lastName')} />
       {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}
 
       <label htmlFor="email">Email Address</label>
       <input id="email" type="email" {...formik.getFieldProps('email')} />
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
 
       <button type="submit">Submit</button>
     </form> */}
      </div>
    </div>
  );
};

export default Login;
