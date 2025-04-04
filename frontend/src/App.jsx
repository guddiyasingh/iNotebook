
import {  BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
// import Home from "./pages/Home/Home";
// import Home from "./pages/Home/Home"


const routes = (

  <Router>
    <Routes>
      <Route path="/dashboard" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path ="/signup" element = {<SignUp/>}/>
    </Routes>
  </Router>

)


function App ()  {

  return (
   <div>
    {routes}
   </div>
  )
}

export default App
