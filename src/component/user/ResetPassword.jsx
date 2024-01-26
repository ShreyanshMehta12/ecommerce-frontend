import React from 'react'
import axios from 'axios'
import { redirect } from 'react-router-dom'

export default function ResetPassword() {

  const handleSubmit = e =>{
    e.preventDefault()

    const data = {
      token: this.props.match.params.id,
      password: this.password,
      confirm_password: this.password_confirm
    }

    axios.post('ResetPassword',data).then(
      res => {
        console.log(res)
        this.setState({
          reset: true
        })
      }
    ).catch(
      err =>{
        console.log(err);
      }
    )
}
    if(ResetPassword){
      return <redirect to={'/login'} />
    }
  return (
    <>
    <div className="container-fluid wh">
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card shadow-lg login bg-secondary">
              <h3 className=" text-center pt-4 ">Reset Password</h3>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    {/* <label>UserName:</label> */}
                    <input
                    onChange={e => this.password = e.target.value}
                      type="text"
                      name=""
                      className="form-control "
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-4">
                    {/* <label>UserName:</label> */}
                    <input
                    onChange={e => this.password_confirm = e.target.value}
                      type="text"
                      name=""
                      className="form-control "
                      placeholder="Confirm Password"
                    />
                  </div>
                  <center>
                    <button type="submit" class="btn btn-success ">
                      Submit
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
  )
}
