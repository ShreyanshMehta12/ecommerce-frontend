import React, { useEffect, useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import '../user/login.css'
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors, login_user } from '../../redux/actions/UserAction'
import { useAlert } from "react-alert";


function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const alert = useAlert()
  

  const [email,setEmail] = useState()
  const [password,setpassword] = useState()
  const { isAuthenticated, error, loading } = useSelector((state) => state.auth)

  const submithandler = (e)=>{
    e.preventDefault()
    // console.log(email,password)
    dispatch(login_user(email,password))
  }
  useEffect(() => {
    if (error) {
        alert.error(error);
        dispatch(clearErrors());
    }
    if (isAuthenticated) {
        navigate("/");
    }
}, [error, alert, dispatch, isAuthenticated, navigate]);
  return (
    <>
      <div className="container-fluid">
          <div className="row bg">
            <div className="col-md-12 mt-4">
              <form onSubmit={submithandler}>
                <div className="loginblock head mt-5 registerlogin container">
                  <h1 style={{ textAlign: "center", marginTop: '20px' }}>Login</h1>
                  <hr />
                  <br />
                  <div className="md-mb-3">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-3 mt-1">
                    <input
                      onChange={(e) => setpassword(e.target.value)}
                      type="Password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      required
                    />
                  </div>
                  <button type="submit" className="form-control">
                    Submit
                  </button>
                  <h6>
                    DON'T HAVE A ACCOUNT?{" "}
                    <a href="/register">REGISTER NOW</a>
                  </h6>
                </div>
              </form>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </>
  )
}

export default Login