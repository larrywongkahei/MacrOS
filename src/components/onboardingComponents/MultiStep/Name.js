import { motion } from "framer-motion";

const Name = ({ page, setPage, newUser, setNewUser, x, setX }) => {
  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
    <div className="card">
      <div className="step-title">What's your name?</div>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({...newUser, name: e.target.value})}
        className="form-group"
      />
      <button
          onClick={() => {
            setPage(page + 1);
            setX(1000);
          }}>
          Next
        </button>
    </div>
    </motion.div>
  );
};

export default Name;