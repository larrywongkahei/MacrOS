import './OnboardingController.css'
import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import ProgressBar from 'react-bootstrap/ProgressBar'


const Age = ({ page, setPage, newUser, setNewUser, x, setX }) => {


  const clickHandlerForward = (skipPages) => {
    setPage(page + skipPages);
    setX(1000);
  }

  const clickHandlerBackward = (skipPages) => {
    setPage(page - skipPages);
    setX(-1000);
  }

  const currentProgress = 24;

  return (

    <Card style= {{ width: '53rem'}} className="text-center">
      <Card.Body>
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
      <Card.Header><h2>Welcome to macrOS, {newUser.name}!</h2>
      <Nav variant="pills" defaultActiveKey="#active">
          <Nav.Item>
            <Nav.Link href="#link" onClick={() => {
            clickHandlerBackward(1)
          }}>Name</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#active" onClick={() => {
            setPage(page)
          }}>Age</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link" onClick={() => {
            clickHandlerForward(1);
          }}>Sex</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link" onClick={() => {
            clickHandlerForward(2);
          }}>Height</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link" onClick={() => {
            clickHandlerForward(3);
          }}>Weight</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link" onClick={() => {
            clickHandlerForward(4);
          }}>Activity Level</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link" onClick={() => {
            clickHandlerForward(5);
          }}>Goal</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link" onClick={() => {
            clickHandlerForward(6);
          }}>Weight Goal</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link" onClick={() => {
            clickHandlerForward(7);
          }}>Summary</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <br />
      <Card.Title><h3>What's your age?</h3></Card.Title>
      <br />
      <Card.Text>
      <input
        type="number"
        placeholder="Years"
        value={newUser.age}
        onChange={(e) => setNewUser({...newUser, age: e.target.value})}
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

export default Age;