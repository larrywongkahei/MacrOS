import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';

const Height = ({ page, setPage, newUser, setNewUser, x, setX }) => {
  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
        <div>What's your height?</div>
        <input
          type="number"
          placeholder="Cm"
          value={newUser.height}
          onChange={(e) => setNewUser({ ...newUser, height: e.target.value })}
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
  );
}

export default Height;