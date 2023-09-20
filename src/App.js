//import React
import React, { useEffect, useState } from "react";
// import router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import End from "./pages/End";

//import Profiles
import Charity from "./pages/Charity";
import Laura from "./pages/Laura";
import Pearl from "./pages/Pearl";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading/Loading";

function App() {

  /*Introduce loading screen with useState */
  /*Loading screen is on */
  const [loading, setLoading] = useState(true)
    useEffect(() => {
      /*Loading screen will disappear after a 3 second timer*/
      setTimeout(() => setLoading(false), 3000)
    }, [])

    /*If loading, which will be true when the page is loaded for the first time or refreshed, then show loading component*/
    if (loading) {
      return <Loading />
    }

    /*After the loading screen runs the webpage will be returned as usual */
  return (
    <Router>
      <Header/>
      <Routes>
        <Route
          path="/little-altar"
          element={<Home/>}
        />
        <Route 
          path="/little-altar/charity"
          element={<Charity/>}
        />
        <Route 
          path="/little-altar/laura"
          element={<Laura/>}
        />
        <Route 
          path="/little-altar/pearl"
          element={<Pearl/>}
        />
        <Route
          path="/little-altar/end"
          element={<End/>}
        />
        <Route 
          path="/little-altar/about"
          element={<About/>}
        />
        <Route 
          path="*" 
          element={<Error/>} 
        />
      </Routes>
      <Footer/>
    </Router>
  )
}


 //const [profileSelected,setProfileSelected] = useState(false);

 /*  //function that checks and renders selected section 
  const renderSection = () => {
    switch (profileSelected) {
      case "landing":
        return <Landing />;
      case "profile":
        return <Profile />;
      case "about":
        return <About />;
      default:
        return <Landing />;
    }
  }; */
export default App;
