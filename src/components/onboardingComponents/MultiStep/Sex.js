import './OnboardingController.css'
import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Typed from 'react-typed'


const Sex = ({ page, setPage, newUser, setNewUser, x, setX }) => {

    const clickHandlerForward = (skipPages) => {
        setPage(page + skipPages);
        setX(1000);
    }

    const clickHandlerBackward = (skipPages) => {
        setPage(page - skipPages);
        setX(-1000);
    }

    const currentProgress = 36;

    return (

        <Card style={{ width: '53rem' }} className="text-center">
            <Card.Body>
                <motion.div
                    initial={{ x: x }}
                    transition={{ duration: 1 }}
                    animate={{ x: 0 }}
                >
                    <Card.Header>
                        <Nav variant="pills" defaultActiveKey="#active">
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerBackward(2)
                                }}>Name</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerBackward(1)
                                }}>Age</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#active" onClick={() => {
                                    setPage(page)
                                }}>Sex</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerForward(1);
                                }}>Height</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerForward(2);
                                }}>Weight</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerForward(3);
                                }}>Activity Level</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerForward(4);
                                }}>Goal</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerForward(5);
                                }}>Weight Goal</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerForward(6);
                                }}>Summary</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <br />
                    <Card.Title><Typed
                    strings={[`What's your gender?`]}
                    typeSpeed={70}
                    style={{fontSize:'30px', fontWeight: '600'}}
                /></Card.Title>
                    <br />
                    <Card.Text>
                        <div onChange={(e) => setNewUser({ ...newUser, sex: e.target.value })}>
                            <div className="form-check">
                                <input type="radio" value="Male" name="sex" id="sex1" className="card-input-element" />
                                <label className="form-check-label" htmlFor="sex1"><span>Male</span></label>
                            </div>
                            <div className="form-check">
                                <input type="radio" value="Female" name="sex" id="sex2" className="card-input-element" />
                                <label className="form-check-label" htmlFor="sex2"><span>Female</span></label>
                            </div>
                        </div>
                    </Card.Text>
                    <Button
                        onClick={() => {
                            clickHandlerBackward(1)
                        }}
                        variant="outline-secondary"
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={() => {
                            clickHandlerForward(1)
                        }}
                        variant="outline-success"
                    >
                        Next
                    </Button>
                    <br />
        <br />
        <ProgressBar now={currentProgress} label={`${currentProgress}%`} />
                </motion.div>
            </Card.Body>
        </Card>

    );
}

export default Sex;