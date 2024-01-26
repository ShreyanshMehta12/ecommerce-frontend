import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loadUser, updateUserProfile } from "../../../redux/actions/UserAction";
import { useAlert } from "react-alert";
import Loader from "../../layouts/loader/Loader";
import { UPDATE_PROFILE_RESET } from "../../../redux/constants/UserConstant";
import '../login.css'
function UpdateProfile() {
  const { user } = useSelector((state) => state.auth);
  const { error, isUpdated , loading } = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setMobile] = useState();
  const [gender, setGender] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [pincode, setPincode] = useState();
  const [image, setImage] = useState();


  const Profilesubmithandler = (e) => {
    e.preventDefault();
    // console.log(name, email, number, gender, state, city, pincode, image);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", number);
    formData.append("gender", gender);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("pincode", pincode);
    image && formData.append("image", image);
    dispatch(updateUserProfile(formData));
    // console.log(formData)
  };

  useEffect(()=>{
    if(user){
      setName(user.name)
      setEmail(user.email)
      setImage(user?.image?.url)
      setMobile(user.number)
      setGender(user.gender)
      setState(user.state)
      setCity(user.city)
      setPincode(user.pincode)
    }
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
  }
  if (isUpdated) {
      alert.success('User Updates Successfull')
      dispatch(loadUser())
      navigate('/profile')

      dispatch({
          type: UPDATE_PROFILE_RESET
      })
  }
  },[dispatch,alert,isUpdated,navigate])

  return (
    <>
     {
      // loading ? (
      //   <Loader/>
      // ) : (
        <div className="container">
        <div className="main-body">
          {/* Breadcrumb  */}

          <div className="container-fluid">
              <div className="row px-xl-5">
                <div className="col-12">
                  <nav className="breadcrumb bg-light mb-30">
                    <Link className="breadcrumb-item text-dark" to="/">
                      Home
                    </Link>
                    <Link className="breadcrumb-item text-dark" to="/">
                      User
                    </Link>
                    <span className="breadcrumb-item active">User Profile</span>
                  </nav>
                </div>
              </div>
            </div>
            {/* Breadcrumb */}

          <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
                <div className="card row" style={{height:'200px'}}>
                  <div className="card-body">
                    <div className="align-items-center text-center">
                      <img
                        src={user?.image?.url}
                        alt={user && user.name}
                        className="rounded-circle"
                        width="150"
                      />
                      <div className="mt-5 mb-3">
                        <h4>{user && user.name}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mt-3 icons " style={{height:'210px'}}>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <Link to="/profile">
                        <h6>
                          <i className="fas fa-user px-4"></i>MY Profile
                        </h6>
                      </Link>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <Link to="/order">
                        <h6>
                          <i className="fas fa-shopping-bag px-4"></i>MY ORDER
                        </h6>
                      </Link>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <Link to="/cart">
                        <h6>
                          <i className="fas fa-shopping-cart px-4"></i>MY CART
                        </h6>
                      </Link>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <Link to="/change_password">
                        <h6>
                          <i className="fas fa-key px-4" ></i>CHANGE PASSWORD
                        </h6>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
              <div className="card mb-3 px-3 ">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12">
                      <h6 className="mb-3 mt-3 text-center" style={{fontSize:"20px"}}>EDIT INFORMATION</h6>
                    </div>
                  </div>
                  <hr className="mb-2" />
                  <div>
                    <form onSubmit={Profilesubmithandler} className="p-2">
                      <div className="mb-3">
                        <input
                        value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Name"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                        value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="form-control"
                          placeholder="Enter Your Email Address"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          value={number}
                          onChange={(e) => setMobile(e.target.value)}
                          type="number"
                          className="form-control"
                          placeholder="Enter Your Mobile Number"
                        />
                      </div>
                      <select
                        onChange={(e) => setGender(e.target.value)}
                        value={gender}
                        class="form-control mb-3"
                        aria-label="Default select example"
                      >
                        <option selected>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>

                      <select
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                        class="form-control mb-3"
                        aria-label="Default select example"
                      >
                        <option selected>State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">
                          Arunachal Pradesh
                        </option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                      </select>
                      <div className="mb-3">
                        <input
                        value={city}
                          onChange={(e) => setCity(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="City"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          onChange={(e) => setPincode(e.target.value)}
                          value={pincode}
                          type="number"
                          className="form-control"
                          placeholder="Pincode"
                        />
                      </div> 
                      <div className="mb-3">
                      <img src={user?.image?.url} height={"50px"} alt=""/>
                        <input
                          onChange={(e) => setImage(e.target.files[0])}
                          type="file"
                          name="image"
                          className="form-control"
                        />
                      </div>
                      <button type="submit" className="btn btn-info mx-2">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // )
     }
     
    </>
  );
}

export default UpdateProfile;
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useAlert } from "react-alert";
// import { useNavigate } from "react-router-dom";
// // import Loader from "../../layouts/loader/Loader";
// import '../register.css'
// import { CLEAR_ERRORS, UPDATE_PROFILE_RESET } from "../../../redux/constants/UserConstant";
// import { loadUser, updateUserProfile } from "../../../redux/actions/UserAction";
// function UpdateProfile() {
//   const { user } = useSelector((state) => state.auth);
//   const { error, isUpdated, loading } = useSelector(state => state.user)
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const alert = useAlert();
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [image, setImage] = useState();

//   useEffect(() => {
//     if (user) {
//       setName(user.name);
//       setEmail(user.email);
//       setImage(user?.image?.url);
//     }
//     if (error) {
//       alert.error(error)
//       dispatch(CLEAR_ERRORS())
//   }
//   if (isUpdated) {
//       alert.success('User Updates Successfull')
//       dispatch(loadUser())
//       navigate('/Profile')

//       dispatch({
//           type: UPDATE_PROFILE_RESET
//       })
//   }
//   },[dispatch,alert,error,isUpdated,navigate]);

//   const submithandler = (e) => {
//     e.preventDefault();
//     const formData = new FormData()
//     formData.append("name",name);
//     formData.append("email",email);
//     image && formData.append('image',image);
//     dispatch(updateUserProfile(formData))
//   };
//   return (
//     <>
//       {/* {loading ? (
//         <Loader />
//       ) : ( */}
//         <div className="fluid-container">
//           <div className="row bg bgpro">
//             <div className="col-md-12">
//               <div className="container loginblock registerpro ">
//                 <form onSubmit={submithandler}>
//                   <h1 className=" text-center mt-3">Update Profile</h1>
//                   <hr />

//                   <div className="mb-3 mt-4">
//                     <label htmlFor="" className="">UserName</label>
//                     <input
//                       onChange={(e) => setName(e.target.value)}
//                       type="text"
//                       name="name"
//                       value={name}
//                       placeholder="UserName"
//                       className="form-control h"
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                   <label htmlFor="" className="">Email</label>
//                     <input
//                       onChange={(e) => setEmail(e.target.value)}
//                       type="email"
//                       name="email"
//                       value={email}
//                       placeholder="Email"
//                       className="form-control h"
//                       required
//                     />
//                   </div>

//                   <p>Profile Picture</p>
//                   <div className="mb-3 d-flex">
//                     <img src={user?.image?.url} height={"50px"} alt="" />
//                     <input
//                       onChange={(e) => setImage(e.target.files[0])}
//                       type="file"
//                       name="image"
//                       className="form-control mt-2 "
//                       style={{ marginTop: "-15px" }}
                      
//                     />
//                   </div>
//                   <button type="submit" className="form-control">
//                     Submit
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       {/* )} */}
//     </>
//   );
// }

// export default UpdateProfile;
