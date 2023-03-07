import { NavLink } from "react-router-dom"
import ProgressBar from 'react-bootstrap/ProgressBar'

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

<<<<<<< Updated upstream
      

        <nav className="navbar sticky-top navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    {user? (
                        <div>
                            <a className="navbar-brand" href="#">{user.name}'s macrOS</a>
                            {/* <img src={logo}></img> */}
                        </div>
=======

    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">Welcome to macrOS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/journal">Journal</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/">Calories
                            <ProgressBar striped animated min={0} max={user.caloriesGoal} now={dayTotals.calories} label={`${currentProgressCalories}%`} />
                        </Nav.Link>
                        <Nav.Link href="/">Protein
                            <ProgressBar striped animated variant="success" max={user.proteinGoal}  now={dayTotals.protein} label={`${currentProgressProtein}%`} />
                        </Nav.Link>
                        <Nav.Link href="/">Carbs
                        <ProgressBar striped animated variant="warning" max={user.carbsGoal}  now={dayTotals.carbs} label={`${currentProgressCarbs}%`}/>
                        </Nav.Link>
                        <Nav.Link href="/">Fat
                        <ProgressBar striped animated variant="danger" max={user.fatGoal}  now={dayTotals.fat} label={`${currentProgressFat}%`} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>






        // <nav className="navbar sticky-top navbar-expand-lg bg-light">
        //     <div className="container-fluid">
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        //             {user? (
        //                 <div>
        //                     <a className="navbar-brand" href="#">{user.name}'s macrOS</a>
        //                     {/* <img src={logo}></img> */}
        //                 </div>

        //             ): <a className="navbar-brand" href="#">macrOS</a>}
        //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //             <li className="nav-item">
        //             <a className="nav-link active" aria-current="page" href="/">Dashboard</a>
        //             </li>
        //             <li className="nav-item">
        //             <a className="nav-link" href="/journal">Journal</a>
        //             </li>
        //         </ul>

        //         </div>
        //     </div>

        //     </nav>
>>>>>>> Stashed changes

                    ): <a className="navbar-brand" href="#">macrOS</a>}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Dashboard</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/journal">Journal</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        
    )
}

export default NavBar;