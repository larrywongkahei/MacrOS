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
        // const fatForDayArray = totalForMacro(dayArray, "fat");
        // const proteinForDayArray = totalForMacro(dayArray, "protein");
        // const carbForDayArray = totalForMacro(dayArray, "carbs");
        // const sugarForDayArray = totalForMacro(dayArray, "sugars");

        // console.log("Fat: ", fatForDayArray, "Protein:", proteinForDayArray, "Carbs", carbForDayArray, "Sugars", sugarForDayArray);

        const graphData = [totalForMacro(dayArray, "fat"), totalForMacro(dayArray, "protein"), totalForMacro(dayArray, "carbs"), totalForMacro(dayArray, "sugars")]

        console.log(graphData);

        const data = {
            labels: ["Fat", "Protein", "Carbs", "Sugar"],
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