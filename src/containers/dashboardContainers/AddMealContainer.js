import React from "react";
import FoodSearchForm from "../../components/dashboardComponents/FoodSearchForm";

const AddMealContainer = ({foodItems, searchFoodItemsByThreeLetters, filteredList, getDateData}) => {
    return(
        <>
        <hr/>
        <p>I am AddMealContainer containing:</p>
        <FoodSearchForm foodItems={foodItems} searchFoodItemsByThreeLetters={searchFoodItemsByThreeLetters} filteredList={filteredList} getDateData={getDateData}/>
        </>
    )
}

export default AddMealContainer;