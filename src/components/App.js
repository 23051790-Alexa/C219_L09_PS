import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Diplomas from "./Diplomas";
import Diploma from "./Diploma";
import Module from "./Module";
import Register from "./Register";
import Header from "./Header";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header/>
      
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="diplomas" element={<Diplomas />}>
        <Route path=":dipId" element={<Diploma />}>
          <Route path=":moduleId" element={<Module />} />
      </Route>
      <Route indec element={<h3>Select a category from above</h3>} />
      </Route>
      <Route path="register" element={<Register />} />
      <Route path="confirmation" element={<Confirmation />} />
      <Route
        path="*"
        element={<h1 className="not-found">Page Not Found</h1>}
      />
    </Routes>


      <footer className="container">
        &copy;2024 | <a href="https://www.rp.edu.sg/schools-courses/">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
