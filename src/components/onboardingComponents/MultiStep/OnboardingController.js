import { useState } from 'react';
import './OnboardingController.css'
import ActivityLevel from './ActivityLevel';
import Age from './Age';
import GoalWeight from './GoalWeight';
import Height from './Height';
import Name from './Name';
import Sex from './Sex';
import Weight from './Weight';
import Goals from './Goals'



function OnboardingController({ handleUserPost }) {


    const emptyUser = {
        name: "",
        age: 0,
        sex: "",
        height: 0,
        startingWeight: 0,
        currentWeight: 0,
        goalWeight: 0,
        activityLevel: "",
        experiencePoints: 0,
        caloriesGoal: 0,
        proteinGoal: 0,
        fatGoal: 0,
        carbsGoal: 0,
        sugarsGoal: 0
    };

    const [newUser, setNewUser] = useState({ ...emptyUser });

    const [page, setPage] = useState(0);

    const [x,setX] = useState(0)

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
        <GoalWeight
            newUser={newUser}
            setNewUser={setNewUser}
            handleUserPost={handleUserPost}
            page={page}
            setPage={setPage}
            x={x}
            setX={setX}
        />,
        <Goals
            newUser={newUser}
            setNewUser={setNewUser}
            handleUserPost={handleUserPost}
            page={page}
            setPage={setPage}
            x={x}
            setX={setX}
        />
        
    ]

    return (
        <div className="App">
            <div className="progress-bar">
            <div style={{width: page === 0? "15%": page === 1? "30%": page === 2? "45%" : page ===3 ? "60%" : page === 4 ? "75%" : page === 5 ? "85%" : "100%"}}></div>
            </div>
            <div>{componentList[page]}</div>
        </div>
    );
}

export default OnboardingController;