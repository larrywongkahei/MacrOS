import { NavLink } from "react-router-dom"
const NavBar = () => {
    return(
        
        <nav>
            <h2>I am thee Navbar</h2>
            <ul>
                <li>
                    <NavLink to="/">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/journal">Journal</NavLink>
                </li>
            </ul>
        </nav>
        
    )
}

export default NavBar;