import { NavLink } from "react-router-dom"
const NavBar = ({user}) => {

    // const logo = require("../logo.png")

    return(
        
        // <nav className="navbar-brand navbar-expand-lg bg-light">
        //     {user ? (
        //     <h2>{user.name}'s Navbar</h2>
        //     ): <h2> User's Navbar</h2>}
        //     <ul>
        //         <li>
        //             <NavLink to="/">Dashboard</NavLink>
        //         </li>
        //         <li>
        //             <NavLink to="/journal">Journal</NavLink>
        //         </li>
        //     </ul>
        // </nav>

      

        <nav class="navbar sticky-top navbar-expand-lg bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    {user? (
                        <div>
                            <a class="navbar-brand" href="#">{user.name}'s macrOS</a>
                            {/* <img src={logo}></img> */}
                        </div>

                    ): <a class="navbar-brand" href="#">macrOS</a>}
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Dashboard</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/journal">Journal</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        
    )
}

export default NavBar;