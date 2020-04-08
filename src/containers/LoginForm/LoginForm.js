import React, { useState } from "react"
import { Redirect } from "react-router"
import { Formik, Form} from "formik"
import * as Yup from "yup";
import axios from 'axios';
import {
  Alert,
  AlertIcon,
} from "@chakra-ui/core";
import InputText from './../../components/InputText/InputText'
import SubmitButton from './../../components/SubmitButton/SubmitButton'
import style from './LoginForm.module.css'

const LoginForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  if (result && result.redirect) {
    return (
      <Redirect push to={result.redirect} />
    )
  }

  return (
    <div className={style.LoginForm}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email addresss")
            .required("Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
        })}
        onSubmit={(values, actions) => {
          setLoading(true);
          setTimeout(() => {
            axios
              .post("https://guild.ehsangazar.com/api/login", {
                email: values.email,
                password: values.password,
              })
              .then((response) => {
                actions.setSubmitting(false);
                setLoading(false);

                if (response.data.error) {
                  setResult({
                    messages: Object.values(response.data.data).map(
                      (item) => item[0]
                    ),
                    status: "error",
                  });
                  return;
                }
                if (response.data.data.role !== "1"){
                  setResult({
                    messages: ["You do not have access"],
                    status: "error",
                  });
                  return
                }

                localStorage.setItem(
                  "user",
                  JSON.stringify(response.data.data)
                );

                setResult({
                  messages: ["You have successfully logged in."],
                  status: "success",
                  redirect: "/",
                });
              })
              .catch((error) => {
                setResult({
                  messages: ["Something went wrong."],
                  status: "error",
                });
              });
          }, 2000);
        }}
      >
        <Form>
          <InputText
            label="Email"
            name="email"
            type="email"
            placeholder="Email address"
          />
          <InputText
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />

          <SubmitButton isLoading={loading}>Login</SubmitButton>
          {result &&
            result.messages.map((item, index) => (
              <Alert key={`Alert${index}`} status={result.status}>
                <AlertIcon />
                {item}
              </Alert>
            ))}
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
