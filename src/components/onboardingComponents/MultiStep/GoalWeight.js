import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';

const GoalWeight = ({ page, setPage, newUser, setNewUser, handleUserPost, x, setX }) => {


    return (
        <motion.div
            initial={{ x: x }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
        >

                <div>Le Grande Finale! What's Your Goal Weight?</div>
                <input
                    type="number"
                    placeholder="Kg"
                    value={newUser.goalWeight}
                    onChange={(e) => setNewUser({ ...newUser, goalWeight: e.target.value })}
                />
                <br />
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

export default GoalWeight;