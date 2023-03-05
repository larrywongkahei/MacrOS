import React, { useState } from "react";
import UserUpdateForm from "../../components/dashboardComponents/UserUpdateForm";
import AddMealContainer from "./AddMealContainer";
import ExerciseContainer from "./ExerciseContainer";
import MacroStatsContainer from "./MacroStatsContainer";

const DashboardContainer = ({user, foodItems, searchFoodItemsByThreeLetters, filteredList, getDateData, addCustomFood, putFoodItemsIntoList}) => {


return (
    <>
    <AddMealContainer foodItems={foodItems} searchFoodItemsByThreeLetters={searchFoodItemsByThreeLetters} filteredList={filteredList} getDateData={getDateData} addCustomFood={addCustomFood} putFoodItemsIntoList={putFoodItemsIntoList}/>
    <MacroStatsContainer />
    <ExerciseContainer />
    <UserUpdateForm />
    </>
);
}

export default DashboardContainer