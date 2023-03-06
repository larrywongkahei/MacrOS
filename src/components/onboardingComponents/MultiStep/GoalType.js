import { motion } from "framer-motion";

const GoalType = ({ page, setPage, newUser, setNewUser, x, setX }) => {

    return (
        <motion.div
            initial={{ x: x }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
        >
            <div className="card">
                <div className="step-title">How Would You Best Describe Your Acitivity Level?</div>
                <div className="radio">What's your endgame?</div>
                <div onChange={(e) => setNewUser({ ...newUser, goalType: e.target.value })}>
                    <input type="radio" value="MAINTAIN_WEIGHT" name="goalType" /> Maintain Weight
                    <input type="radio" value="GAIN_WEIGHT" name="goalType" /> Lose Weight
                    <input type="radio" value="LOSE_WEIGHT" name="activityLevel" /> Gain Weight
                </div>
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