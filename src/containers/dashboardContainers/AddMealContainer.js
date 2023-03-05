import React from "react";
import FoodSearchForm from "../../components/dashboardComponents/FoodSearchForm";

const AddMealContainer = ({foodItems, searchFoodItemsByThreeLetters, filteredList, getDateData, addCustomFood, putFoodItemsIntoList}) => {
    return(
        <div className="component-container">
        <p>I am AddMealContainer containing:</p>
        <FoodSearchForm foodItems={foodItems} searchFoodItemsByThreeLetters={searchFoodItemsByThreeLetters} filteredList={filteredList} getDateData={getDateData} addCustomFood={addCustomFood} putFoodItemsIntoList={putFoodItemsIntoList}/>
        </div>
    )
}

export default AddMealContainer;