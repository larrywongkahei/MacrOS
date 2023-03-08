
import { Navbar, Container } from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons'





const Footer = () => {
    const navbarStyle = {
        backgroundColor: '#d9dada',
        opacity: '0.7',
        fontWeight: '800',
        marginTop: '1rem',
        marginBottom: '3rem',
        textAlign: 'center',
    }
    return(
       
    
    
    
                <Navbar style={navbarStyle} variant="light" sticky="bottom">
                    <Container className="d-flex justify-content-center">
                        <Navbar.Brand href="/">macrOS® &nbsp; | &nbsp; Andrew Patterson, Larry Wong, Lee Jones & Michal Marszalek &nbsp;  &nbsp;<a href="https://github.com/larrywongkahei/MacrOS"><Github size={40}/></a></Navbar.Brand>
                    </Container>
                </Navbar>
    )
    
        
    
}

export default Footer;