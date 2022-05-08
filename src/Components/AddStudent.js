import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent as addStu } from "../Features/crudSlice";



const AddStudent = () => {

    const dispatch =useDispatch()
    const navigate = useNavigate()

    const [ values, setValues ] = useState(
        {
            id:new Date().getTime().toString(),
            firstName:"",
            lastName:"",
            email:"",
            phone: "",
            address:"",
            
        }
    )
    const handleAddUser =(e) =>{
        e.preventDefault()
        console.log(values)
        dispatch(addStu(values))
        navigate("/")
    }

    const addStudent= (e)=>{
        // console.log( e.target.value , "this is onchange")
        setValues ( { ...values, [e.target.name ] : e.target.value })
    }

  return (
    <>
      <div className=" container mt-5" style={{ height: "100vh" }}>
        <form className="">
          <div className="mb-3">
            <label className="form-label">
             First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={addStudent}
              name="firstName"
              value={values.firstName}
            //   email:e.target.value
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
             Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={addStudent}
              value={values.lastName}
              name="lastName"
            />
          </div>
          <div className="mb-3">
            <label  className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              onChange={addStudent}
              value={values.email}
              name="email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
             Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={addStudent}
              value={values.address}
              name="address"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
             Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={addStudent}
              value={values.phone}
              name="phone"
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleAddUser}>
           CREATE NEW STUDENT
          </button>
        </form>
      </div>
    </>
  );
};

export default AddStudent;
