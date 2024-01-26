import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../user/register.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/UserAction";
import { useAlert } from "react-alert";
import { CLEAR_ERRORS } from "../../redux/constants/UserConstant";

function Registration() {
  const { isAuthenticated, error } = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [image, setAvtar] = useState("");
  const dispatch = useDispatch();
  const history = useNavigate();
  const alert = useAlert();

  const submithandler = (e) => {
    e.preventDefault();
    // console.log(name,email,password,cpassword)
    // console.log(image)
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("cpassword", cpassword);
    myForm.append("image", image);
    dispatch(register(myForm));
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERRORS);
    }
    if (isAuthenticated) {
      history("/login");
    }
  }, [dispatch, alert, error, isAuthenticated, history]);

  return (
    <>
      <div className="fluid-container">
        <div className="row bg">
          <div className="col-md-12">
            <div className="container loginblock register ">
              <form onSubmit={submithandler}>
                <h1>Register Here</h1>
                <hr />

                <div className="mb-3 mt-4">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name=""
                    placeholder="UserName"
                    className="form-control h"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name=""
                    placeholder="Email"
                    className="form-control h"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) => setpassword(e.target.value)}
                    type="password"
                    name=""
                    placeholder="Password"
                    className="form-control h"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) => setCPassword(e.target.value)}
                    type="confirm password"
                    name=""
                    placeholder="Confirm Password"
                    className="form-control h"
                    required
                  />
                </div>

                <p>Profile Picture</p>
                <div className="mb-3">
                  <input
                    onChange={(e) => setAvtar(e.target.files[0])}
                    type="file"
                    name="image"
                    className="form-control"
                    style={{ marginTop: "-15px" }}
                    required
                  />
                </div>
                <button type="submit" className="form-control">
                  Register
                </button>
                <h6>
                  HAVE A ACCOUNT? <Link to="/login">LOGIN NOW</Link>
                </h6>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
