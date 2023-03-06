import { motion } from "framer-motion";

const GoalType = ({ page, setPage, newUser, setNewUser, x, setX }) => {

    return (
        <motion.div
            initial={{ x: x }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
        >
            <div className="card">
                <div className="step-title">What's your endgame?</div>
                <div onChange={(e) => setNewUser({ ...newUser, goalType: e.target.value })}>
                    <input type="radio" value="MAINTAIN_WEIGHT" name="goalType" /> Maintain Weight
                    <input type="radio" value="GAIN_WEIGHT" name="goalType" /> Gain Weight
                    <input type="radio" value="LOSE_WEIGHT" name="goalType" /> Lose Weight
                </div>
                {/* <select onChange={(e) => setNewUser({ ...newUser, goal: e.target.value })}>
                    <option value="MAINTAIN_WEIGHT" selected>Maintain Weight</option>
                    <option value="GAIN_WEIGHT">Gain Weight</option>
                    <option value="LOSE_WEIGHT">LOSE Weight</option>
                </select> */}
                <button
                    onClick={() => {
                        if (newUser.goalType !== "") {
                            setPage(page + 1);
                            setX(1000);
                        } else {
                            alert('Your goal not selected. please try again')
                        }

                    
                    }}>
                    Next
                </button>
                <br />
                <button
                    onClick={() => {
                        setPage(page - 1);
                        setX(-1000);
                    }}>
                    Previous
                </button>
            </div>
        </motion.div>
    );
}

export default GoalType;