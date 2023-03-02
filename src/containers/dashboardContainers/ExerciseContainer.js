import AddExercise from "../../components/dashboardComponents/AddExercise";
import DailyExerciseStats from "../../components/dashboardComponents/DailyExerciseStats";


const ExerciseContainer = () => {
    return(
        <div className="component-container">
        <p>I am ExerciseContainer containing:</p>
        <AddExercise/>
        <DailyExerciseStats/>
        </div>
    )
}

export default ExerciseContainer;