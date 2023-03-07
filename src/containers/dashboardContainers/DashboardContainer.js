import React, { useState } from "react";
import UserUpdateForm from "../../components/dashboardComponents/UserUpdateForm";
import AddMealContainer from "./AddMealContainer";
import ExerciseContainer from "./ExerciseContainer";
import MacroStatsContainer from "./MacroStatsContainer";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const DashboardContainer = ({ user, setUser, foodItems, searchFoodItemsByThreeLetters, filteredList, getDateData, addCustomFood, updateDayTotal, dayTotals, handleUserPut }) => {


    return (
        <>
            <AddMealContainer foodItems={foodItems} searchFoodItemsByThreeLetters={searchFoodItemsByThreeLetters} filteredList={filteredList} getDateData={getDateData} addCustomFood={addCustomFood} updateDayTotal={updateDayTotal} user={user} setUser={setUser} handleUserPut={handleUserPut}/>
            <MacroStatsContainer dayTotals={dayTotals} user={user} />
            {/* <ExerciseContainer /> */}
            {/* <UserUpdateForm /> */}
        </>
    );



// return (
//     <>
//     <Container>
//         <AddMealContainer foodItems={foodItems} searchFoodItemsByThreeLetters={searchFoodItemsByThreeLetters} filteredList={filteredList} getDateData={getDateData} addCustomFood={addCustomFood} updateDayTotal={updateDayTotal} handleUserPut={handleUserPut} />
//         <MacroStatsContainer dayTotals={dayTotals} user={user}/>
//             {/* <ExerciseContainer /> */}
//             {/* <UserUpdateForm /> */}
//     </Container>
//     </>
// );
}

export default DashboardContainer