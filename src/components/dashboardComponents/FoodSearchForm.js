import { useState } from "react";

const FoodSearchForm = ({foodItems}) => {
    const [foodInput, setFoodInput] = useState("")
    const [filteredFoodItems, setFilteredFoodItems] = useState([])

    function filterFoodItems(letters){
        setFilteredFoodItems(foodItems.filter(each => {
            each["name"].toLowerCase().contains(letters)
        }))
    }


    function handleFoodInputChange(e){
        setFoodInput(e.target.value.toLowerCase())
        filterFoodItems(e.target.value)
    }

    const foodItemsToShow = filteredFoodItems.map(each => {
        return (
            <ul>
                <li>
                    {each.name}
                </li>
                {/* button to add the fooditems, could use react icons */}
                <button>+</button>
            </ul>
        )
    })

    return(
        <>
        <form>
            <p>I am a FoodSearchForm</p>
            <select>
                <option value={"Breakfast"}>Breakfast</option>
                <option value={"Lunch"}>Lunch</option>
                <option value={"Dinner"}>Dinner</option>
                <option value={"Snack"}>Snack</option>
            </select>
            <input type="text" placeholder="Input your food here" value={foodInput} onChange={handleFoodInputChange}/>
            <button>Barcode Scanner button</button>
            <div>
                {foodItemsToShow}
            </div>
        </form>
        </>
    )
}

export default FoodSearchForm;