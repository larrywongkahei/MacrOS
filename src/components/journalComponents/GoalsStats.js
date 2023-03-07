import { useState } from "react";

const GoalsStats = ({user, setUser, onEdit}) => {

    const calculateBMI = (user) => {
        const bmi = (user.currentWeight)/(user.height/100*2);
        return bmi.toFixed(2);
    }

    const handleChange = function (event) {
        let propertyName = event.target.name;
        let copiedUser = { ...user };
        copiedUser[propertyName] = event.target.value;
        setUser(copiedUser);
        console.log(copiedUser[propertyName]);
    }

    const handleSubmit = function (event) {
        event.preventDefault();
        onEdit(user);
    }


    return(
        <div className="component-container">
            <h3>Your statistics</h3>
                <p>Starting weight: {user.startingWeight}</p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder={`Current weight: ${user.currentWeight}`} name="currentWeight" onChange={handleChange} />
                        <button type="submit">+</button>
                    </form>
                <p>Current BMI: {calculateBMI(user)}</p>
        </div>


    )
}

export default GoalsStats;