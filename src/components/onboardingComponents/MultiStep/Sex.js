import { motion } from "framer-motion";

const Sex = ({ page, setPage, newUser, setNewUser, x, setX }) => {


    return (
        <motion.div
            initial={{ x: x }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
        >
            <div className="card">
                <div className="radio">What's your gender?</div>
                <div onChange={(e) => setNewUser({ ...newUser, sex: e.target.value })}>
                    <input type="radio" value="Male" name="sex" /> Male
                    <input type="radio" value="Female" name="sex" /> Female
                </div>
                <button
                    onClick={() => {
                        if (newUser.sex !== "") {
                            setPage(page + 1)
                            setX(1000)
                        } else {
                            alert('Sex not selected, please try again')
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

export default Sex;