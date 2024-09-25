import React from 'react'
import { Formik,Form} from 'formik';
import { MyTextInput } from "../Textfield/validateFormik";
import * as Yup from 'yup';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"


const SignUp = ({isSignIn,setIsSignIn}) => {
    // const dispatch=useDispatch();
  return (
    <Formik 
  initialValues={{email:'',password:'',firstName:''}}
  validationSchema={Yup.object({
    firstName:Yup.string().max(12,'Must has 10 character or less').required('Required'),
    password:Yup.string().max(10,"Must have 8 or less").required('Required'),
    email:Yup.string().email('Invalid  Email ').required('Required')


  })}
  onSubmit={(values, { setSubmitting }) => {
    
        createUserWithEmailAndPassword(auth,values.email,values.password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        
        });

    setTimeout(() => {
      setSubmitting(false);
    }, 100);
  }}
  >
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
       <MyTextInput
        label="First Name"
        name="firstName"
        type="text"
        placeholder="jane"
        />
       

       
        <button className=" bg-red-400 rounded w-[100%] p-2 my-4" type="submit" >
          Sign Up
          </button>
          <p className=" cursor-pointer" onClick={()=>setIsSignIn(!isSignIn)}>
            { isSignIn?"New to Netflix? Sign Up":"Already Register?Sign in"}
          </p>
    </Form>
    </Formik>
  )
}

export default SignUp