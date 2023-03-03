import { motion } from "framer-motion";

const Height = ({ page, setPage, newUser, setNewUser, x, setX }) => {
  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
      <div className="card">
        <div className="step-title">What's your height?</div>
        <input
          type="number"
          placeholder="Height"
          value={newUser.height}
          onChange={(e) => setNewUser({ ...newUser, height: e.target.value })}
        />
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

export default Height;