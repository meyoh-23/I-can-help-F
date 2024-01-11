import {Navbar} from "./components";
import {Routes, Route} from "react-router-dom"
import {Home, Members, Contacts, Activities, About  } from "./pages";

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/members" element={<Members/>}/>
          <Route path="/activities" element={<Activities/>}/>
          <Route path="/contact-us" element={<Contacts/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
