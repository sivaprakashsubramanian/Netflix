import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { MyTextInput } from "../Textfield/validateFormik";
import * as Yup from 'yup';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";

const SignIn = ({isSignIn,setIsSignIn}) => {
    const dispatch=useDispatch();
  return (
    <div>
        <Formik 
  initialValues={{email:'',password:''}}
  validationSchema={Yup.object({
    password:Yup.string().max(10,"Must have 8 or less").required('Required'),
    email:Yup.string().email('Invalid  Email ').required('Required')


  })}
  onSubmit={(values, { setSubmitting }) => {
    // console.log(values,"kikikki");
    // console.log(!isSignIn,"zxzx")
    // if(!isSignIn)
    //   {
    //     createUserWithEmailAndPassword(auth,values.email,values.password)
    //     .then((userCredential) => {
    //       // Signed up 
    //       const user = userCredential.user;
          
    //       // ...
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       setErrMsg(errorCode+" "+errorMessage)
    //       // ..
    //     });
    //   }
    //   else{
        signInWithEmailAndPassword(auth,values.email,values.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // console.log(user,"sivabinaya");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // setErrMsg(errorCode+" "+errorMessage)
  });
      
    //   }
    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(values,"ki");
      setSubmitting(false);
    }, 100);
  }}
  >
   
      {/* <label htmlFor="email">Email</label>
      <Field name="eamil" type="text" className=" p-2 my-4 rounded w-[100%] bg-gray-800"/>
      <ErrorMessage name="email"/> */}
      
      {/* <label htmlFor="firstName">First name</label>
      <Field name="firstName" type="text" className=" p-2 my-4 rounded w-[100%] bg-gray-800"/>
      <ErrorMessage name="firstName"/>
      <label htmlFor="secondName">Email</label>
      <Field name="secondname" type="text" className=" p-2 my-4 rounded w-[100%] bg-gray-800"/>
      <ErrorMessage name="secondname"/> */}
       <Form className="bg-black absolute w-3/12 p-10 my-36 mx-auto left-0 right-0 text-white">
      <MyTextInput
        label="Email Address"
        name="email"
        type="email"
        placeholder="jane@formik.com"
        />
         <MyTextInput
        label="Password"
        name="password"
        type="password"
        placeholder="enter your password"
        />
       
       

       
        <button className=" bg-red-400 rounded w-[100%] p-2 my-4" type="submit" >
          Sign In
          </button>
          <p className=" cursor-pointer" onClick={()=>setIsSignIn(!isSignIn)}>
            { isSignIn?"New to Netflix? Sign Up":"Already Register?Sign in"}
          </p>
    </Form>
    </Formik>
    </div>
  )
}

export default SignIn