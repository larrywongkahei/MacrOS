import React from "react";
import FoodSearchForm from "../../components/dashboardComponents/FoodSearchForm";

const AddMealContainer = ({foodItems, searchFoodItemsByThreeLetters, filteredList, getDateData, addCustomFood, updateDayTotal, user }) => {
    return(
        <div className="container text-center">
        <FoodSearchForm foodItems={foodItems} searchFoodItemsByThreeLetters={searchFoodItemsByThreeLetters} filteredList={filteredList} getDateData={getDateData} addCustomFood={addCustomFood} updateDayTotal={updateDayTotal} user={user}/>
        </div>
    )
}

export default AddMealContainer;