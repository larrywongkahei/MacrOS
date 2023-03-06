import React, { useState } from "react";
import UserUpdateForm from "../../components/dashboardComponents/UserUpdateForm";
import AddMealContainer from "./AddMealContainer";
import ExerciseContainer from "./ExerciseContainer";
import MacroStatsContainer from "./MacroStatsContainer";

const DashboardContainer = ({user, foodItems, searchFoodItemsByThreeLetters, filteredList, getDateData, addCustomFood}) => {


return (
    <>
    <AddMealContainer foodItems={foodItems} searchFoodItemsByThreeLetters={searchFoodItemsByThreeLetters} filteredList={filteredList} getDateData={getDateData} addCustomFood={addCustomFood}/>
    <MacroStatsContainer user={user} />
    <ExerciseContainer />
    <UserUpdateForm />
    </>
);
}

export default DashboardContainer