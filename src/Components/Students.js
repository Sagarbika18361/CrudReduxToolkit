import React from "react";
import { useSelector  } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { deleteStudent } from "../Features/crudSlice";

const Students = () => {
  const dispatch =useDispatch()

  const deleteStu = (id) =>{
    // console.log(id ,"id")
    dispatch(deleteStudent (id))
  }
  
  const studentsData = useSelector((state) => state.stu.students);
  // console.log(studentsData[0].firstName);
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <Link to="/addstudent" className="btn btn-sm btn-warning mt-2">Add User</Link>
        </div>

        <div className="row m-0 p-0 ">
          {studentsData.map((data,i) => {
            return (
              <div className="col-3 m-0 p-0 mb-4 mt-4 me-4 ms-2" style={{width:"288px" , height:"155px"}} key={i}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title overflow-hidden">
                      Name: {data.firstName} {data.lastName}
                    </h6>
                    <h6 className="card-text overflow-hidden"> {data.email}</h6>
                    <h6 className="card-text overflow-hidden">Phone: {data.phone}</h6>
                    <Link to={`/student/${data.id}`} className="btn btn-sm btn-primary ms-3 mt-2 me-2">View</Link>
                    <Link to={`/editstudent/${data.id}`} className="btn btn-sm btn-success me-2 mt-2">Edit</Link>
                    <a href="#" onClick={() => deleteStu(data.id)} className="btn btn-sm btn-danger me-2 mt-2">Delete</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Students;
