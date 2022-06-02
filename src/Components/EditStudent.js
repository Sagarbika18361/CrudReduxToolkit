import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { clearStudentt, updateStudent } from "../Features/crudSlice"

const EditStudent = () => {
  // const selector = useSelector((state)=>state.stu.students);
  // const { pathname } = useLocation();
  // const userId = pathname.replace("/edit-user/", "");


   const {id} = useParams();
  const user = useSelector((state) => state.stu.students)
  
  const data = user.find((user) => user.id === id )

  // console.log(data)


  // console.log(selector , id)

  const dispatch =useDispatch()
  const navigate = useNavigate()

  const [ values, setValues ] = useState(
            {
                id : id ,              
                firstName: data.firstName,
                lastName: data.lastName ,
                email: data.email ,
                phone: data.phone ,
                address: data.address,
                
            }
        )
  const handleUpdate = (e) =>{
      e.preventDefault()
      // console.log(values)
      dispatch(updateStudent(values, id ))
      navigate("/")
      return () => {
        dispatch(clearStudentt())
      };
  }

  const editStudent =(e) =>{
    setValues ( { ...values, [e.target.name ] : e.target.value })
    // console.log(...values)
  }


return (
  <>
    <div className=" container mt-5" style={{ height: "100vh" }}>
      <form >
        <div className="mb-3">
          <label className="form-label">
           First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={editStudent}
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
            onChange={editStudent}
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
            onChange={editStudent}
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
            onChange={editStudent}
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
            onChange={editStudent}
            value={values.phone}
            name="phone"
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleUpdate} >
          UPDATE STUDENT
        </button>
      </form>
    </div>
  </>
);
};

export default EditStudent;


// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { updateStudent as UpdateStudent  } from "../Features/crudSlice";



// const EditStudent = () => {

//   const selector = useSelector( state => state.stu.students);
   
//   console.log(selector , "this is ud ")
//   // const {  firstName, lastName , email ,address ,phone  } = selector ;
//   console.log( selector[0].firstName  , "this is  my ")


//      const dispatch =useDispatch()
//     const navigate = useNavigate()
//     const param = useParams()

//     const [ values, setValues ] = useState(
//         {
//             firstName: selector[0].firstName,
//             lastName: selector[0].lastName ,
//             email: selector[0].email ,
//             phone: selector[0].phone ,
//             address: selector[0].address,
            
//         }
//     )
//     console.log(values ," this is avlues")
//     const handleEditUser =(e) =>{
//         e.preventDefault()
//         // dispatch(addStu(values))
//         navigate("/")
//     }

//     useEffect(() =>{
//       dispatch(UpdateStudent(param.id))
//     },[])

//     const addStudent= (e)=>{
//         // console.log( e.target.value , "this is onchange")
//         setValues ( { [e.target.name ] : e.target.value })
//     }

//   return (
//     <>
//       <div className=" container mt-5" style={{ height: "100vh" }}>
//         <form className="">
//           <div className="mb-3">
//             <label className="form-label">
//              First Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               onChange={addStudent}
//               name="firstName"
//               value={values.firstName}
//             //   email:e.target.value
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">
//              Last Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               onChange={addStudent}
//               value={values.lastName}
//               name="lastName"
//             />
//           </div>
//           <div className="mb-3">
//             <label  className="form-label">
//               E-mail
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleInputPassword1"
//               onChange={addStudent}
//               value={values.email}
//               name="email"
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">
//              Address
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               onChange={addStudent}
//               value={values.address}
//               name="address"
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">
//              Phone Number
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               onChange={addStudent}
//               value={values.phone}
//               name="phone"
//             />
//           </div>
//           <button type="submit" className="btn btn-primary" onClick={handleEditUser}>
//             UPDATE STUDENT
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default EditStudent;
