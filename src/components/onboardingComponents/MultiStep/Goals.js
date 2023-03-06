import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';


const Goals = ({ page, setPage, newUser, setNewUser, emptyUser, setOnboardingComplete, handleUserPost, x, setX }) => {

    const fatProteinCarbsGoal = (newUser2,bmr,multiplier) => {
        newUser2['proteinGoal'] = (((bmr * multiplier) * 0.4 ) / 4).toFixed(0)
        newUser2['fatGoal'] = (((bmr * multiplier) * 0.3 ) / 9).toFixed(0)
        newUser2['carbsGoal'] = (((bmr * multiplier) * 0.3 ) / 4).toFixed(0)
    }

    const saveUserLose = (bmr,multiplier,Goal) => {
        const newUser2 = {...newUser}
        newUser2['caloriesGoal'] = ((bmr - (bmr * Goal)) * multiplier).toFixed(0)
        fatProteinCarbsGoal(newUser2,bmr,multiplier)
        handleUserPost(newUser2)  
    }

    const saveUserGain = (bmr,multiplier) => {
        const newUser2 = {...newUser}
        newUser2['caloriesGoal'] = (bmr * multiplier + 250).toFixed(0)
        fatProteinCarbsGoal(newUser2,bmr,multiplier)
        handleUserPost(newUser2)
    }

    const saveUserMaintain = (bmr,multiplier) => {
        const newUser2 = {...newUser}
        newUser2['caloriesGoal'] = (bmr  * multiplier).toFixed(0)
        fatProteinCarbsGoal(newUser2,bmr,multiplier)
        handleUserPost(newUser2)
    }



    const calcTDEE = (newUser) => {
        if (newUser.sex === "Male") {
            const maleBMR = 66 + (13.7 * newUser.startingWeight) + (5 * newUser.height) - (6.8 * newUser.age)
            // MALE LOSE WEIGHT
            if (newUser.activityLevel === 'SEDENTARY' && newUser.goalType === 'LOSE_WEIGHT') {
                saveUserLose(maleBMR,1.2,0.2)
            } else if (newUser.activityLevel === "LIGHT" && newUser.goalType === 'LOSE_WEIGHT') {
                saveUserLose(maleBMR,1.375,0.2)
            } else if (newUser.activityLevel === "MODERATE" && newUser.goalType === 'LOSE_WEIGHT') {
                saveUserLose(maleBMR,1.55,0.2)
            } else if (newUser.activityLevel === "ACTIVE" && newUser.goalType === 'LOSE_WEIGHT') {
                saveUserLose(maleBMR,1.725,0.2)
            } else if (newUser.activityLevel === "VERY_ACTIVE" && newUser.goalType === 'LOSE_WEIGHT') {
                saveUserLose(maleBMR,1.9,0.2)
            } else if (newUser.activityLevel === "EXTRA_ACTIVE" && newUser.goalType === 'LOSE_WEIGHT') {
                saveUserLose(maleBMR,2.4,0.2)
            // MALE GAIN WEIGHT
            } else if (newUser.activityLevel === "SEDENTARY" && newUser.goalType === 'GAIN_WEIGHT') {
                saveUserGain(maleBMR,1.2)
            } else if (newUser.activityLevel === "LIGHT" && newUser.goalType === 'GAIN_WEIGHT') {
                saveUserGain(maleBMR,1.375)
            } else if (newUser.activityLevel === "MODERATE" && newUser.goalType === 'GAIN_WEIGHT') {
                saveUserGain(maleBMR,1.55)
            } else if (newUser.activityLevel === "ACTIVE" && newUser.goalType === 'GAIN_WEIGHT') {
                saveUserGain(maleBMR,1.725)
            } else if (newUser.activityLevel === "VERY_ACTIVE" && newUser.goalType === 'GAIN_WEIGHT') {
                saveUserGain(maleBMR,1.9)
            } else if (newUser.activityLevel === "EXTRA_ACTIVE" && newUser.goalType === 'GAIN_WEIGHT') {
                saveUserGain(maleBMR,2.4)
            // MALE MAINTAIN WEIGHT
            } else if (newUser.activityLevel === "SEDENTARY" && newUser.goalType === 'MAINTAIN_WEIGHT') {
                saveUserMaintain(maleBMR,1.2)
            } else if (newUser.activityLevel === "LIGHT" && newUser.goalType === 'MAINTAIN_WEIGHT') {
                saveUserMaintain(maleBMR,1.375)
            } else if (newUser.activityLevel === "MODERATE" && newUser.goalType === 'MAINTAIN_WEIGHT') {
                saveUserMaintain(maleBMR,1.55)
            } else if (newUser.activityLevel === "ACTIVE" && newUser.goalType === 'MAINTAIN_WEIGHT') {
                saveUserMaintain(maleBMR,1.725)
            } else if (newUser.activityLevel === "VERY_ACTIVE" && newUser.goalType === 'MAINTAIN_WEIGHT') {
                saveUserMaintain(maleBMR,1.9)
            } else if (newUser.activityLevel === "EXTRA_ACTIVE" && newUser.goalType === 'MAINTAIN_WEIGHT') {
                saveUserMaintain(maleBMR,2.4)
            }

        
        } else if (newUser.sex === "Female") {
            // FEMAL LOSE WEIGHT
            const femaleBMR = 655 + (9.6 * newUser.startingWeight) + (1.8 * newUser.height) - (4.7 * newUser.age)
            if (newUser.activityLevel === 'SEDENTARY' && newUser.goalType === 'LOSE_WEIGHT') {
                saveUserLose(femaleBMR,1.2,0.2)
            } else if (newUser.activityLevel === "LIGHT" && newUser.goalType === 'LOSE_WEIGHT') {
                saveUserLose(femaleBMR,1.375,0.2)
            } else if (newUser.activityLevel === "MODERATE" && newUser.goalType === 'LOSE_WEIGHT') {
                saveUserLose(femaleBMR,1.55,0.2)
            } else if (newUser.activityLevel === "ACTIVE" && newUser.goalType === 'LOSE_WEIGHT') {
                saveUserLose(femaleBMR,1.725,0.2)
            } else if (newUser.activityLevel === "VERY_ACTIVE" && newUser.goalType === 'LOSE_WEIGHT') {
                saveUserLose(femaleBMR,1.9,0.2)
            } else if (newUser.activityLevel === "EXTRA_ACTIVE" && newUser.goalType === 'LOSE_WEIGHT') {
                saveUserLose(femaleBMR,2.4,0.2)
            // FEMALE GAIN WEIGHT
            } else if (newUser.activityLevel === "SEDENTARY" && newUser.goalType === 'GAIN_WEIGHT') {
                saveUserGain(femaleBMR,1.2)
            } else if (newUser.activityLevel === "LIGHT" && newUser.goalType === 'GAIN_WEIGHT') {
                saveUserGain(femaleBMR,1.375)
            } else if (newUser.activityLevel === "MODERATE" && newUser.goalType === 'GAIN_WEIGHT') {
                saveUserGain(femaleBMR,1.55)
            } else if (newUser.activityLevel === "ACTIVE" && newUser.goalType === 'GAIN_WEIGHT') {
                saveUserGain(femaleBMR,1.725)
            } else if (newUser.activityLevel === "VERY_ACTIVE" && newUser.goalType === 'GAIN_WEIGHT') {
                saveUserGain(femaleBMR,1.9)
            } else if (newUser.activityLevel === "EXTRA_ACTIVE" && newUser.goalType === 'GAIN_WEIGHT') {
                saveUserGain(femaleBMR,2.4)
            // FEMALE MAINTAIN WEIGHT
            } else if (newUser.activityLevel === "SEDENTARY" && newUser.goalType === 'MAINTAIN_WEIGHT') {
            saveUserMaintain(femaleBMR,1.2)
            } else if (newUser.activityLevel === "LIGHT" && newUser.goalType === 'MAINTAIN_WEIGHT') {
                saveUserMaintain(femaleBMR,1.375)
            } else if (newUser.activityLevel === "MODERATE" && newUser.goalType === 'MAINTAIN_WEIGHT') {
                saveUserMaintain(femaleBMR,1.55)
            } else if (newUser.activityLevel === "ACTIVE" && newUser.goalType === 'MAINTAIN_WEIGHT') {
                saveUserMaintain(femaleBMR,1.725)
            } else if (newUser.activityLevel === "VERY_ACTIVE" && newUser.goalType === 'MAINTAIN_WEIGHT') {
                saveUserMaintain(femaleBMR,1.9)
            } else if (newUser.activityLevel === "EXTRA_ACTIVE" && newUser.goalType === 'MAINTAIN_WEIGHT') {
                saveUserMaintain(femaleBMR,2.4)
            }
        }
    }

    const clearForm = () => {
        setNewUser({...emptyUser})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        calcTDEE(newUser);
        clearForm()
    }

    return (
        <motion.div
            initial={{ x: x }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
        >
         
                <div>That's it! Enjoy macrOS</div>
                <br />
                <Button
                    onClick={handleSubmit}
                    variant="outline-success"
                    >
                    Take Me To Dashboard
                </Button>
                <br />
        
                <Button
                    onClick={() => {
                        setPage(page - 1);
                        setX(-1000);
                    }}
                    variant="outline-secondary"
                    >
                    Previous
                </Button>
        </motion.div>
    );
}

export default Goals;