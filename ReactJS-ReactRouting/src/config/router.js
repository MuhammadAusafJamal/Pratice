import { useEffect , useState } from "react";
import { BrowserRouter , Routes , Route ,Navigate } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Profile from "../pages/profile";


function AppRouter(){
    const [user , setUser] = useState(false)
    useEffect(()=>{
       const isUser = localStorage.getItem("user")
       if(isUser){
        setUser(true)
       }
    },[])
    return(
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={user ? <Navigate to={"/profile"}/>   : <Home />  } ></Route>
                <Route path="/about" element={<About />} ></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/profile" element={user ? <Profile /> : <Navigate to={"/"} /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}


export default AppRouter;