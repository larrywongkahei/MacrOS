import { useState } from "react";
import { Card } from 'react-bootstrap'


const GoalsStats = ({user, setUser, onEdit}) => {

    const calculateBMI = (user) => {
        const bmi = (user.currentWeight)/(user.height/100*2);
        return bmi.toFixed(2);
    }

    return(
        <Card className="container-card">
            <Card.Header className="charts-title">{user.name}'s Statistics</Card.Header>
                <p>Starting weight: {user.startingWeight}kg</p>
                <p>Your current weight: {user.currentWeight}kg</p>
                <p>Your goal weight: {user.goalWeight}kg</p>
                <p>Current BMI: {calculateBMI(user)}</p>
        </Card>


    )
}

export default GoalsStats;