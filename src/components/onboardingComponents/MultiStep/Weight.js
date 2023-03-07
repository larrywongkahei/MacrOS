import './OnboardingController.css'
import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Weight = ({ page, setPage, newUser, setNewUser, x, setX }) => {

    const clickHandlerForward = (skipPages) => {
        setPage(page + skipPages);
        setX(1000);
      }
    
      const clickHandlerBackward = (skipPages) => {
        setPage(page - skipPages);
        setX(-1000);
      }
    
      const currentProgress = 60;


    return (


        <Card style= {{ width: '53rem'}} className="text-center">
        <Card.Body>
      <motion.div
        initial={{ x: x }}
        transition={{ duration: 1 }}
        animate={{ x: 0 }}
      >
        <Card.Header><h2>\m/ O_o \m/</h2>
        <Nav variant="pills" defaultActiveKey="#active">
            <Nav.Item>
              <Nav.Link href="" onClick={() => {
              clickHandlerBackward(4)
            }}>Name</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="" onClick={() => {
              clickHandlerBackward(3)
            }}>Age</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="" onClick={() => {
              clickHandlerBackward(2);
            }}>Sex</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="" onClick={() => {
              clickHandlerBackward(1)
            }}>Height</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#active" onClick={() => {
              setPage(page)
            }}>Weight</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="" onClick={() => {
              clickHandlerForward(1);
            }}>Activity Level</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="" onClick={() => {
              clickHandlerForward(2);
            }}>Goal</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="" onClick={() => {
              clickHandlerForward(3);
            }}>Weight Goal</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="" onClick={() => {
              clickHandlerForward(4);
            }}>Summary</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <br />
        <Card.Title><h3>What's your current weight?</h3></Card.Title>
        <br />
        <Card.Text>
        <input
          type="number"
          placeholder="Kg"
          value={newUser.startingWeight}
          onChange={(e) => setNewUser({...newUser, startingWeight: e.target.value})}
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
    
    
    



        // <motion.div
        //     initial={{ x: x }}
        //     transition={{ duration: 1 }}
        //     animate={{ x: 0 }}
        // >
        //         <div>... Aaaand Your Current Weight?</div>
        //         <input
        //             type="number"
        //             placeholder="Kg"
        //             value={newUser.startingWeight}
        //             onChange={(e) => setNewUser({ ...newUser, startingWeight: e.target.value })}
        //         />
        //         <Button
        //             onClick={() => {
        //                 setPage(page + 1);
        //                 setX(1000);
        //             }}
        //             variant="outline-success"
        //             >
        //             Next
        //         </Button>
        //         <br />
        //         <Button
        //             onClick={() => {
        //                 setPage(page - 1);
        //                 setX(-1000);
        //             }}
        //             variant="outline-secondary"
        //             >
        //             Previous
        //         </Button>

        // </motion.div>
    );
}

export default Weight;