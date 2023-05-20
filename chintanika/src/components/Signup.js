import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup(params) {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name:"",
    email: "",
    password: "",
    cpassword:""
  });
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent from reload
    const {name,email,password}=credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name:name,
        email:email,
        password:password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save auth token and redirect localstorage
      localStorage.setItem("token", json.authToken);
      console.log("token:"+json.authToken);
      navigate("/");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="container my-5">
        <h5 className="hero-heading fs-1">Create your account</h5>
        <p>Let's get started</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start col-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control w-30"
              id="name"
              placeholder=""
              onChange={onChange}
              name="name"
            />
          </div>
          <div className="mb-3 text-start col-6">
            <label htmlFor="email" className="form-label is-valid">
              Email address
            </label>
            <input
              type="email"
              className="form-control w-30"
              id="email"
              placeholder="name@example.com"
              onChange={onChange}
              name="email"
            />
          </div>
          <div className="mb-3 text-start col-6">
            <label htmlFor="password" className="form-label is-valid">
              Password
            </label>
            <input
              type="password"
              className="form-control w-30"
              id="password"
              placeholder=""
              onChange={onChange}
              name="password"
               minLength={5}
              required
            />
          </div>
          <div className="mb-3 text-start col-6">
            <label htmlFor="cpassword" className="form-label is-valid">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control w-30"
              id="cpassword"
              placeholder=""
              onChange={onChange}
              name="cpassword"
              minLength={5}
              required
            />
          </div>
          <div className="my-3 col-6">
            <button type="submit" className="btn hero">
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
export default Signup;
