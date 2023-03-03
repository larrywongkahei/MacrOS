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


const SelectedDayMacroChart = ({selectedDate, meals}) => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    console.log(meals)




    const options = {
        responsive: true,
        title: {
            display: true,
            text: 'Historical Macros'
        }
    }

}





export default SelectedDayMacroChart;