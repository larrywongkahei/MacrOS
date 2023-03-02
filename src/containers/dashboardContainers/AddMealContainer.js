import React from "react";
import FoodSearchForm from "../../components/dashboardComponents/FoodSearchForm";

const AddMealContainer = ({foodItems, searchFoodItemsByThreeLetters, filteredList}) => {
    return(
        <>
        <hr/>
        <p>I am AddMealContainer containing:</p>
        <FoodSearchForm foodItems={foodItems} searchFoodItemsByThreeLetters={searchFoodItemsByThreeLetters} filteredList={filteredList}/>
        </>
    )
}

export default AddMealContainer;