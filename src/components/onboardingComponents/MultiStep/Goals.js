import { motion } from "framer-motion";

const Goals = ({ page, setPage, newUser, setNewUser, handleUserPost, x, setX }) => {

    const calcTDEE = (newUser) => {
        if (newUser.sex === "Male") {
            console.log(`loggin male`);
            console.log(newUser);
             const maleBMR = 66 + (13.7 * newUser.startingWeight) + (5 * newUser.height) - (6.8 * newUser.age)
            if (newUser.activityLevel === 'SEDENTARY') {
                setNewUser({ ...newUser, caloriesGoal: maleBMR * 1.2})
            } else if (newUser.activityLevel === "LIGHT") {
                setNewUser({ ...newUser, caloriesGoal: maleBMR * 1.375})
            } else if (newUser.activityLevel === "MODERATE") {
                setNewUser({ ...newUser, caloriesGoal: maleBMR * 1.55})
            } else if (newUser.activityLevel === "ACTIVE") {
                setNewUser({ ...newUser, caloriesGoal: maleBMR * 1.725})
            } else if (newUser.activityLevel === "VERY_ACTIVE") {
                setNewUser({ ...newUser, caloriesGoal: maleBMR * 1.9})
            } else if (newUser.activityLevel === "EXTRA_ACTIVE") {
                setNewUser({ ...newUser, caloriesGoal: maleBMR * 2.4})
        }} else if (newUser.sex === "Female") {
        console.log(`logging female`);
        console.log(newUser);
        const femaleBMR = 655 + (9.6 * newUser.startingWeight) + (1.8 * newUser.height) - (4.7 * newUser.age)
        if (newUser.activityLevel === "SEDENTARY") {
            setNewUser({ ...newUser, caloriesGoal: femaleBMR * 1.2})
        } else if (newUser.activityLevel === "LIGHT") {
            setNewUser({ ...newUser, caloriesGoal: femaleBMR * 1.375})
        } else if (newUser.activityLevel === "MODERATE") {
            setNewUser({ ...newUser, caloriesGoal: femaleBMR * 1.55})
        } else if (newUser.activityLevel === "ACTIVE") {
            setNewUser({ ...newUser, caloriesGoal: femaleBMR * 1.725})
        } else if (newUser.activityLevel === "VERY_ACTIVE") {
            setNewUser({ ...newUser, caloriesGoal: femaleBMR * 1.9})
        } else if (newUser.activityLevel === "EXTRA_ACTIVE") {
            setNewUser({ ...newUser, caloriesGoal: femaleBMR * 2.4})
    } } else {
        console.log(`logging neither`);
        console.log(newUser);
    }}


    const handleSubmit = (e) => {
        e.preventDefault();
        calcTDEE(newUser);
        // handleUserPost(newUser)
        // alert(`Hi ${newUser.name}! Welcome to macrOS`)
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