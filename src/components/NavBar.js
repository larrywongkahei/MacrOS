import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProgressBar from 'react-bootstrap/ProgressBar'



const NavBar = ({ user, dayTotals }) => {


    if (user) {
   

    const currentProgressCalories = ((dayTotals.calories / user.caloriesGoal) * 100).toFixed(0)
    const currentProgressProtein = ((dayTotals.protein / user.proteinGoal) * 100).toFixed(0)
    const currentProgressCarbs = ((dayTotals.carbs / user.carbsGoal) * 100).toFixed(0)
    const currentProgressFat = ((dayTotals.fat / user.fatGoal) * 100).toFixed(0)


    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container >
                <Navbar.Brand href="/">{user.name}, Welcome to macrOS</Navbar.Brand>
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
    ) 

} else {
    return (
        <Navbar bg="light" expand="lg" sticky="top"  >
            <Container>
                <Navbar.Brand href="/" id="onb-nav-title">macrOS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Container>
        </Navbar>
    ) 
}}




export default NavBar;