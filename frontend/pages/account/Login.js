import React, { useState } from "react";
import styled from "styled-components";
import yup from "yup";
import Footer from "../../src/Components/Footer/Footer";
import Navbar from "../../src/Components/Navbar/Navbar";
const LoginContainer = styled.div`
  // background-color: green;
  display:flex;
  flex-direction:column;
  background-color:  lightgray;

  position:
`;

const Login = () => {
  const [logininput, setlogininput] = useState({
    username: "",
    password: "",
  });

  function handleLogin(e) {
    e.preventDefault();
    const logurl =
      "https://floating-badlands-09507.herokuapp.com/api/auth/login";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logininput),
    };

    return fetch(logurl, options)
      .then((res) => res.json())
      .then((data) => {
        if ((data.code === 11000)) {
          console.log("user already logged in");
        } else {
          console.log(data);
          return data;
        }
      });
  }

  // }

  return (

    <div>
      <Navbar />
    <LoginContainer>
      <h2>Login</h2>
      {/* <Input type="email" placeholder="Email"/>
<Input type="password" placeholder="Password" />
<MuteLink href="#">Forget your password?</MuteLink>
<SubmitButton type="Submit">Signin</SubmitButton> */}
      <>
        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            type="text"
            className="form-control"
            onChange={(e) =>
              setlogininput({ ...logininput, username: e.target.value })
            }
          />
          <div className="invalid-feedback"></div>

          <div className="form-group">
            <label>Password</label>
            <div className="invalid-feedback"></div>
            <input
              name="password"
              type="password"
              onChange={(e) =>
                setlogininput({ ...logininput, password: e.target.value })
              }
            />
            <div className="invalid-feedback"></div>
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </>
    </LoginContainer>
    <Footer/>
    </div>
  );
};

export default Login;
