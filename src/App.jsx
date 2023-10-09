import "./App.css";
import Home from "./modules/Home";
import Catalogo from "./modules/Catalogo";
import Nav from "./modules/Nav";
import { useRef } from "react";
function App() {

  const refHome = useRef();
  const refCtag = useRef();


  return (
    <>
      <Nav fes = {[refHome,refCtag]} ></Nav>
      <div ref={refHome}><Home fes1={[refHome,refCtag]}></Home></div>
      <div className="catalogo" ref={refCtag}><Catalogo></Catalogo></div>
    </>
  );
}

export default App;
