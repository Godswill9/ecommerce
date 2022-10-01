import Header from "./header";
import Homepage from "./pages/homePage";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import Laptops from "./pages/Laptops";
import Gadgets from "./pages/Gadgets";
import Signup from "./pages/authentication/signup";
import Login from "./pages/authentication/login";
import FixPc from "./pages/fixPc";
import Phones from "./pages/phones";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route path={`/`} element={<Homepage/>}/>
            <Route path={`/signup`} element={<Signup/>}/>
            <Route path={`/login`} element={<Login/>}/>
            <Route path={`/findLaptops`} element={<Laptops/>}/>
            <Route path={`/findGadgets`} element={<Gadgets/>}/>
            <Route path={`/findPhones`} element={<Phones/>}/>
            <Route path={`/repairs`} element={<FixPc/>}/>
      </Routes>
      </BrowserRouter>
       {/* <Homepage/> */}
    </div>
  );
}

export default App;
