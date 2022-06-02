import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { clearStudentt, readStudent } from "../Features/crudSlice";
import { useDispatch, useSelector } from "react-redux";

const ViewStudent = () => {
  const params = useParams();
  // console.log(param);
  const selector =useSelector((state)=> state.stu.viewStudent)
  console.log(selector,"this is")
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readStudent(params.id));
    return () => {
      dispatch(clearStudentt())
    };
  });

  return (
    <>
    <div className=" row m-0 d-flex  justify-content-center align-items-center ms-5 me-5  " style={{height:"100vh"}}>
      <div className="card text-center pt-5 pb-5 border border-danger" > 
        <div className="card-body">
          <h5 className="card-title"> Id: {selector.id} </h5>
          <h5 className="card-title"> Name: {selector.firstName} {selector.lastName}</h5>
          <h5 className="card-text">
            Email:{selector.email}
          </h5>
          <h5>
            Phone Number : {selector.phone}
          </h5>
          <h5>
           Address : {selector.address}
          </h5>
        </div>
      </div>
    </div>
    </>
  );
};

export default ViewStudent;
