// import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {

  const user = false;
  return (
    // <Router>
    //   <TopBar />
    //   <Routes>
    //         <Route exact path="/" element={user ? <Home /> : <Register />}/>
    //         <Route exact path="/register" element={user ? <Home /> : <Register />}/>
    //         <Route exact path="/login" element={user ? <Home /> : <Login />} />
    //         <Route exact path="/write" element={user ? <Write /> : <Register />} />
    //         <Route exact path="/settings" element={user ? <Settings /> : <Register />} />
    //         <Route exact path="/post/:postId" element={  <Single />} />
    //       </Routes>
    //     </Router>


    <Router>
      <TopBar />

    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/write" element={<Write />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/post/:postId" element={<Single />} />
    </Routes>
</Router>

     
  );
}

export default App;
