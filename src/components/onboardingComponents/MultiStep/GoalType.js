import './OnboardingController.css'
import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Typed from 'react-typed'

const GoalType = ({ page, setPage, newUser, setNewUser, x, setX }) => {

    const clickHandlerForward = (skipPages) => {
        setPage(page + skipPages);
        setX(1000);
    }

    const clickHandlerBackward = (skipPages) => {
        setPage(page - skipPages);
        setX(-1000);
    }

    const currentProgress = 84;


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
                                    clickHandlerBackward(6)
                                }}>Name</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerBackward(5)
                                }}>Age</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/" onClick={() => {
                                    clickHandlerBackward(4)
                                }}>Sex</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerBackward(3);
                                }}>Height</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerBackward(2);
                                }}>Weight</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerBackward(1);
                                }}>Activity Level</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#active" onClick={() => {
                                    setPage(page);
                                }}>Goal</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerForward(1);
                                }}>Weight Goal</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerForward(2);
                                }}>Summary</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <br />
                    <Card.Title><Typed
                    strings={[`What's your goal?`]}
                    typeSpeed={70}
                    style={{fontSize:'30px', fontWeight: '600'}}
                /></Card.Title>
                    <br />
                    <Card.Text>
                        <div onChange={(e) => setNewUser({ ...newUser, goalType: e.target.value })}>
                            <div className="form-check">
                                <input type="radio" value="MAINTAIN_WEIGHT" name="goalType" id="goal1" className="card-input-element" />
                                <label className="form-check-label" htmlFor="goal1"><span>Maintain Weight</span></label>
                            </div>
                            <div className="form-check">
                                <input type="radio" value="GAIN_WEIGHT" name="goalType" id="goal2" className="card-input-element" />
                                <label className="form-check-label" htmlFor="goal1"><span>Gain Weight</span></label>
                            </div>
                            <div className="form-check">
                                <input type="radio" value="LOSE_WEIGHT" name="goalType" id="goal3" className="card-input-element" />
                                <label className="form-check-label" htmlFor="goal3"><span>Lose Weight</span></label>
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

export default GoalType;