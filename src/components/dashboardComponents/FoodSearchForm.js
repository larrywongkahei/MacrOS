import { useState } from "react";

const FoodSearchForm = ({foodItems, searchFoodItemsByThreeLetters, getDateData}) => {
    const [foodInput, setFoodInput] = useState("")
    const [filtereditems, setFilteredItems] = useState([])
    const [filteredFoodItems, setFilteredFoodItems] = useState([])
    const [itemsChosen, setItemsChosen] = useState([])
    const [mealType, setMealType] = useState("")
    const [breakfastFoodItems, setBreakfastFoodItems] = useState([])
    const [lunchFoodItems, setLunchFoodItems] = useState([])
    const [dinnerFoodItems, setDinnerFoodItems] = useState([])
    const [snackFoodItems, setSnackFoodItems] = useState([])
    const [theItem, setTheItem] = useState({})
    const [quantity, setQuantity] = useState(0)

    // Day
    // Date
    // list of Meals - 4 meal - fooditems
    // Completed

    // const Day = {
    //     "date" : Date().now()
    // }



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
    
        setItemsChosen([])
        setMealType("")
    }

    function handleCompleteDay(e){
        e.preventDefault()
        const date = new Date()
        const theDate = {
            "date" : `${date.getFullYear()}, ${date.getMonth()}, ${date.getDay()}`,
            "meals" : [breakfastFoodItems, lunchFoodItems, dinnerFoodItems, snackFoodItems],
            "completed" : true
        }
        getDateData(theDate)
    }

    function handleMealType(e){
        e.preventDefault()
        setMealType(e.target.value)
    }
    
    function handleAdd(e){
        e.preventDefault()
        const newItemChosenList = [...itemsChosen]
        const listToBeMultiply = ["carbs", "sugars", "protein", "fat", "calories"]
        listToBeMultiply.forEach(each => {
            theItem[each] = theItem[each] * quantity / 100
        })
        newItemChosenList.push(theItem)
        switch(mealType){
            case "Breakfast":
                setBreakfastFoodItems(newItemChosenList)
                break;
            case "Lunch":
                setLunchFoodItems(newItemChosenList)
                break;
            case "Dinner":
                setDinnerFoodItems(newItemChosenList)
                break;
            case "Snack":
                setSnackFoodItems(newItemChosenList)
                break;
        }
        setItemsChosen(newItemChosenList)
        setFilteredFoodItems([])
        setTheItem({})
        setFoodInput("")
    }

    const foodItemsToShow = filteredFoodItems.map(each => {
        return (
            <ul>
                <li key={each._id}>
                    {each.name}
                </li>
                {/* button to add the fooditems, could use react icons */}
                <button onClick={getTheFoodItem} value={each.id}>+</button>
            </ul>
        )
    })

    const itemDetails = itemsChosen.map(each => {
        return (
        <ul key={each._id}>
            <li >
                FoodItem {itemsChosen.indexOf(each) + 1} :
            </li>
            <li>
                {each.name}
            </li>
            <li>
                carbs : {each.carbs}
            </li>
            <li>
                sugars : {each.sugars}
            </li>
            <li>
                protein : {each.protein}
            </li>
            <li>
                fat : {each.fat}
            </li>
            <li>
                calories : {each.calories}
            </li>
        </ul>
        )
    })

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
                    <button value={"Snack"} onClick={handleMealType}>Snack</button>
                    <button onClick={handleCompleteDay}>Complete Day</button>

                </div>
                :null}
                {mealType ? 
                <div>
                <input type="text" placeholder="Input your food here" value={foodInput} onChange={handleFoodInputChange}/>
                {/* <button>Barcode Scanner button</button> */}
                <label>Quantity(grams): </label>
                <input type="number" value={quantity} onChange={handleQuantity}/>
                <button onClick={handleAdd}>Add</button>

                {filteredFoodItems ? 
                <div>
                    {foodItemsToShow}
                </div>
                :null}
                {itemsChosen ?
                <div>
                    {itemDetails}
                </div> :null}
                <button onClick={handleSubmit}>Submit</button>
                </div>: null}
            </form>
        </div>

        <div>
        <h2>Breakfast:</h2>{breakfastFoodItems.length > 0 ?(
        <ul>
            {breakfastFoodItems.map((item) => (
                <li key={item}>{item.name}</li>
            ))}
        </ul> ) : null}
    </div>
    <div>
        <h2>Lunch:</h2>{lunchFoodItems.length > 0 ?(
        <ul>
            {lunchFoodItems.map((item) => (
                <li key={item}>{item.name}</li>
            ))}
        </ul> ) : null}
    </div>
    <div>
        <h2>Dinner:</h2>{dinnerFoodItems.length > 0 ?(
        <ul>
            {dinnerFoodItems.map((item) => (
                <li key={item}>{item.name}</li>
            ))}
        </ul> ) : null}
    </div>
    <div>
        <h2>Snacks:</h2>{snackFoodItems.length > 0 ?(
        <ul>
            {snackFoodItems.map((item) => (
                <li key={item}>{item.name}</li>
            ))}
        </ul> ) : null}
    </div>
    </div>
    )
}

export default FoodSearchForm;