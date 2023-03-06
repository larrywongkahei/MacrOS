import React, { useState } from "react";
import UserUpdateForm from "../../components/dashboardComponents/UserUpdateForm";
import AddMealContainer from "./AddMealContainer";
import ExerciseContainer from "./ExerciseContainer";
import MacroStatsContainer from "./MacroStatsContainer";

const DashboardContainer = ({user, foodItems, searchFoodItemsByThreeLetters, filteredList, getDateData, addCustomFood }) => {

    const [dayTotals, setDayTotals] = useState({})

    // function to pull dayTotals from food search form and pass down to MacroCharts

    const updateDayTotal = function(dayTotalsData){
        setDayTotals(dayTotalsData)
        console.log(`Function triggered ${dayTotalsData.calories}`)
    }

return (
    <>

    <AddMealContainer foodItems={foodItems} searchFoodItemsByThreeLetters={searchFoodItemsByThreeLetters} filteredList={filteredList} getDateData={getDateData} addCustomFood={addCustomFood} updateDayTotal={updateDayTotal} dayTotalsState={dayTotals}/>
    <MacroStatsContainer dayTotals={dayTotals}/>

    <ExerciseContainer />
    <UserUpdateForm />
    </>
);
}

export default DashboardContainer