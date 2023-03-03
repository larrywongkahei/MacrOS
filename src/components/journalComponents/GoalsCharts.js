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
    // console.log(days[0].date);



    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        title: {
            display: true,
            text: 'Weight trends'
        }
    }

    const labels = days.map( day => day.date)

    const daysData = days.map(day => day.user.currentWeight)

    console.log(daysData);

    const data = {
        labels,
        datasets: [{
            label: 'currentWeight',
            data: daysData
        }]
    }

    console.log(data);

        return(
            <>
            <Line options={options} data={data} />
            </>
        )
    }

    export default GoalsCharts;