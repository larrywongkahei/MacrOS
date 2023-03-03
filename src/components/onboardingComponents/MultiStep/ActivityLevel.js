import { motion } from "framer-motion";

const ActivityLevel = ({ page, setPage, newUser, setNewUser, x, setX }) => {

    return (
        <motion.div
            initial={{ x: x }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
        >
            <div className="card">
                <div className="step-title">How Would You Best Describe Your Acitivity Level?</div>
                <select value={newUser.activityLevel} onChange={(e) => setNewUser({ ...newUser, activityLevel: e.target.value })}>
                    <option>SEDENTARY</option>
                    <option>LIGHT</option>
                    <option>MODERATE</option>
                    <option>ACTIVE</option>
                    <option>VERY_ACTIVE</option>
                    <option>EXTRA_ACTIVE</option>
                </select>
                <button
                    onClick={() => {
                        setPage(page + 1);
                        setX(1000);
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

export default ActivityLevel;