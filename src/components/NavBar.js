import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProgressBar from 'react-bootstrap/ProgressBar'
import StaticImage from '../images/static.jsx'
import { useLocation } from 'react-router-dom'
import { Windows } from 'react-bootstrap-icons';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';



const NavBar = ({ user, dayTotals }) => {


    const navbarStyle = {
        backgroundColor: '#d9dada',
        opacity: '0.7',
        fontWeight: '800',
        marginTop: '1rem',
        marginBottom: '3rem',
        textAlign: 'center',
        webkitBorderRadius: '20px',
        mozBorderRadius: '20px',
        borderRadius: '20px',
        marginLeft:'0.5em',
        marginRight:'0.5em'
    }

    const progressbarStyle = {
        width: '10rem',
        height: '1.3rem',
        fontSize: '0.6em'
    }


    if (user && window.location.pathname === '/') {

        return (
            <Navbar style={navbarStyle} expand="lg" variant="light" sticky="top">
                <Container >
                    < StaticImage />
                    <Navbar.Brand href="/">Welcome to macrOS®</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Dashboard</Nav.Link>
                            <Nav.Link href="/journal">Journal</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/">Calories
                                <ProgressBar style={progressbarStyle} className='progress2' striped animated min={0} max={user.caloriesGoal} now={dayTotals.calories} label={`${dayTotals.calories}kcal / ${user.caloriesGoal}kcal`} />
                            </Nav.Link>
                            <Nav.Link href="/">Protein
                                <ProgressBar style={progressbarStyle} striped animated variant="success" max={user.proteinGoal} now={dayTotals.protein} label={`${dayTotals.protein}g / ${user.proteinGoal}g`} />
                            </Nav.Link>
                            <Nav.Link href="/">Carbs
                                <ProgressBar style={progressbarStyle} striped animated variant="warning" max={user.carbsGoal} now={dayTotals.carbs} label={`${dayTotals.carbs}g / ${user.carbsGoal}g`} />
                            </Nav.Link>
                            <Nav.Link href="/">Fat
                                <ProgressBar style={progressbarStyle} striped animated variant="danger" max={user.fatGoal} now={dayTotals.fat} label={`${dayTotals.fat}g / ${user.fatGoal}g`} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )

    } else {
        return (
            <Navbar style={navbarStyle} expand="lg" variant="light" sticky="top">
                <Container>
                    <StaticImage />
                    <Navbar.Brand href="/" id="onb-nav-title">Welcome to macrOS®</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Dashboard</Nav.Link>
                            <Nav.Link href="/journal">Journal</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}



export default NavBar;