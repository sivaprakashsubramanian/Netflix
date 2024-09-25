
import { useFormik } from "formik";

export  const Formikdata =()=>{ 
    const formik=useFormik({
    initialValues: { email: "" },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })};