import { NextPage } from "next";
import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './index.module.css';
import * as Yup from 'yup';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { WithLogin } from "../../components/AuthLogin";
import {AuthMetaMask} from "../../components/AuthMetaMask";

const Quiz: NextPage = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const validate = Yup.object().shape({ //form validation here
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    address: Yup.string()
      .min(42, 'Too Short!')
      .max(42, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    answer: Yup.string().required('Required'),
    quizId: Yup.string().required('Required'),
  });
  return (
    <div className=" text-center max-w-screen-xl mx-auto px-4 py-8">
    <div className="container mx-md px-4">
     <h1 className="text-center font-extrabold text-lg ">Quiz Time</h1>
     <Formik
       initialValues={{
         name: '',
         address: '',
         email: '',
         answer: '',
         quizId:'',
       }}
       validationSchema={validate}
       onSubmit={values => {
         // same shape as initial values
         console.log(values); //do something to values
       }}
     >
       {({ errors, touched }) => (
         <Form>
           {/* styling at styles.global.css */}
           <label className="formTitles display: block">Name</label> 
           <Field name="name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}

            <label className="formTitles display: block">Wallet Address</label>
           <Field name="address" />
           {errors.address && touched.address ? (
             <div>{errors.address}</div>
           ) : null}
            <label className="formTitles display: block">Quiz Answer</label>
           <Field name="answer" />
           {errors.answer && touched.answer ? (
             <div>{errors.answer}</div>
           ) : null}
            <label className="formTitles display: block">Quiz ID</label>
           <Field name="quizId" />
           {errors.quizId && touched.quizId ? (
             <div>{errors.quizId}</div>
           ) : null}
            <label className="formTitles display: block">Email</label>
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <div>
           <button className="text-center font-medium display:block" type="submit"><div className="display:block text-center">Submit</div></button>
           </div>
         </Form>
       )}
     </Formik>
   </div>
   </div>
  );
};

export default WithLogin(AuthMetaMask(Quiz));
