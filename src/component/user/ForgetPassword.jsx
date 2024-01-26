import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ForgetPassword() {
    const handleSubmit = e =>{
        e.preventDefault()

        const data = {
            email: this.email
        }

        axios.post('ForgetPassword',data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err =>{
                console.log(err)
            }
        )
    }
  return (
    <>
      <div className="container-fluid wh">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card shadow-lg login bg-secondary">
                <h3 className=" text-center pt-4 ">Forget Password</h3>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      {/* <label>UserName:</label> */}
                      <input
                    //   onChange={(e)=>this.email(e.target.value)}
                      onChange={(e) => this.email = e.target.value}
                        type="text"
                        name=""
                        className="form-control "
                        placeholder="Email"
                      />
                    </div>
                    <center>
                      {" "}
                      <button type="submit" class="btn btn-success ">
                        Send OTP
                      </button>
                    </center>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
