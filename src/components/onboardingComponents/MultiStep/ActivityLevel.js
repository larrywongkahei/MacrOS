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
                <div className="radio">How would you best descrive your activity level?</div>
                <div onChange={(e) => setNewUser({ ...newUser, activityLevel: e.target.value })}>
                    <input type="radio" value="SEDENTARY" name="activityLevel" /> Sedentary
                    <input type="radio" value="LIGHT" name="activityLevel" /> Light
                    <input type="radio" value="MODERATE" name="activityLevel" /> Moderate
                    <input type="radio" value="ACTIVE" name="activityLevel" /> Active
                    <input type="radio" value="VERY_ACTIVE" name="activityLevel" /> Very Active
                    <input type="radio" value="EXTRA_ACTIVE" name="activityLevel" /> Extra Active (Athlete)
                </div>
                <button
                    onClick={() => {
                        if (newUser.activityLevel !== "") {
                            setPage(page + 1);
                            setX(1000);
                        } else {
                            alert('Activity level not selected. please try again')
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

export default ActivityLevel;