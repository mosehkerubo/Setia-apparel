import { Link } from "@mui/material";
import React, { useState } from "react";

const Register = () => {
  const [userinput, setuserinput] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleRegister(e) {
    e.preventDefault();
    const url =
      "https://floating-badlands-09507.herokuapp.com/api/auth/register/";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userinput),
    };

    return fetch(url, options)
      .then(res => res.json())
      .then(data => {
        if (data.code === 11000) {
          console.log("user already registered");
        } 
        else {
            console.log('nnnnnnnnnnnn')
          console.log(data);
          return data;
        }
      });
  }

  return (
    <div className="card-body">
      <form>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input
              name="lastName"
              type="text"
              className="form-control"
              onChange={(e) =>
                setuserinput({ ...userinput, username: e.target.value })
              }
            />
            <div className="invalid-feedback"></div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="username"
              type="text"
              className="form-control"
              onChange={(e) =>
                setuserinput({ ...userinput, email: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              onChange={(e) =>
                setuserinput({ ...userinput, password: e.target.value })
              }
            />
          </div>
          <button className="btn btn-primary" onClick={handleRegister}>
                 Register

          </button>
          {/* <Link href="/account/login" className="btn btn-link">Cancel</Link> */}
        </form>

        {/* <Link href="/account/register" className="btn btn-link">Register</Link> */}
      </form>
    </div>
  );
};
export default Register;
