  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Layout from "./Layout";
  import Home from "./Home";
  import Blogs from "./Blogs";
  import Contact from "./Contacts";
  import NoPage from "./Nopage";
  import BtnEvents from "./BtnEvents";
  import TaskApp from "./Tasks";
  
  function App() {
    return (
      <>
      <TaskApp/>
      <hr/>
      </>
    );
  }
export default App;