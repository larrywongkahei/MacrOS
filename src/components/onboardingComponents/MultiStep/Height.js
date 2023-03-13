import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Typed from 'react-typed'

const Height = ({ page, setPage, newUser, setNewUser, x, setX }) => {

  const clickHandlerForward = (skipPages) => {
    setPage(page + skipPages);
    setX(1000);
  }

  const clickHandlerBackward = (skipPages) => {
    setPage(page - skipPages);
    setX(-1000);
  }

  const currentProgress = 50;



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
                  clickHandlerBackward(3)
                }}>Name</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="" onClick={() => {
                  clickHandlerBackward(2)
                }}>Age</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="" onClick={() => {
                  clickHandlerBackward(1);
                }}>Sex</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#active" onClick={() => {
                  setPage(page)
                }}>Height</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="" onClick={() => {
                  clickHandlerForward(1);
                }}>Weight</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="" onClick={() => {
                  clickHandlerForward(2);
                }}>Activity Level</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="" onClick={() => {
                  clickHandlerForward(3);
                }}>Goal</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="" onClick={() => {
                  clickHandlerForward(4);
                }}>Weight Goal</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="" onClick={() => {
                  clickHandlerForward(5);
                }}>Summary</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <br />
          <Card.Title><Typed
            strings={[`How tall are you?`]}
            typeSpeed={70}
            style={{ fontSize: '30px', fontWeight: '600' }}
          /></Card.Title>
          <br />
          <Card.Text>
            <input
              type="number"
              placeholder="Cm"
              value={newUser.height}
              onChange={(e) => setNewUser({ ...newUser, height: e.target.value })}
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

  );
}

export default Height;