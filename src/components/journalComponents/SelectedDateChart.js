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
import { Card } from 'react-bootstrap';


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

    const dummyData = {
        labels: ["Carbohydrates (g)", "Protein (g)", "Fat (g)"],
        datasets: [{
            label: "g",
            data: [33,33,33],
            backgroundColor: [
                'rgba(233, 196, 106)',
                'rgba(42, 157, 143)',
                'rgba(231, 111, 81)',
                
            ]
        }]
    }

    if (dayArray) {
        const graphData = [totalForMacro(dayArray, "carbs"), totalForMacro(dayArray, "protein"), totalForMacro(dayArray, "fat")]

        console.log(graphData);

        const data = {
            labels: ["Carbohydrates (g)", "Protein (g)", "Fat (g)"],
            datasets: [{
                label: "g",
                data: graphData,
                backgroundColor: [
                    'rgba(233, 196, 106)',
                    'rgba(42, 157, 143)',
                    'rgba(231, 111, 81)',
                    
                ]
            }]
        }

        return(
            
            <Card className='chart-card'>
            <Card.Header className="charts-title">Macros for {selectedDate}</Card.Header>

            <Doughnut data={data} />
        </Card>
        )
    } else{
        return(

            <Card className='chart-card'>
            <Card.Header className="charts-title">Macros for {selectedDate}</Card.Header>

            <Doughnut data={dummyData} />
        </Card>
        )
    }


    }







export default SelectedDateChart;