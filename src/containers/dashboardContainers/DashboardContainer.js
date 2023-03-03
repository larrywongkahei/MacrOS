import React, { useState } from "react";
import UserUpdateForm from "../../components/dashboardComponents/UserUpdateForm";
import AddMealContainer from "./AddMealContainer";
import ExerciseContainer from "./ExerciseContainer";
import MacroStatsContainer from "./MacroStatsContainer";

const DashboardContainer = ({user, foodItems, searchFoodItemsByThreeLetters, filteredList, getDateData}) => {


return (
    <>
    <AddMealContainer foodItems={foodItems} searchFoodItemsByThreeLetters={searchFoodItemsByThreeLetters} filteredList={filteredList} getDateData={getDateData}/>
    <MacroStatsContainer />
    <ExerciseContainer />
    <UserUpdateForm />
    </>
);
}

export default DashboardContainer