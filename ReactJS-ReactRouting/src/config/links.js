import { NavLink } from "react-router-dom";

function Links() {
    return (
        <ul>
            <li><NavLink to={"/"} >Home</NavLink></li>
            <li><NavLink to={"/about"} >About</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
            <li><NavLink to={"/profile"}>Profile</NavLink></li>
        </ul>
    )
}
export default Links;