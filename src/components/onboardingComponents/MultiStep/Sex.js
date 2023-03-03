import { motion } from "framer-motion";

const Sex = ({ page, setPage, newUser, setNewUser, x, setX }) => {

    return (
        <motion.div
            initial={{ x: x }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
        >
            <div className="card">
                <div className="step-title">What's your gender?</div>
                <select value={newUser.sex} onChange={(e) => setNewUser({ ...newUser, sex: e.target.value })}>
                    <option>Male</option>
                    <option>Female</option>
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

export default Sex;