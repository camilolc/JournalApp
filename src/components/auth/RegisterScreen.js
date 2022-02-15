import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

import { setError, removeError } from "../../actions/ui";
export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.ui);

  const { msgError } = state;
  // console.log(msgError);

  const [formValues, handleInputChange] = useForm({
    name: "hernando",
    email: "nando@gmail.com",
    password: "123456",
    password2: "123456",
  });
  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormvalid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormvalid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("name is required"));
      // console.log("name is required");
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("email is not valid"));
      // console.log("email is not valid");
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(
        setError(
          "password must have at least 6 characters and match each other"
        )
      );
      // console.log("password must have at least 6 characters and match each other");
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form
        onSubmit={handleRegister}
        className="animate__animated animate__fadeIn animate__faster"
      >
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          onChange={handleInputChange}
          value={name}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          onChange={handleInputChange}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          onChange={handleInputChange}
          value={password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          onChange={handleInputChange}
          value={password2}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>
        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
