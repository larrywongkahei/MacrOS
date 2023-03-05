import { motion } from "framer-motion";

const Goals = ({ page, setPage, newUser, setNewUser, handleUserPost, x, setX }) => {


    const saveUser = (bmr,multiplier) => {
        const newUser2 = {...newUser}
        newUser2['caloriesGoal'] = bmr * multiplier
        handleUserPost(newUser2)
    }


    const calcTDEE = (newUser) => {
        if (newUser.sex === "Male") {
            const maleBMR = 66 + (13.7 * newUser.startingWeight) + (5 * newUser.height) - (6.8 * newUser.age)
            if (newUser.activityLevel === 'SEDENTARY') {
                saveUser(maleBMR,1.2)
            } else if (newUser.activityLevel === "LIGHT") {
                saveUser(maleBMR,1.375)
            } else if (newUser.activityLevel === "MODERATE") {
                saveUser(maleBMR,1.55)
            } else if (newUser.activityLevel === "ACTIVE") {
                saveUser(maleBMR,1.725)
            } else if (newUser.activityLevel === "VERY_ACTIVE") {
                saveUser(maleBMR,1.9)
            } else if (newUser.activityLevel === "EXTRA_ACTIVE") {
                saveUser(maleBMR,2.4)
            }
        } else if (newUser.sex === "Female") {
            const femaleBMR = 655 + (9.6 * newUser.startingWeight) + (1.8 * newUser.height) - (4.7 * newUser.age)
            if (newUser.activityLevel === "SEDENTARY") {
                saveUser(femaleBMR,1.2)
            } else if (newUser.activityLevel === "LIGHT") {
                saveUser(femaleBMR,1.375)
            } else if (newUser.activityLevel === "MODERATE") {
                saveUser(femaleBMR,1.55)
            } else if (newUser.activityLevel === "ACTIVE") {
                saveUser(femaleBMR,1.725)
            } else if (newUser.activityLevel === "VERY_ACTIVE") {
                saveUser(femaleBMR,1.9)
            } else if (newUser.activityLevel === "EXTRA_ACTIVE") {
                saveUser(femaleBMR,2.4)
            }
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        calcTDEE(newUser);
        alert(`Hi ${newUser.name}! Welcome to macrOS`)
    }

    return (
        <motion.div
            initial={{ x: x }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
        >
            <div className="card">
                <div className="step-title">Here are your Calorie goals!</div>
                <br />
                <button
                    onClick={handleSubmit}>
                    SEE CONSOLELOG FOR DETAILS
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

export default Goals;