

const AddExercise = () => {

const exerciseToAdd = {
    caloriesBurned:0
};

const [newExercise, setNewExercise] = useState(...exerciseToAdd)

    return(
        <>
            <p>I am AddExercise form</p>
            <form onSubmit={handleSubmit}>
                <input 
                type="number"
                value={caloriesBurned}
                placeholder="CaloriesBurned"
                name="Exercise"
                onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddExercise;