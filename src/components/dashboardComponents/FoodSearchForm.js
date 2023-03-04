import { set } from "date-fns";
import { useState } from "react";
import Swal from 'sweetalert2'

const FoodSearchForm = ({foodItems, searchFoodItemsByThreeLetters, getDateData, addCustomFood}) => {
    const [foodInput, setFoodInput] = useState("")
    const [filtereditems, setFilteredItems] = useState([])
    const [filteredFoodItems, setFilteredFoodItems] = useState([])
    const [mealType, setMealType] = useState("")
    const [breakfastFoodItems, setBreakfastFoodItems] = useState([])
    const [lunchFoodItems, setLunchFoodItems] = useState([])
    const [dinnerFoodItems, setDinnerFoodItems] = useState([])
    const [snackFoodItems, setSnackFoodItems] = useState([])
    const [theItem, setTheItem] = useState({})
    const [quantity, setQuantity] = useState(0)
    const [customFoodName, setCustomFoodName] = useState("")
    const [customFoodCarbs, setCustomFoodCarbs] = useState()
    const [customFoodSugars, setCustomFoodSugars] = useState()
    const [customFoodProtein, setCustomFoodProtein] = useState()
    const [customFoodFat, setCustomFoodFat] = useState()
    const [customFoodCalories, setCustomFoodCalories] = useState()

    // Day
    // Date
    // list of Meals - 4 meal - fooditems
    // Completed

    // const Day = {
    //     "date" : Date().now()
    // }

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
            return each.name.toLowerCase().includes(letters)

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

    function handleCompleteDay(e){
        e.preventDefault()
        // gets todays date
        const date = new Date();
        // toISOString() method converts to ISO format. split removes the time
        const isoDateStr = date.toISOString().split('T')[0];
        console.log(isoDateStr);
        const completedDay = {
            // "date" : `LocalDate.of(${date.getFullYear()}, ${date.getMonth()}, ${date.getDay()})`,
            "date" : isoDateStr,
            "meals" : [breakfastFoodItems, lunchFoodItems, dinnerFoodItems, snackFoodItems],
            "completed" : true
        }
        getDateData(completedDay)
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
            alert("Quantity must be larger than 0")
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
        setQuantity(0)
    }
    }

    const foodItemsToShow = filteredFoodItems.map(each => {
        return (
            <ul>
                <li onClick={getTheFoodItem} value={each.id}>
                    {each.name}
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
        "carbs" : parseInt(customFoodCarbs),
        "sugars" :  parseInt(customFoodSugars),
        "protein" : parseInt(customFoodProtein),
        "fat" : parseInt(customFoodFat),
        "calories" : parseInt(customFoodCalories),
    }
    addCustomFood(customFoodItem)

    // clears input fields. correct way?
    setCustomFoodName("");
    setCustomFoodCalories()
    setCustomFoodCarbs()
    setCustomFoodSugars()
    setCustomFoodProtein()
    setCustomFoodFat()

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
    return totals;

    
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
        <div>
        <div className="component-container">

            <form>
                <p>I am a FoodSearchForm</p>
                {!mealType?
                <div>
                    <button value={"Breakfast"} onClick={handleMealType}>Breakfast</button>
                    <button value={"Lunch"} onClick={handleMealType}>Lunch</button>
                    <button value={"Dinner"} onClick={handleMealType}>Dinner</button>
                    <button value={"Snack"} onClick={handleMealType}>Snacks</button>
            

                </div>
                :null}
                {mealType ? 
                <div>
                    <input type="text" placeholder="Input your food here" value={foodInput} onChange={handleFoodInputChange}/>
                    {/* <button>Barcode Scanner button</button> */}
                    <label> Quantity(grams): </label>
                    <input type="number" value={quantity} onChange={handleQuantity}/>
                    <button onClick={handleAdd}>Add to {mealType}</button>

                    {filteredFoodItems ? 
                    <div>
                        {foodItemsToShow}
                    </div>
                    :null}
                    {/* {itemsChosen ?
                    <div>
                        {itemDetails}
                    </div> :null} */}
                    <button onClick={handleSubmit}>Choose Meal</button>
                </div>: null}
            </form>
        </div>
        <div className="component-container">
            <form>
                <input type="text" placeholder="Input the name" value={customFoodName} onChange={handleCustomFoodNameChange}/>
                <label> Carbs (per 100g): </label>
                <input type="text" placeholder="Input the carbs" value={customFoodCarbs} onChange={handleCustomFoodCarbsChange}/>
                <label> Sugars (per 100g): </label>
                <input type="text" placeholder="Input the sugars" value={customFoodSugars} onChange={handleCustomFoodSugarsChange}/>
                <label> Protein (per 100g): </label>
                <input type="text" placeholder="Input the protein" value={customFoodProtein} onChange={handleCustomFoodProteinChange}/>
                <label> Fats (per 100g): </label>
                <input type="text" placeholder="Input the fats" value={customFoodFat} onChange={handleCustomFoodFatChange}/>
                <label> Calories (per 100g): </label>
                <input type="text" placeholder="Input the calories" value={customFoodCalories} onChange={handleCustomFoodCaloriesChange}/>
                <button onClick={handleAddCustomFood}>Add FoodItem</button>
            </form>
        </div>
        <div>
        <h2>Breakfast</h2>{breakfastFoodItems.length > 0 ?(
            <>
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
                    <p><b>Breakfast Totals </b> 
                        Calories:{breakfastTotals.calories.toFixed(0)}Kcal 
                        Carbs:{breakfastTotals.carbs.toFixed(0)}g 
                        Sugars:{breakfastTotals.sugars.toFixed(0)}g 
                        Protein:{breakfastTotals.protein.toFixed(0)}g 
                        Fat:{breakfastTotals.fat.toFixed(0)}g
                    </p>
            </>
        ) : null}
    </div>
    <div>
        <h2>Lunch</h2>{lunchFoodItems.length > 0 ?(
            <>
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
                <p><b>Lunch Totals </b> 
                        Calories:{lunchTotals.calories.toFixed(0)}Kcal 
                        Carbs:{lunchTotals.carbs.toFixed(0)}g 
                        Sugars:{lunchTotals.sugars.toFixed(0)}g 
                        Protein:{lunchTotals.protein.toFixed(0)}g 
                        Fat:{lunchTotals.fat.toFixed(0)}g
                    </p>
            </>
            ) : null}
        
    </div>
    <div>
        
        <h2>Dinner</h2>{dinnerFoodItems.length > 0 ?(
        <>
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
            <p><b>Dinner Totals </b> 
                        Calories:{dayTotals.calories.toFixed(0)}Kcal 
                        Carbs:{dayTotals.carbs.toFixed(0)}g 
                        Sugars:{dayTotals.sugars.toFixed(0)}g 
                        Protein:{dayTotals.protein.toFixed(0)}g 
                        Fat:{dayTotals.fat.toFixed(0)}g
                    </p>
        </>
        ) : null}
    </div>
    <div>
        <h2>Snacks</h2>{snackFoodItems.length > 0 ?(
        <>
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
            <p><b>Snacks Totals </b> 
                        Calories:{snacksTotals.calories.toFixed(0)}Kcal 
                        Carbs:{snacksTotals.carbs.toFixed(0)}g 
                        Sugars:{snacksTotals.sugars.toFixed(0)}g 
                        Protein:{snacksTotals.protein.toFixed(0)}g 
                        Fat:{snacksTotals.fat.toFixed(0)}g
                    </p>
        </>
        ) : null}
    </div>
        <p><b>Todays Totals </b>
                Calories:{dayTotals.calories.toFixed(0)}Kcal 
                Carbs:{dayTotals.carbs.toFixed(0)}g 
                Sugars:{dayTotals.sugars.toFixed(0)}g 
                Protein:{dayTotals.protein.toFixed(0)}g 
                Fat:{dayTotals.fat.toFixed(0)}g
        </p>
    <button onClick={handleCompleteDay}>Complete Day</button>
    </div>
    )
}

export default FoodSearchForm;