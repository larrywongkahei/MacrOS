import React from "react";
import FoodSearchForm from "../../components/dashboardComponents/FoodSearchForm";

const AddMealContainer = ({foodItems}) => {
    return(
        <>
        <hr/>
        <p>I am AddMealContainer containing:</p>
        <FoodSearchForm foodItems={foodItems}/>
        </>
    )
}

export default AddMealContainer;