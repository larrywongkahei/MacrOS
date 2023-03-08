import { useState } from 'react';
import './OnboardingController.css'
import ActivityLevel from './ActivityLevel';
import GoalType from './GoalType';
import Age from './Age';
import GoalWeight from './GoalWeight';
import Height from './Height';
import Name from './Name';
import Sex from './Sex';
import Weight from './Weight';
import Goals from './Goals'
import ProgressBar from 'react-bootstrap/ProgressBar'




function OnboardingController({ handleUserPost }) {


    const emptyUser = {
        name: "",
        age: "",
        sex: "",
        height: "",
        startingWeight: "",
        currentWeight: "",
        goalWeight: "",
        activityLevel: "",
        goalType: "",
        experiencePoints: "",
        caloriesGoal: 0,
        proteinGoal: 0,
        fatGoal: 0,
        carbsGoal: 0,
        sugarsGoal: 0
    };

    const [newUser, setNewUser] = useState({ ...emptyUser });

    const [page, setPage] = useState(0);

    const [x, setX] = useState(0)

    const componentList = [
        <Name
            newUser={newUser}
            setNewUser={setNewUser}
            page={page}
            setPage={setPage}
            x={x}
            setX={setX}
            
        />,
        <Age
            newUser={newUser}
            setNewUser={setNewUser}
            page={page}
            setPage={setPage}
            x={x}
            setX={setX}
        />,
        <Sex
            newUser={newUser}
            setNewUser={setNewUser}
            page={page}
            setPage={setPage}
            x={x}
            setX={setX}
        />,
        <Height
            newUser={newUser}
            setNewUser={setNewUser}
            page={page}
            setPage={setPage}
            x={x}
            setX={setX}
        />,
        <Weight
            newUser={newUser}
            setNewUser={setNewUser}
            page={page}
            setPage={setPage}
            x={x}
            setX={setX}
        />,
        <ActivityLevel
            newUser={newUser}
            setNewUser={setNewUser}
            page={page}
            setPage={setPage}
            x={x}
            setX={setX}
        />,
        <GoalType
            newUser={newUser}
            setNewUser={setNewUser}
            page={page}
            setPage={setPage}
            x={x}
            setX={setX}
        />,
        <GoalWeight
            newUser={newUser}
            setNewUser={setNewUser}
            page={page}
            setPage={setPage}
            x={x}
            setX={setX}
        />,
        <Goals
            newUser={newUser}
            emptyUser={emptyUser}
            setNewUser={setNewUser}
            handleUserPost={handleUserPost}
            page={page}
            setPage={setPage}
            x={x}
            setX={setX}
        />
        
    ]

    return (
        <div>
            <div>{componentList[page]}</div>
        </div>
    );
}

export default OnboardingController;