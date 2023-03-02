import { useState } from "react";

const GoalsStats = ({user, onEdit}) => {
    
    const [stateUser, setStateUser] = useState(
        {
            id: user.id,
            name: user.name,
            age: user.age,
            sex: user.sex,
            height: user.height,
            startingWeight: user.startingWeight,
            currentWeight: user.currentWeight,
            goalWeight: user.goalWeight,
            activityLevel: user.activityLevel,
            experiencePoints: user.experiencePoints,
            caloriesGoal: user.caloriesGoal,
            proteinGoal: user.proteinGoal,
            fatGoal: user.fatGoal,
            carbsGoal: user.carbsGoal,
            sugarsGoal: user.sugarsGoal
        }
    )

    const calculateBMI = (user) => {
        const bmi = (user.currentWeight)/(user.height/100*2);
        return bmi.toFixed(2);
    }

    const handleChange = function (event) {
        let propertyName = event.target.name;
        let copiedUser = { ...stateUser };
        copiedUser[propertyName] = event.target.value;
        setStateUser(copiedUser);
    }

    const handleSubmit = function (event) {
        event.preventDefault();
        onEdit(stateUser);
    }


    return(
        <>
            <h3>Your statistics</h3>
                <p>Starting weight: {user.startingWeight}</p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder={`Current weight: ${user.currentWeight}`} name="currentWeight" onChange={handleChange} />
                        <button type="submit">+</button>
                    </form>
                <p>Current BMI: {calculateBMI(user)}</p>
        </>


    )
}

export default GoalsStats;