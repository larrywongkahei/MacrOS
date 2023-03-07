import { set } from "date-fns";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const FoodSearchForm = ({foodItems, searchFoodItemsByThreeLetters, getDateData, addCustomFood, updateDayTotal, user, setUser, handleUserPut }) => {

    const [foodInput, setFoodInput] = useState("")
    const [filtereditems, setFilteredItems] = useState([])
    const [filteredFoodItems, setFilteredFoodItems] = useState([])
    const [mealType, setMealType] = useState("")
    const [breakfastFoodItems, setBreakfastFoodItems] = useState([])
    const [lunchFoodItems, setLunchFoodItems] = useState([])
    const [dinnerFoodItems, setDinnerFoodItems] = useState([])
    const [snackFoodItems, setSnackFoodItems] = useState([])
    const [theItem, setTheItem] = useState({})
    const [quantity, setQuantity] = useState("")
    const [customFoodName, setCustomFoodName] = useState("")
    const [customFoodCarbs, setCustomFoodCarbs] = useState("")
    const [customFoodSugars, setCustomFoodSugars] = useState("")
    const [customFoodProtein, setCustomFoodProtein] = useState("")
    const [customFoodFat, setCustomFoodFat] = useState("")
    const [customFoodCalories, setCustomFoodCalories] = useState("")
    const [customOpen, setCustomOpen] = useState(false)
    const [weightBox, setWeightbox] = useState("")


    // Day
    // Date
    // list of Meals - 4 meal - fooditems
    // Completed

    // const Day = {
    //     "date" : Date().now()
    // }


    useEffect(() => {
    updateDayTotal(dayTotals)
    }, [breakfastFoodItems, lunchFoodItems, dinnerFoodItems, snackFoodItems])
    


    function handleCustomFoodNameChange(e){
        setCustomFoodName(e.target.value)
    }

    function handleCustomFoodCarbsChange(e){
        setCustomFoodCarbs(e.target.value)
    }

    function handleCustomFoodSugarsChange(e){
        setCustomFoodSugars(e.target.value)
    }

    function handleCustomFoodProteinChange(e){
        setCustomFoodProtein(e.target.value)
    }

    function handleCustomFoodFatChange(e){
        setCustomFoodFat(e.target.value)
    }

    function handleCustomFoodCaloriesChange(e){
        setCustomFoodCalories(e.target.value)
    }

    function filterFoodItems(letters, list){
        setFilteredFoodItems(list.filter(each => {
            return each.name.toLowerCase().startsWith(letters)

        }))
    }

    function getTheFoodItem(e){
        e.preventDefault()
        const item = filtereditems.find(each => each.id === parseInt(e.target.value))
        setFoodInput(item.name)
        setTheItem(item)
        setFilteredFoodItems([])


    }

    async function handleFoodInputChange(e){
        setFoodInput(e.target.value)
        if(e.target.value.length === 3){
            const foodItemsData = await searchFoodItemsByThreeLetters(e.target.value)
            setFilteredItems(foodItemsData)
            filterFoodItems(e.target.value.toLowerCase(), foodItemsData)
        }
        if(e.target.value.toLowerCase().length > 3){
            const foodItemsData = await searchFoodItemsByThreeLetters(e.target.value)
            filterFoodItems(e.target.value.toLowerCase(), foodItemsData)
        }
    }

    function handleQuantity(e){
        setQuantity(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setMealType("")
    }

    function handleClickSubmit(e){
        e.preventDefault();
        handleUserPut(user)
        setWeightbox("")
    }

    function handleCompleteDay(e){
        e.preventDefault()
        // gets todays date
        const date = new Date();
        // toISOString() method converts to ISO format. split removes the time
        const isoDateStr = date.toISOString().split('T')[0];
        console.log(isoDateStr);


        
        // "date" : `LocalDate.of(${date.getFullYear()}, ${date.getMonth()}, ${date.getDay()})`,
        const completedDay = {
            date: isoDateStr,
            userWeight: user.currentWeight,
        }
        console.log("next")
        getDateData(completedDay, [breakfastFoodItems, lunchFoodItems, dinnerFoodItems, snackFoodItems])
        Swal.fire({
            title: 'Day Complete!',
            text: 'The day has been added to your diary',
            icon: 'success',
            confirmButtonText: 'Return'
          })
        // getDateData -> handleDayPost automatically resets the page and meal/day state
        // alert to say day has been completed and saved
        
    }

    function handleMealType(e){
        e.preventDefault()
        setMealType(e.target.value)
    }
    
    function handleAdd(e){
        e.preventDefault()
        if (quantity <= 0){
            Swal.fire({
                title: 'Oops!',
                text: 'The quantity must be more than zero',
                icon: 'error',
                confirmButtonText: 'Return'
              })
        }else{
        const listToBeMultiply = ["carbs", "sugars", "protein", "fat", "calories"]
        listToBeMultiply.forEach(each => {
            theItem[each] = theItem[each] * quantity / 100
        })

        switch(mealType){
            case "Breakfast":
                const newBreakfastList = [...breakfastFoodItems]
                newBreakfastList.push(theItem)
                setBreakfastFoodItems(newBreakfastList)
                break;
            case "Lunch":
                const newLunchList = [...lunchFoodItems]
                newLunchList.push(theItem)
                setLunchFoodItems(newLunchList)
                break;
            case "Dinner":
                const newDinnerList = [...dinnerFoodItems]
                newDinnerList.push(theItem)
                setDinnerFoodItems(newDinnerList)
                break;
            case "Snack":
                const newSnackList = [...dinnerFoodItems]
                newSnackList.push(theItem)
                setSnackFoodItems(newSnackList)
                break;
        }
        setFilteredFoodItems([])
        setTheItem({})
        setFoodInput("")
        setQuantity("")
        console.log('day totals', dayTotals);
        updateDayTotal(dayTotals)
    }
    }
    const foodItemsToShow = filteredFoodItems.splice(0,5).map((each,index) => {
        return (
            <ul>
                <li onClick={getTheFoodItem} value={each.id} key={index} className="db-food-item">
                    <b>{each.name}</b> C {each.carbs} / P {each.protein} / F {each.fat} (per 100g)
                </li>
                {/* button to add the fooditems, could use react icons */}
                {/* <button onClick={getTheFoodItem} value={each.id}>+</button> */}
            </ul>
        )
    })

    // const itemDetails = itemsChosen.map(each => {
    //     return (
    //     <ul>
    //         {/* <li >
    //             FoodItem {itemsChosen.indexOf(each) + 1} :
    //         </li> */}
    //         <li>
    //             {each.name}
    //         </li>
    //         <li>
    //             carbs : {each.carbs}
    //         </li>
    //         <li>
    //             sugars : {each.sugars}
    //         </li>
    //         <li>
    //             protein : {each.protein}
    //         </li>
    //         <li>
    //             fat : {each.fat}
    //         </li>
    //         <li>
    //             calories : {each.calories}
    //         </li>
    //     </ul>
    //     )
    // })

   const onRemoveBreakfast = (item) => {
    const newList = breakfastFoodItems.filter(each => each !== item)
    setBreakfastFoodItems(newList)
   }

   const onRemoveLunch = (item) => {
    const newList = lunchFoodItems.filter(each => each !== item)
    setLunchFoodItems(newList)
   }

   const onRemoveDinner = (item) => {
    const newList = dinnerFoodItems.filter(each => each !== item)
    setDinnerFoodItems(newList)
   }

   const onRemoveSnack = (item) => {
    const newList = snackFoodItems.filter(each => each !== item)
    setSnackFoodItems(newList)
   }

   function handleAddCustomFood(e){
    e.preventDefault()
    const customFoodItem = {
        "name" : customFoodName,
        "carbs" : customFoodCarbs,
        "sugars" :  customFoodSugars,
        "protein" : customFoodProtein,
        "fat" : customFoodFat,
        "calories" : customFoodCalories,
    }
    addCustomFood(customFoodItem)

    // clears input fields. correct way?
    setCustomFoodName("");
    setCustomFoodCalories("")
    setCustomFoodCarbs("")
    setCustomFoodSugars("")
    setCustomFoodProtein("")
    setCustomFoodFat("")
    setCustomOpen(!customOpen)

    // pop up alert on completion
    Swal.fire({
        title: 'Success!',
        text: 'You have added your custom food to our database and can now search for it',
        icon: 'success',
        confirmButtonText: 'Return'
        })
    }

//    calculate macro totals for each meal type state

function calculateTotals(mealTypeState){
    const totals = mealTypeState.reduce(
        // acc is the accumlator which keeps track of the running total. Item is the the current element from array in the loop
        (acc, item) => {
            acc.calories += item.calories;
            acc.carbs += item.carbs;
            acc.sugars += item.sugars;
            acc.protein += item.protein;
            acc.fat += item.fat;
            return acc;
        }, { calories: 0, carbs: 0, sugars: 0, protein: 0, fat: 0 } // this line sets the intital accumulator values at 0
        
    );
    return totals


    
}

const handleChange = function (event) {
    let propertyName = event.target.name;
    let copiedUser = { ...user };
    copiedUser[propertyName] = event.target.value;
    setUser(copiedUser);
}

// assign calorie totals to variables for rendering
const breakfastTotals = calculateTotals(breakfastFoodItems);
const lunchTotals = calculateTotals(lunchFoodItems);
const dinnerTotals = calculateTotals(dinnerFoodItems);
const snacksTotals = calculateTotals(snackFoodItems);

// same as above which sums all of the properties from each variable to give the daily total
const dayTotals = [breakfastTotals, lunchTotals, dinnerTotals, snacksTotals]
        .reduce((acc, totals) => {
            acc.calories += totals.calories
            acc.carbs += totals.carbs;
            acc.sugars += totals.sugars;
            acc.protein += totals.protein;
            acc.fat += totals.fat;
            return acc;
        }, { calories: 0, carbs: 0, sugars: 0, protein: 0, fat: 0 }
        );

        

    return(
        <Card>
            
                <Card>
                    <Card.Body>
                        <Form>
                            {!mealType ?
                            <div>
                                <Button value={"Breakfast"} onClick={handleMealType} variant="secondary" className="me-2">Breakfast +</Button>
                                <Button value={"Lunch"} onClick={handleMealType} variant="secondary" className="me-2">Lunch +</Button>
                                <Button value={"Dinner"} onClick={handleMealType} variant="secondary" className="me-2">Dinner +</Button>
                                <Button value={"Snack"} onClick={handleMealType} variant="secondary" className="me-2">Snacks +</Button>
                            </div>
                            : null}
                            {mealType ? 
                            <Form.Group>
                                <Form.Label>Food Search</Form.Label>
                                <Form.Control type="text" placeholder="Input your food here" value={foodInput} onChange={handleFoodInputChange} />
                                {/* <button>Barcode Scanner button</button> */}
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control placeholder="Enter quantity in grams"type="number" value={quantity} onChange={handleQuantity} />
                                <Button onClick={handleAdd} className="my-3" variant="primary">Add to {mealType}</Button>
                                {filteredFoodItems ? 
                                <div>
                                    {foodItemsToShow}
                                </div>
                                : null}
                                {/* {itemsChosen ?
                                <div>
                                {itemDetails}
                                </div> :null} */}
                                <Button onClick={handleSubmit} className="my-3" variant="success">Choose Meal</Button>
                            </Form.Group>
                            : null}
                        </Form>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <Button onClick={() => setCustomOpen(!customOpen)}>Custom Food +</Button>
                        {customOpen && (
                                            <Form>
                                                <Form.Group className="mb-3">
                                                <Form.Label>Food Name</Form.Label>
                                                <Form.Control required type="text" placeholder="Input the name" value={customFoodName} onChange={handleCustomFoodNameChange}/>
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                <Form.Label>Carbohydrates</Form.Label>
                                                <Form.Control type="text" placeholder="Enter carbohydrates per 100g" value={customFoodCarbs} onChange={handleCustomFoodCarbsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                <Form.Label>Sugars</Form.Label>
                                                <Form.Control type="text" placeholder="Enter sugars per 100g" value={customFoodSugars} onChange={handleCustomFoodSugarsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                <Form.Label>Protein</Form.Label>
                                                <Form.Control type="text" placeholder="Enter protein per 100g" value={customFoodProtein} onChange={handleCustomFoodProteinChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                <Form.Label>Fats</Form.Label>
                                                <Form.Control type="text" placeholder="Enter fat per 100g" value={customFoodFat} onChange={handleCustomFoodFatChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                <Form.Label>Calories</Form.Label>
                                                <Form.Control type="text" placeholder="Enter calories per 100g" value={customFoodCalories} onChange={handleCustomFoodCaloriesChange} />
                                                <Button onClick={handleAddCustomFood}>Add to Database</Button>
                                                </Form.Group>
                                            </Form>
                                            )}
                    </Card.Body>
                </Card>
                    
                    

        <Container>
            <div>
            <h2 className="text-left">Breakfast</h2>{breakfastFoodItems.length > 0 ?(
                <Card>
                <ul>
                    {breakfastFoodItems.map((item) => (
                        <li key={item}>
                            <span>
                                <b>{item.name}</b> Calories: {item.calories.toFixed(0)} Carbs: {item.carbs.toFixed(1)}g Sugars: {item.sugars.toFixed(1)}g Protein:{item.protein.toFixed(0)}g Fat: {item.fat.toFixed(0)}g
                                <button onClick={() => onRemoveBreakfast(item)}>Remove Item</button>
                            </span>
                        </li>
                    ))}
                </ul> 
                <ul>
                    <li><b>Totals 
                        Calories:{breakfastTotals.calories.toFixed(0)}Kcal 
                        Carbs:{breakfastTotals.carbs.toFixed(0)}g 
                        Sugars:{breakfastTotals.sugars.toFixed(0)}g 
                        Protein:{breakfastTotals.protein.toFixed(0)}g 
                        Fat:{breakfastTotals.fat.toFixed(0)}g
                        </b> 
                    </li>
                </ul>
            </Card>
        ) : null}
    <div>
        <h2>Lunch</h2>{lunchFoodItems.length > 0 ?(
            <Card>
                <ul>
                    {lunchFoodItems.map((item) => (
                        <li key={item}>
                            <span>
                            <b>{item.name}</b> Calories: {item.calories.toFixed(0)} Carbs: {item.carbs.toFixed(1)}g Sugars: {item.sugars.toFixed(1)}g Protein:{item.protein.toFixed(0)}g Fat: {item.fat.toFixed(0)}g
                            <button onClick={() => onRemoveLunch(item)}>Remove Item</button>
                            </span>
                        </li>
                    ))}
                </ul> 
                <ul>
                    <li><b>Totals
                            Calories:{lunchTotals.calories.toFixed(0)}Kcal 
                            Carbs:{lunchTotals.carbs.toFixed(0)}g 
                            Sugars:{lunchTotals.sugars.toFixed(0)}g 
                            Protein:{lunchTotals.protein.toFixed(0)}g 
                            Fat:{lunchTotals.fat.toFixed(0)}g
                            </b> 
                        </li>
                    </ul>
            </Card>
            ) : null}
        
    </div>
    <div>
        
        <h2>Dinner</h2>{dinnerFoodItems.length > 0 ?(
        <Card>
            <ul>
                {dinnerFoodItems.map((item) => (
                    <li key={item}>
                        <span>
                        <b>{item.name}</b> Calories: {item.calories.toFixed(0)} Carbs: {item.carbs.toFixed(1)}g Sugars: {item.sugars.toFixed(1)}g Protein:{item.protein.toFixed(0)}g Fat: {item.fat.toFixed(0)}g
                        <button onClick={() => onRemoveDinner(item)}>Remove Item</button>
                        </span>
                    </li>
                ))}
            </ul> 
            <ul>
                    <li><b>Totals 
                        Calories:{dayTotals.calories.toFixed(0)}Kcal 
                        Carbs:{dayTotals.carbs.toFixed(0)}g 
                        Sugars:{dayTotals.sugars.toFixed(0)}g 
                        Protein:{dayTotals.protein.toFixed(0)}g 
                        Fat:{dayTotals.fat.toFixed(0)}g
                        </b> 
                    </li>
                    </ul>
        </Card>
        ) : null}
    </div>
    <div>
        <h2>Snacks</h2>{snackFoodItems.length > 0 ?(
        <Row>
            <ul>
                {snackFoodItems.map((item) => (
                    <li key={item}>
                        <span>
                        <b>{item.name}</b> Calories: {item.calories.toFixed(0)} Carbs: {item.carbs.toFixed(1)}g Sugars: {item.sugars.toFixed(1)}g Protein:{item.protein.toFixed(0)}g Fat: {item.fat.toFixed(0)}g
                        <button onClick={() => onRemoveSnack(item)}>Remove Item</button>
                        </span>
                    </li>
                ))}
            </ul>
            <ul>
                    <li><b>Totals 
                        Calories:{snacksTotals.calories.toFixed(0)}Kcal 
                        Carbs:{snacksTotals.carbs.toFixed(0)}g 
                        Sugars:{snacksTotals.sugars.toFixed(0)}g 
                        Protein:{snacksTotals.protein.toFixed(0)}g 
                        Fat:{snacksTotals.fat.toFixed(0)}g
                        </b> 
                    </li>
            </ul> 
        </Row>
        ) : null}
        </div>

        </div>
    </Container>
        <Card>
            <Card.Body>
                <p><b>Todays Totals </b>
                        Calories:{dayTotals.calories.toFixed(0)}Kcal 
                        Carbs:{dayTotals.carbs.toFixed(0)}g 
                        Sugars:{dayTotals.sugars.toFixed(0)}g 
                        Protein:{dayTotals.protein.toFixed(0)}g 
                        Fat:{dayTotals.fat.toFixed(0)}g
                </p>
                <form onSubmit={handleClickSubmit}>
                        <label for="weightUpdate">Weigh in!</label><br/>
                        <input type="text" id="weightUpdate" placeholder={`Current weight: ${user.currentWeight}kg`} name="currentWeight" onChange={handleChange} />
                        <button type="submit">+</button>
                    </form>
            </Card.Body>
        </Card>

    <button onClick={handleCompleteDay}>Complete Day</button>
    
    </Card>
    )
}

export default FoodSearchForm;