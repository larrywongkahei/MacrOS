import { useState } from "react";


const OnBoardingUserInputForm = ({handleUserPost}) => {


    const emptyUser = {
        name:"",
        age:0,
        sex:"",
        height:0,
        startingWeight:0,
        currentWeight:0,
        goalWeight:0,
        activityLevel:"",
        experiencePoints:0,
        caloriesGoal:0,
        proteinGoal:0,
        fatGoal:0,
        carbsGoal:0,
        sugarsGoal:0
    };

    const [newUser,setNewUser] = useState({...emptyUser});

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedUser = {...newUser};
        copiedUser[propertyName] = event.target.value;
        setNewUser(copiedUser)
    }


    const resetForm = () => {
        setNewUser({...emptyUser});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleUserPost(newUser);
        resetForm();
    }


    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={newUser.name}
            placeholder="Name"
            name="name"
            onChange={handleChange}
            />
            <label>Age: </label>
            <input
            type="text"
            value={newUser.age}
            placeholder="Age"
            name="age"
            onChange={handleChange}
            />
            <input
            type="text"
            value={newUser.sex}
            placeholder="Sex"
            name="sex"
            onChange={handleChange}
            />
            <label>Height: </label>
            <input
            type="text"
            value={newUser.height}
            placeholder="Height"
            name="height"
            onChange={handleChange}
            />
            <label>Starting weight: </label>
            <input
            type="text"
            value={newUser.startingWeight}
            placeholder="Starting Weight"
            name="startingWeight"
            onChange={handleChange}
            />
            <label>Current Weight: </label>
            <input
            type="text"
            value={newUser.currentWeight}
            placeholder="Current Weight"
            name="currentWeight"
            onChange={handleChange}
            />
            <label>Goal Weight: </label>
            <input
            type="text"
            value={newUser.goalWeight}
            placeholder="Goal Weight"
            name="goalWeight"
            onChange={handleChange}
            />
            <label>Activity Level: </label>
            <select name="activityLevel" value={newUser.activityLevel} onChange={handleChange}>
                <option>SEDENTARY</option>
                <option>LIGHT</option>
                <option>MODERATE</option>
                <option>ACTIVE</option>
                <option>VERY_ACTIVE</option>
                <option>EXTRA_ACTIVE</option>
            </select>
            <button type="submit">Onboard Me daddy</button>
        </form>
    )
}

export default OnBoardingUserInputForm;