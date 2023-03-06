import React from "react";
import FoodSearchForm from "../../components/dashboardComponents/FoodSearchForm";

const AddMealContainer = ({foodItems, searchFoodItemsByThreeLetters, filteredList, getDateData, addCustomFood, updateDayTotal }) => {
    return(
        <div className="container text-center">
        <p>I am AddMealContainer containing:</p>
        <FoodSearchForm foodItems={foodItems} searchFoodItemsByThreeLetters={searchFoodItemsByThreeLetters} filteredList={filteredList} getDateData={getDateData} addCustomFood={addCustomFood} updateDayTotal={updateDayTotal}/>
        </div>
    )
}

export default AddMealContainer;