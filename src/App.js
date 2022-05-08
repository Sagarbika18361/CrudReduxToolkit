import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import ViewStudent from "./Components/ViewStudent";
import Students from "./Components/Students";
import NotFound from "./Components/NotFound";
import EditStudent from "./Components/EditStudent"
import AddStudent from "./Components/AddStudent";


function App() {
  return (
    
        <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Students/> } />
            <Route path="student/:id" element={ <ViewStudent/> } />
            <Route path="*" element={ <NotFound/> } />
            <Route path="/addstudent" element={ <AddStudent /> } />
            <Route path="/editstudent/:id" element={ <EditStudent /> } />
          </Routes>
        </BrowserRouter>
        </>
      );
}

export default App;
