import { useState } from "react";
import { Card, Container } from 'react-bootstrap'


const GoalsStats = ({user, setUser, onEdit}) => {

    const calculateBMI = (user) => {
        const bmi = (user.currentWeight)/(user.height/100*2);
        return bmi.toFixed(2);
    }

    return(
        <Card className="container-card">
            <Card.Header className="charts-title green">Weight Goals</Card.Header>
            <Container className="container-card">

                <p><b>Starting Weight:</b> {user.startingWeight}kg</p>
                <p><b>Your goal weight:</b> {user.goalWeight}kg</p>
                <p><b>Goal:</b> {user.goalType}</p>
                <p><b>Activity Level:</b> {user.activityLevel}</p>
                <p><b>Current Weight</b> {user.currentWeight}kg</p>
                <p><b>Current BMI:</b> {calculateBMI(user)}</p>
            </Container>
        </Card>


    )
}

export default GoalsStats;