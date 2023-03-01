import { useState } from "react";


const OnBoardingUserInputForm = ({handleUserPost}) => {


    const emptyUser = {
        name:"",
        age:"",
        sex:"",
        height:"",
        startingWeight:"",
        currentWeight:"",
        goalWeight:"",
        activityLevel:"",
        experiencePoints:"",
        caloriesGoal:"",
        proteinGoal:"",
        fatGoal:"",
        carbsGoal:"",
        sugarsGoal:""
    };

    const [newUser,setNewUser] = useState({...emptyUser});

    const handleNameChange = (event) => {
        const copyNewUser = {...newUser};
        copyNewUser.name = event.target.value;
        setNewUser(copyNewUser);
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
        <form>
            <input
            type="text"
            value={newUser.name}
            placeholder="Name"
            name="name"
            onChange={handleNameChange}
            />
            <button type="submit" onClick={handleSubmit}>Add user name</button>
        </form>
    )
}

export default OnBoardingUserInputForm;