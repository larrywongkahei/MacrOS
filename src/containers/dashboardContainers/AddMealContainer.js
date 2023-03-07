import React from "react";
import FoodSearchForm from "../../components/dashboardComponents/FoodSearchForm";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const AddMealContainer = ({foodItems, searchFoodItemsByThreeLetters, filteredList, getDateData, addCustomFood, updateDayTotal, user, setUser, handleUserPut }) => {

const AddMealContainer = ({foodItems, searchFoodItemsByThreeLetters, filteredList, getDateData, addCustomFood, updateDayTotal, setUser, user, handleUserPut }) => {

    return(
        <Card className="container-card">
            <Card.Body>
                <FoodSearchForm foodItems={foodItems} searchFoodItemsByThreeLetters={searchFoodItemsByThreeLetters} filteredList={filteredList} getDateData={getDateData} addCustomFood={addCustomFood} updateDayTotal={updateDayTotal} setUser={setUser} user={user} handleUserPut={handleUserPut}/>
            </Card.Body>
        </Card>
    )
}

export default AddMealContainer;