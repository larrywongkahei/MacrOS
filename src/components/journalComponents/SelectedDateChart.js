import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip, 
    Legend, 
} from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2'


const SelectedDateChart = ({selectedDate, days}) => {

    if (days.length === 0) {
        return <p>Loading...</p>
    }

    const totalForMacro = (dayArray, macroName) => {
       return dayArray.meals.flatMap(meal => meal.foodItems.map(fi => parseInt(fi[macroName])))
                                            .reduce((prev, next) => prev + next, 0);
    }

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const dayArray = days.find(day => day.date === selectedDate)

    console.log(dayArray);

    if (dayArray) {
        const graphData = [totalForMacro(dayArray, "fat"), totalForMacro(dayArray, "protein"), totalForMacro(dayArray, "carbs")]

        console.log(graphData);

        const data = {
            labels: ["Fat", "Protein", "Carbs"],
            datasets: [{
                label: "grams",
                data: graphData
            }]
        }

        return(
            <Doughnut data={data} />
        )
    }


    }







export default SelectedDateChart;