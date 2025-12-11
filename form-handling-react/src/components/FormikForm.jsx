import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Formik submitting to API...", values);
        alert("User registered successfully (Formik)");
      }}
    >
      {(formik) => (
        <Form style={{ maxWidth: "400px" }}>
          <h2>Register (Formik Form)</h2>

          <div>
            <label>Username:</label>
            <Field name="username" type="text" />
            <ErrorMessage
              name="username"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <label>Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage
              name="email"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <label>Password:</label>
            <Field name="password" type="password" />
            <ErrorMessage
              name="password"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          <button style={{ marginTop: "20px" }} type="submit">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}
