import {  useNavigate } from "react-router-dom";
import Links from "../config/links";


function Home() {
    const navigate = useNavigate();
    const login = () => {
        localStorage.setItem("user", true)
        navigate("/profile")
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={login}>Login</button>
            <Links/>         

        </div>
    )
}

export default Home;