import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Container, Card } from 'react-bootstrap';

ChartJS.register(ArcElement, Tooltip, Legend);


const CaloriesRemainingChart = ({dayTotals, user}) => {




    const data = {
            labels: ['Calories consumed (Kcal)', `Calories remaining of ${user.caloriesGoal}Kcal`],
            datasets: [
            {
            label: 'Kcal',
            data: [dayTotals.calories, user.caloriesGoal],
            backgroundColor: [
                'rgba(89, 133, 184)',
                'rgba(89, 133, 184, 0.5)',
                'rgba(255, 206, 86, 0.2)',
                
            ]
            },
        ],
    };

    const options = {
        title: {
            display:true,
            text: `Remaining Calories`
        }
    }
    
    return (
        // <Container className="container-card">
            <Card className="chart-card">
                <Card.Header className="charts-title">Calories Remaining Kcal</Card.Header>
                <Doughnut data={data} options={options}/>
            </Card>
        // </Container>
    )
}
export default CaloriesRemainingChart;