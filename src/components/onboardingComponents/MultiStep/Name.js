import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';

const Name = ({ page, setPage, newUser, setNewUser, x, setX }) => {
  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
      <div className="d-flex flex-column justify-content-center">
      <h3 className="p-2">What's your name?</h3>
      <input
        className="p-22"
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({...newUser, name: e.target.value})}
      />
      <Button
          className="p-2"
          onClick={() => {
            setPage(page + 1);
            setX(1000);
          }}
          variant="outline-success"
          size="sm"
          >
          Next
        </Button>
        </div>
    </motion.div>
    
  );
};

export default Name;