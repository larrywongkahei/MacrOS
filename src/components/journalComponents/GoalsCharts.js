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
import { Line } from 'react-chartjs-2'

const GoalsCharts = ({user, days}) => {
    const userGoal = user.goalWeight;


    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const labels = days.map( day => day.date)
    console.log(days);

    const daysData = days.map(day => day.userWeight)

    const goalData = days.map(day => day.user.goalWeight)


    const data = {
        labels,
        datasets: [{
            label: 'Your Weight',
            data: daysData,
         
        },
        {
            label: 'Your Goal',
            data: goalData,
          
        }]
    }

      


        return(
            <>
            <Line data={data} />
            </>
        )
    }

    export default GoalsCharts;