import React from "react";
import NavBar from "../../components/NavBar";
import UserUpdateForm from "../../components/dashboardComponents/UserUpdateForm";
import AddMealContainer from "./AddMealContainer";
import ExerciseContainer from "./ExerciseContainer";
import MacroStatsContainer from "./MacroStatsContainer";

const DashboardContainer = ({user}) => {

return (
    <>
    <p>Hi, I am {user.name}</p>
    <NavBar />
    <AddMealContainer />
    <MacroStatsContainer />
    <ExerciseContainer />
    <UserUpdateForm />
    </>
);
}

export default DashboardContainer