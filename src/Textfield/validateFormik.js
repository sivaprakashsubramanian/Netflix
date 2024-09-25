// export const validate = values => {
//     const errors = {};
//     if (!values.firstName) {
//       errors.firstName = 'Required';
//     } else if (values.firstName.length > 15) {
//       errors.firstName = 'Must be 15 characters or less';
//     }

import { useField } from "formik"

  
//     if (!values.lastName) {
//       errors.lastName = 'Required';
//     } else if (values.lastName.length > 20) {
//       errors.lastName = 'Must be 20 characters or less';
//     }
  
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }
  
//     return errors;
//   };
export const MyTextInput=({label,...props})=>{
  const [field,meta]=useField(props);
  return(
    <div>
    <label htmlFor={props.id||props.name}>{label}</label>
    <input className={`mt-1 p-2 my-4  bg-gray-800 block w-full border outline-none rounded-md shadow-sm  ${meta.touched && meta.error ? 'border-red-500 ' : 'border-gray-300'}`} {...field}{...props} />
    {meta.touched && meta.error?(<div className="text-red-400">{meta.error}</div>):null}
    {/* {console.log(props,"gu")} */}
    </div>
  )

}
export const MyPasswordInput=({label,...props})=>{
  const [field,meta]=useField(props);
  return(
    <div>
    <label htmlFor={props.id||props.name}>{label}</label>
    <input className={`mt-1 p-2 my-4  bg-gray-800 block w-full border outline-none rounded-md shadow-sm  ${meta.touched && meta.error ? 'border-red-500 ' : 'border-gray-300'}`} {...field}{...props} />
    {meta.touched && meta.error?(<div className="text-red-400">{meta.error}</div>):null}
    {/* {console.log(field,"gu")} */}
    </div>
  )

}