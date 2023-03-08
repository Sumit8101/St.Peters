import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Career from "./Components/Career";
import About from "./Components/About";
import Home from "./Components/Home";
import Staff from "./Components/Staff";
import Mission_vision from "./Components/Mission_vision";






function App() {
 

 
  
  const router = createBrowserRouter([
    
    
    { 
      path: "/",
      element: <Home />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Career",
      element: <Career />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Staff",
      element: <Staff />,
    },
    {
      path: "/Mission_vision",
      element: <Mission_vision />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    <Footer />
    
    </>
  );
}

export default App;