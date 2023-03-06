import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';


const Age = ({ page, setPage, newUser, setNewUser, x, setX }) => {

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
        <div>Hi {newUser.name}! How Old Are You?</div>
        <input
          type="number"
          placeholder="Years"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
        />
        <Button
          onClick={() => {
            setPage(page + 1);
            setX(1000);
          }}
          variant="outline-success"
          >
          Next
        </Button>
        <br />
        <Button
          onClick={() => {
            setPage(page - 1);
            setX(-1000);
          }}
          variant="outline-secondary"
          >  
          Previous
        </Button>
    </motion.div>
  )
}

export default Age;