import { motion } from "framer-motion";


const Age = ({ page, setPage, newUser, setNewUser, x, setX }) => {

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
      <div className="card">
        <div className="step-title">Hi {newUser.name}! How Old Are You?</div>
        <input
          type="number"
          placeholder="Age"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
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
  )
}

export default Age;