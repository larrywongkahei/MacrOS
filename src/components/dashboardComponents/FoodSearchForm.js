import { useState } from "react";

const FoodSearchForm = ({foodItems, searchFoodItemsByThreeLetters, filteredList}) => {
    const [foodInput, setFoodInput] = useState("")
    const [filtereditems, setFilteredItems] = useState([])
    const [filteredFoodItems, setFilteredFoodItems] = useState([])

    function filterFoodItems(letters, list){
        setFilteredFoodItems(list.filter(each => {
            return each.name.toLowerCase().includes(letters)

        }))
    }

    async function handleFoodInputChange(e){
        setFoodInput(e.target.value)
        if(e.target.value.length === 3){
            const abc = await searchFoodItemsByThreeLetters(e.target.value)
            setFilteredItems(abc)
            filterFoodItems(e.target.value.toLowerCase(), abc)
        }
        if(e.target.value.toLowerCase().length > 3){
            const abc = await searchFoodItemsByThreeLetters(e.target.value)
            filterFoodItems(e.target.value.toLowerCase(), abc)
        }
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
            {filteredFoodItems? 
            <div>
                {foodItemsToShow}
            </div>
            :null}
        </form>
        </>
    )
}

export default FoodSearchForm;