import { motion } from "framer-motion";

const GoalWeight = ({ page, setPage, newUser, setNewUser, handleUserPost, x, setX }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUserPost(newUser)
        alert(`Hi ${newUser.name}! Welcome to macrOS`)
    }

    return (
        <motion.div
            initial={{ x: x }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
        >
            <div className="card">
                <div className="step-title">Le Grande Finale! What's Your Goal Weight?</div>
                <input
                    type="number"
                    placeholder="Goal Weight"
                    value={newUser.goalWeight}
                    onChange={(e) => setNewUser({ ...newUser, goalWeight: e.target.value })}
                />
                <br />
                <button
                    onClick={handleSubmit}>
                    Submit
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

export default GoalWeight;