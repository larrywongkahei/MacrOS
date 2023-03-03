import { NavLink } from "react-router-dom"
const NavBar = ({user}) => {
    return(
        
        <nav className="component-container navbar">
            {user ? (
            <h2>{user.name}'s Navbar</h2>
            ): <h2> User's Navbar</h2>}
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