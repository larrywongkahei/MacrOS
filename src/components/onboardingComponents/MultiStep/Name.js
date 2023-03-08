import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Typed from 'react-typed'


const Name = ({ page, setPage, newUser, setNewUser, x, setX }) => {

  const clickHandlerForward = (skipPages) => {
    setPage(page + skipPages);
    setX(1000);
  }

  const currentProgress = 12;


  return (
  

    <Card style= {{ width: '53rem',}} className="text-center">
      <Card.Body>
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
      <Card.Header > <h2>Let's get to know each other :-)</h2>
      <Nav variant="pills" defaultActiveKey="#active">
          <Nav.Item  >
            <Nav.Link  href="#active" onClick={() => {
            setPage(page);
          }}>Name</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="" onClick={() => {
            clickHandlerForward(1)
          }}>Age</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="" onClick={() => {
            clickHandlerForward(2);
          }}>Sex</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="" onClick={() => {
            clickHandlerForward(3);
          }}>Height</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="" onClick={() => {
            clickHandlerForward(4);
          }}>Weight</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="" onClick={() => {
            clickHandlerForward(5);
          }}>Activity Level</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="" onClick={() => {
            clickHandlerForward(6);
          }}>Goal</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="" onClick={() => {
            clickHandlerForward(7);
          }}>Weight Goal</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="" onClick={() => {
            clickHandlerForward(8);
          }}>Summary</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <br />
      <Card.Title> <Typed
                    strings={[`What's your name?`]}
                    typeSpeed={60}
                    style={{fontSize:'30px', fontWeight: '600'}}
                /></Card.Title>
      <br />
      <Card.Text>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({...newUser, name: e.target.value})}
      />
      </Card.Text>
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
};

export default Name;