import { useState } from "react";

const GoalsStats = ({user, setUser, onEdit}) => {

    const calculateBMI = (user) => {
        const bmi = (user.currentWeight)/(user.height/100*2);
        return bmi.toFixed(2);
    }

    return(
        <div className="component-container">
            <h3>Your statistics</h3>
                <p>Starting weight: {user.startingWeight}kg</p>
                <p>Your current weight: {user.currentWeight}kg</p>
                <p>Your goal weight: {user.goalWeight}kg</p>
                <p>Current BMI: {calculateBMI(user)}</p>
        </div>


    )
}

export default GoalsStats;