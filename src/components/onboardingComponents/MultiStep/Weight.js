import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';

const Weight = ({ page, setPage, newUser, setNewUser, x, setX }) => {
    return (
        <motion.div
            initial={{ x: x }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
        >
                <div>... Aaaand Your Current Weight?</div>
                <input
                    type="number"
                    placeholder="Kg"
                    value={newUser.startingWeight}
                    onChange={(e) => setNewUser({ ...newUser, startingWeight: e.target.value })}
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

export default Weight;