import './OnboardingController.css'
import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Typed from 'react-typed'

const GoalWeight = ({ page, setPage, newUser, setNewUser, handleUserPost, x, setX }) => {

    const clickHandlerForward = (skipPages) => {
        setPage(page + skipPages);
        setX(1000);
      }
    
      const clickHandlerBackward = (skipPages) => {
        setPage(page - skipPages);
        setX(-1000);
      }
    
      const currentProgress = 93;



    return (


        <Card style= {{ width: '53rem'}} className="text-center">
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
              clickHandlerBackward(7)
            }}>Name</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="" onClick={() => {
              clickHandlerBackward(6)
            }}>Age</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="" onClick={() => {
              clickHandlerBackward(5);
            }}>Sex</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="" onClick={() => {
              clickHandlerBackward(4)
            }}>Height</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="" onClick={() => {
              clickHandlerBackward(3)
            }}>Weight</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="" onClick={() => {
              clickHandlerBackward(2);
            }}>Activity Level</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="" onClick={() => {
              clickHandlerBackward(1);
            }}>Goal</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#active" onClick={() => {
              setPage(page)
            }}>Weight Goal</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="" onClick={() => {
              clickHandlerForward(1);
            }}>Summary</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <br />
        <Card.Title><Typed
                    strings={[`What's your goal weight?`]}
                    typeSpeed={70}
                    style={{fontSize:'30px', fontWeight: '600'}}
                /></Card.Title>
        <br />
        <Card.Text>
        <input
          type="number"
          placeholder="Kg"
          value={newUser.goalWeight}
          onChange={(e) => setNewUser({...newUser, goalWeight: e.target.value})}
        />
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
    
    )
}

export default GoalWeight;