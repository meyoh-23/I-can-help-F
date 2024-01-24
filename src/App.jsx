import {Navbar} from "./components";
import {Routes, Route} from "react-router-dom"
import {Home, Members, Contacts, Activities, About  } from "./pages";
import Footer from "./components/Footer";
import BecomeAmember from "./components/BecomeAmember";
import Login from "./components/Login";

function App() {

  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/members" element={<Members/>}/>
          <Route path="/activities" element={<Activities/>}/>
          <Route path="/contact-us" element={<Contacts/>}/>
          <Route path="/become-amember" element={<BecomeAmember/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App;
