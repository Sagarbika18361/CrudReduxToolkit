import { createSlice } from "@reduxjs/toolkit";


export const crudSlice = createSlice({
  name: "crud",
  initialState: {
    students:
    
    [
      {
        id: 1,
        firstName: "Himadri",
        lastName: "Bhattathiri",
        email: "Chandra_Talwar73@hotmail.com",
        phone: "+91620-320-4125",
        address: "474 Banerjee Fords",
      },
      {
        id: 2,
        firstName: "Subhasini",
        lastName: "Bhattacharya",
        email: "Chetan17@yahoo.co.in",
        phone: "+91953-928-4930",
        address: "52520 Bhisham Brooks",
      },
      {
        id: 3,
        firstName: "Daevika",
        lastName: "Ganaka",
        email: "Bharat89@gmail.com",
        phone: "+91-917-1416065",
        address: "78079 Patel Park",
      },
      {
        id: 4,
        firstName: "Tanya",
        lastName: "Trivedi",
        email: "Birjesh_Sinha3@hotmail.com",
        phone: "+91-644-6939697",
        address: "57761 Shreyashi Junctions",
      },
      {
        id: 5,
        firstName: "Vimala",
        lastName: "Mehrotra",
        email: "Anamika.Ahluwalia1@hotmail.com",
        phone: "+91-704-4124157",
        address: "860 Gautama Turnpike",
      },
      {
        id: 6,
        firstName: "Chapala",
        lastName: "Tagore",
        email: "Rohan17@gmail.com",
        phone: "+91947-960-7538",
        address: "300 Chandrabhaga Knoll",
      },
      {
        id: 7,
        firstName: "Rajendra",
        lastName: "Ahuja",
        email: "Vasudeva_Tagore25@yahoo.co.in",
        phone: "+91-918-7520232",
        address: "4560 Dubashi Branch",
      },
      {
        id: 8,
        firstName: "Himadri",
        lastName: "Devar",
        email: "Amritambu_Talwar@hotmail.com",
        phone: "+919330236755",
        address: "1003 Girindra Rapids",
      },
      {
        id: 9,
        firstName: "Chandrakala",
        lastName: "Gowda",
        email: "Rajan51@gmail.com",
        phone: "+91-732-9504322",
        address: "967 Dhawan Burgs",
      },
      {
        id: 10,
        firstName: "Birjesh",
        lastName: "Embranthiri",
        email: "Bela.Sinha@yahoo.co.in",
        phone: "+91-834-5715321",
        address: "77860 Acharya Summit",
      },
      {
        id: 11,
        firstName: "Ghanaanand",
        lastName: "Tandon",
        email: "Deeksha.Varma12@hotmail.com",
        phone: "+91-709-3361753",
        address: "542 Ghanashyam Centers",
      },
      {
        id: 12,
        firstName: "Baalagopaal",
        lastName: "Verma",
        email: "Chandranath.Panicker@mail.com",
        phone: "+919432924857",
        address: "12208 Dwivedi Station",
      },
    ],
    viewStudent:[
      {
        firstName: "",
        lastName : "",
        email: "",
        address: "",
        phone: "",
      }
    ]
},reducers: {
  readStudent: (state, action) => {
    state.viewStudent = state.students.find((el) => el.id === action.payload);
  },
  clearStudentt: (state) => {
    state.viewStudent = {
        firstName: "",
        lastName : "",
        email: "",
        address: "",
        phone: "",
    }
  },
  addStudent: (state, action) => {
    state.students = [ action.payload , ...state.students ];
  },
  deleteStudent: (state, action) => {
    state.students = state.students.filter((el) => el.id !== action.payload);
  },
  // updateStudent: (state, action) => {
  //   console.log(state,action)
  //   // const { id, firstName, lastName , email ,address ,phone } = action.payload;
  //   console.log(action.payload.id , "idud")
  //     const existingUser  = state.students.filter((user) =>  user.id === action.payload.id  );
  //     //  let arr = existingUser.values();
  //     //  for (let val of arr){
  //     //    arr = val;
  //     //  }
  //     const existingUserObj  = Object.assign( {} , existingUser);
  //     console.log(existingUserObj , "this is exist")
  //      if (existingUserObj) {
  //      existingUserObj.id = action.payload.id;
  //       existingUserObj.firstName = action.payload.firstName;
  //        existingUserObj.lastName = action.payload.lastName;
  //        existingUserObj.email = action.payload.email;
  //        existingUserObj.address = action.payload.address;
  //        existingUserObj.phone = action.payload.phone ;
  //      }
  // },

  updateStudent: (state, action) => {
    state.students = state.students.map((el) =>
      el.id === action.payload.id ? action.payload : el
    );
  },
},
});
export const { readStudent ,clearStudentt, addStudent,deleteStudent,updateStudent } = crudSlice.actions;
export default crudSlice.reducer;
