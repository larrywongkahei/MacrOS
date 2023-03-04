
const addCustomFoodForm = () => {



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
        setCustomFoodName("")
        setCustomFoodCalories(0)
        setCustomFoodCarbs(0)
        setCustomFoodSugars(0)
        setCustomFoodProtein(0)
        setCustomFoodFat(0)
    }

    return(

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
   )

}

export default addCustomFoodForm;