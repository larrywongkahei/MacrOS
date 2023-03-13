import './OnboardingController.css'
import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Typed from 'react-typed'


const ActivityLevel = ({ page, setPage, newUser, setNewUser, x, setX }) => {

    const clickHandlerForward = (skipPages) => {
        setPage(page + skipPages);
        setX(1000);
    }

    const clickHandlerBackward = (skipPages) => {
        setPage(page - skipPages);
        setX(-1000);
    }

    const currentProgress = 72;


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
                                    clickHandlerBackward(5)
                                }}>Name</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerBackward(4)
                                }}>Age</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerBackward(3)
                                }}>Sex</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerBackward(2);
                                }}>Height</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerBackward(1);
                                }}>Weight</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#active" onClick={() => {
                                    setPage(page)
                                }}>Activity Level</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerForward(1);
                                }}>Goal</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerForward(2);
                                }}>Weight Goal</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" onClick={() => {
                                    clickHandlerForward(3);
                                }}>Summary</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <br />
                    <Card.Title><Typed
                    strings={[`How active is your lifestyle?`]}
                    typeSpeed={70}
                    style={{fontSize:'30px', fontWeight: '600'}}
                /></Card.Title>
                    <br />
                    <Card.Text>
                        <div onChange={(e) => setNewUser({ ...newUser, activityLevel: e.target.value })}>
                            <div className="form-check">
                                <input type="radio" value="SEDENTARY" name="activityLevel" id="activity1" className="card-input-element" />
                                <label className="form-check-label" htmlFor="activity1"><span>Sedentary</span></label>
                            </div>
                            <div className="form-check">
                                <input type="radio" value="LIGHT" name="activityLevel" id="activity2" className="card-input-element" />
                                <label className="form-check-label" htmlFor="activity2"><span>Light</span></label>
                            </div>
                            <div className="form-check">
                                <input type="radio" value="MODERATE" name="activityLevel" id="activity3" className="card-input-element" />
                                <label className="form-check-label" htmlFor="activity3"><span>Moderate</span></label>
                            </div>
                            <div className="form-check">
                                <input type="radio" value="ACTIVE" name="activityLevel" id="activity4" className="card-input-element" />
                                <label className="form-check-label" htmlFor="activity4"><span>Active</span></label>
                            </div>
                            <div className="form-check">
                                <input type="radio" value="VERY_ACTIVE" name="activityLevel" id="activity5" className="card-input-element" />
                                <label className="form-check-label" htmlFor="activity5"><span>Very Active</span></label>
                            </div>
                            <div className="form-check">
                                <input type="radio" value="EXTRA_ACTIVE" name="activityLevel" id="activity6" className="card-input-element" />
                                <label className="form-check-label" htmlFor="activity6"><span>Extra Active</span></label>
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

export default ActivityLevel;