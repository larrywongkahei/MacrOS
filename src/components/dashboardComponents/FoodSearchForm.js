import { set } from "date-fns";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'

import { Container, Card, Row, Form, Table, Button, ListGroup, Modal } from 'react-bootstrap';
import { PlusCircle, XCircle, JournalPlus, Speedometer } from 'react-bootstrap-icons';

const FoodSearchForm = ({foodItems, searchFoodItemsByThreeLetters, getDateData, addCustomFood, updateDayTotal, user, setUser, handleUserPut}) => {
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

    // state for modals
    const [showFoodAdd, setShowFoodAdd] = useState(false);
    const [showCustomFoodAdd, setShowCustomFoodAdd] = useState(false);
    const [showWeightChanger, setShowWeightChanger] = useState(false);
    const handleCloseFoodAdd = () => {
        setShowFoodAdd(false);
        setMealType("");
    }
    const handleShowFoodAdd = () => setShowFoodAdd(true);

    const handleCustomFoodAdd = () => setShowCustomFoodAdd(true);

    const handleCloseCustomFoodAdd = () => setShowCustomFoodAdd(false);

    const handleWeightUpdateAdd = () => setShowWeightChanger(true);

    const handleCloseWeightChanger = () => setShowWeightChanger(false);


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
    

    const handleWeightChange = function (event) {
        let propertyName = event.target.name;
        let copiedUser = { ...user };
        copiedUser[propertyName] = event.target.value;
        setUser(copiedUser);
    }

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
        handleUserPut(user);
        setShowWeightChanger(false);
        console.log(user.currentWeight);
        Swal.fire({
            title: 'Weigh In Complete!',
            text: `Your weight has been updated to ${user.currentWeight}kg` ,
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#A5DC86'
          })
    }

    function handleCompleteDay(e){
        e.preventDefault()
        // gets todays date
        const date = new Date();
        // toISOString() method converts to ISO format. split removes the time
        const isoDateStr = date.toISOString().split('T')[0];
      


        
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
            confirmButtonText: 'OK',
            confirmButtonColor: '#A5DC86'
          })
        // getDateData -> handleDayPost automatically resets the page and meal/day state
        // alert to say day has been completed and saved
        
    }

    function handleMealType(e){
        e.preventDefault()
        setMealType(e.target.value)
        handleShowFoodAdd()
    }
    
    function handleAdd(e){
        e.preventDefault()
        if (quantity <= 0){
            Swal.fire({
                title: 'Oops!',
                text: 'The quantity must be more than zero',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5DC86'
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
    setShowCustomFoodAdd(false)

    // pop up alert on completion
    Swal.fire({
        title: 'Success!',
        text: 'You have added your custom food to our database and can now search for it',
        icon: 'success',
        confirmButtonText: 'Return',
        confirmButtonColor: '#A5DC86'
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

        const today = new Date().toLocaleDateString()

    return(
        <Card className="container-card-big">
            <Card.Header className="diary-title"><h1>Food Diary <JournalPlus size={45}/></h1></Card.Header>
                <Container>
                    <div>
                        <Form>
                            {!mealType ?
                            <Container className="d-flex justify-content-center container-card-buttons">
                                <Button value={"Breakfast"} onClick={handleMealType} variant="primary" className="me-2 btn-lg">Breakfast &nbsp; <PlusCircle size={25}/></Button>
                                <Button value={"Lunch"} onClick={handleMealType} variant="primary" className="me-2 btn-lg">Lunch &nbsp; <PlusCircle size={25}/></Button>
                                <Button value={"Dinner"} onClick={handleMealType} variant="primary" className="me-2 btn-lg">Dinner &nbsp; <PlusCircle size={25}/></Button>
                                <Button value={"Snack"} onClick={handleMealType} variant="primary" className="me-2 btn-lg">Snacks &nbsp; <PlusCircle size={25}/></Button>
                                
                    
                                    <Button variant="secondary" onClick={() => handleCustomFoodAdd(!showCustomFoodAdd)}>Custom Food &nbsp; <PlusCircle size={25}/></Button>
                                    <Modal show={showCustomFoodAdd} onHide={handleCloseCustomFoodAdd}>
                                        <Modal.Header className="orange" closeButton>
                                            <Modal.Title>Add Food to Database</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                        
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
                                                    <Button className="max-width mx-auto" variant="success" onClick={handleAddCustomFood}><PlusCircle size={35}/></Button>
                                                    </Form.Group>
                                                    
                                                </Form>
                                            </Modal.Body>
                                            </Modal>
                    

                                            
                    
                        
                            </Container>
                            : null}
                            {mealType ? 
                            <>
                      
                            <Modal show={showFoodAdd} onHide={handleCloseFoodAdd}>
                              <Modal.Header closeButton>
                                <Modal.Title>Add Food(s) to {mealType}</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                    <Form.Group>
                                        <Form.Label>Food Search</Form.Label>
                                        <Form.Control type="text" placeholder="Type your food here" value={foodInput} onChange={handleFoodInputChange} />
                                        {/* <button>Barcode Scanner button</button> */}
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control placeholder="Enter quantity in grams" type="number" value={quantity} onChange={handleQuantity} />
                                        <Button onClick={handleAdd} className="max-width mx-auto btn-height margin-top" variant="success"><PlusCircle size={35}/></Button>
                                        {filteredFoodItems ? 
                                        <div>
                                            {foodItemsToShow}
                                        </div>
                                        : null}
                                        <Button  onClick={handleSubmit} className="max-width mx-auto btn-height" variant="success">Choose Meal</Button>
                                    </Form.Group>
                              </Modal.Body>
                            </Modal>
                          
                            
                            </>
                            : null}
                        </Form>
                        
                    </div>
                </Container>

                
                    
                    

        <Container className="container-card">
            <h2 className="table-title">Breakfast</h2>
            <Table striped bordered hover>
            <thead>
        <tr>
          <th>Food Item</th>
          <th>Calories (Kcal)</th>
          <th>Carbs (g)</th>
          <th>of which Sugars (g)</th>
          <th>Protein (g)</th>
          <th>Fat (g)</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {breakfastFoodItems.map((item) => (
                            <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.calories.toFixed(0)}</td>
                            <td>{item.carbs.toFixed(1)}g</td>
                            <td>{item.sugars.toFixed(1)}g</td>
                            <td>{item.protein.toFixed(0)}g</td>
                            <td>{item.fat.toFixed(0)}g</td>
                            <td>
                            <Button variant="danger" onClick={() => onRemoveBreakfast(item)}><XCircle size={25}/></Button>
                            </td>
                          </tr>
                          
                        ))}
                        <tr>
                           <td><b>Totals</b></td>
                           <td>{breakfastTotals.calories.toFixed(0)}</td>
                           <td>{breakfastTotals.carbs.toFixed(0)}</td>
                           <td>{breakfastTotals.sugars.toFixed(0)}</td>
                           <td>{breakfastTotals.protein.toFixed(0)}</td>
                           <td>{breakfastTotals.fat.toFixed(0)}</td>
                        </tr>
                      </tbody>
                      </Table>
                
                
                      <h2 className="table-title">Lunch</h2>
            <Table striped bordered hover>
            <thead>
        <tr>
          <th>Food Item</th>
          <th>Calories (Kcal)</th>
          <th>Carbs (g)</th>
          <th>of which Sugars (g)</th>
          <th>Protein (g)</th>
          <th>Fat (g)</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {lunchFoodItems.map((item) => (
                            <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.calories.toFixed(0)}</td>
                            <td>{item.carbs.toFixed(1)}g</td>
                            <td>{item.sugars.toFixed(1)}g</td>
                            <td>{item.protein.toFixed(0)}g</td>
                            <td>{item.fat.toFixed(0)}g</td>
                            <td>
                            <Button variant="danger" onClick={() => onRemoveLunch(item)}><XCircle size={25}/></Button>
                            </td>
                          </tr>
                          
                        ))}
                        <tr>
                           <td><b>Totals</b></td>
                           <td>{lunchTotals.calories.toFixed(0)}</td>
                           <td>{lunchTotals.carbs.toFixed(0)}</td>
                           <td>{lunchTotals.sugars.toFixed(0)}</td>
                           <td>{lunchTotals.protein.toFixed(0)}</td>
                           <td>{lunchTotals.fat.toFixed(0)}</td>
                        </tr>
                      </tbody>
                      </Table>
                
                      <h2 className="table-title">Dinner</h2>
            <Table striped bordered hover>
            <thead>
        <tr>
          <th>Food Item</th>
          <th>Calories (Kcal)</th>
          <th>Carbs (g)</th>
          <th>of which Sugars (g)</th>
          <th>Protein (g)</th>
          <th>Fat (g)</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {dinnerFoodItems.map((item) => (
                            <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.calories.toFixed(0)}</td>
                            <td>{item.carbs.toFixed(1)}g</td>
                            <td>{item.sugars.toFixed(1)}g</td>
                            <td>{item.protein.toFixed(0)}g</td>
                            <td>{item.fat.toFixed(0)}g</td>
                            <td>
                            <Button variant="danger" onClick={() => onRemoveDinner(item)}><XCircle size={25}/></Button>
                            </td>
                          </tr>
                          
                        ))}
                        <tr>
                           <td><b>Totals</b></td>
                           <td>{dinnerTotals.calories.toFixed(0)}</td>
                           <td>{dinnerTotals.carbs.toFixed(0)}</td>
                           <td>{dinnerTotals.sugars.toFixed(0)}</td>
                           <td>{dinnerTotals.protein.toFixed(0)}</td>
                           <td>{dinnerTotals.fat.toFixed(0)}</td>
                        </tr>
                      </tbody>
                      </Table>
                      <h2 className="table-title">Snacks</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Food Item</th>
                    <th>Calories (Kcal)</th>
                    <th>Carbs (g)</th>
                    <th>of which Sugars (g)</th>
                    <th>Protein (g)</th>
                    <th>Fat (g)</th>
                    <th></th>
                    </tr>
                </thead>
        <tbody>
        {snackFoodItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.calories.toFixed(0)}</td>
                                <td>{item.carbs.toFixed(1)}g</td>
                                <td>{item.sugars.toFixed(1)}g</td>
                                <td>{item.protein.toFixed(0)}g</td>
                                <td>{item.fat.toFixed(0)}g</td>
                                <td>
                                <Button variant="danger" onClick={() => onRemoveSnack(item)}><XCircle size={25}/></Button>
                                </td>
                            </tr>
                        
                        ))}
                        <tr>
                            <td><b>Totals</b></td>
                            <td>{snacksTotals.calories.toFixed(0)}</td>
                            <td>{snacksTotals.carbs.toFixed(0)}</td>
                            <td>{snacksTotals.sugars.toFixed(0)}</td>
                            <td>{snacksTotals.protein.toFixed(0)}</td>
                            <td>{snacksTotals.fat.toFixed(0)}</td>
                        </tr>
                    </tbody>
                    </Table>
                    
    </Container>
        <Container className="container-card">
            <Container className="d-flex justify-content-center">
                <h2 className="table-title title-width">Daily Totals</h2>
            </Container>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th></th>
                    <th>Calories (Kcal)</th>
                    <th>Carbs (g)</th>
                    <th>of which Sugars (g)</th>
                    <th>Protein (g)</th>
                    <th>Fat (g)</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td><b>Day Totals</b></td>
                        <td>{dayTotals.calories.toFixed(0)}</td>
                        <td>{dayTotals.carbs.toFixed(0)}</td>
                        <td>{dayTotals.sugars.toFixed(0)}</td>
                        <td>{dayTotals.protein.toFixed(0)}</td>
                        <td>{dayTotals.fat.toFixed(0)}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        <Container className="d-flex justify-content-center">
            <Button className="btn-fit-content" variant="secondary" onClick={() => handleWeightUpdateAdd(!showWeightChanger)}> Weigh in &nbsp; <Speedometer size={25}/></Button>
        </Container>
        <Modal show={showWeightChanger} onHide={handleCloseWeightChanger}>
            <Modal.Header className="orange" closeButton>
                <Modal.Title>Update Weight</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control required type="text" name="currentWeight" placeholder={`Current weight: ${user.currentWeight}kg`} onChange={handleWeightChange} />
                        <Button variant="success" onClick={handleClickSubmit} type="submit">Submit</Button>
                    </Form.Group>
                </Form>

            </Modal.Body>
        </Modal>


    <Container className="d-flex justify-content-center">  
        <Button variant="success" className="me-2 btn-lg btn-padding btn-fit-content" onClick={handleCompleteDay}>Complete Day</Button>
    </Container>
    </Card>
    )
}

export default FoodSearchForm;
