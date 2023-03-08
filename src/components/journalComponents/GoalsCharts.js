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
import { Card } from 'react-bootstrap'



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
            <Card className='charts-card'>
                <Card.Header className="charts-title orangew">Weight Trends</Card.Header>

                <Line data={data} options = {{
                                                plugins: {
                                                legend: { 
                                                    display: true, 
                                                    position: "top"
                                                    },
                                                }      
                                                ,
                                                scales: {
                                                    y: {
                                                        min: 50,
                                                        max: 110,
                                                    }
                                                }}}/>
            </Card>
        )
    }

    export default GoalsCharts;