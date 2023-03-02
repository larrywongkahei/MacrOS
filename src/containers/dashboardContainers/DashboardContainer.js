import React, { useState } from "react";
import UserUpdateForm from "../../components/dashboardComponents/UserUpdateForm";
import AddMealContainer from "./AddMealContainer";
import ExerciseContainer from "./ExerciseContainer";
import MacroStatsContainer from "./MacroStatsContainer";

const DashboardContainer = ({user, foodItems}) => {


return (
    <>
    <p>Hi, I am {user.name}</p>
    <AddMealContainer foodItems={foodItems}/>
    <MacroStatsContainer />
    <ExerciseContainer />
    <UserUpdateForm />
    </>
);
}

export default DashboardContainer