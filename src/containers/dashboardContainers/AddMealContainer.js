import React from "react";
import FoodSearchForm from "../../components/dashboardComponents/FoodSearchForm";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const AddMealContainer = ({foodItems, searchFoodItemsByThreeLetters, filteredList, getDateData, addCustomFood, updateDayTotal }) => {
    return(
        <Container>
            <FoodSearchForm foodItems={foodItems} searchFoodItemsByThreeLetters={searchFoodItemsByThreeLetters} filteredList={filteredList} getDateData={getDateData} addCustomFood={addCustomFood} updateDayTotal={updateDayTotal}/>
        </Container>
    )
}

export default AddMealContainer;