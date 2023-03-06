import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';

const GoalType = ({ page, setPage, newUser, setNewUser, x, setX }) => {

    return (
        <motion.div
            initial={{ x: x }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
        >
     
                <div>What's your endgame?</div>
                <div onChange={(e) => setNewUser({ ...newUser, goalType: e.target.value })}>
                    <div className="form-check">
                        <input type="radio" value="MAINTAIN_WEIGHT" name="goalType" id="goal1" className="form-check-input" />
                        <label className="form-check-label" htmlFor="goal1">Maintain Weight</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" value="GAIN_WEIGHT" name="goalType" id="goal2" className="form-check-input" />
                        <label className="form-check-label" htmlFor="goal1">Gain Weight</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" value="LOSE_WEIGHT" name="goalType" id="goal3" className="form-check-input" />
                        <label className="form-check-label" htmlFor="goal3">Lose Weight</label>
                    </div>
                </div>
                <Button
                    onClick={() => {
                        if (newUser.goalType !== "") {
                            setPage(page + 1);
                            setX(1000);
                        } else {
                            alert('Your goal not selected. please try again')
                        }
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

export default GoalType;