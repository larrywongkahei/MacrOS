import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

ChartJS.register(ArcElement, Tooltip, Legend);


const CarbsChart = ({dayTotals, user}) => {


const carbs = (dayTotals.carbs - dayTotals.sugars)

    const data = {
            labels: ['Carbohydrates consumed (g)', `Carbohydrates remaining of ${user.carbsGoal}g Goal`],
            datasets: [
            {
            label: 'g',
            data: [carbs, (user.carbsGoal-carbs)],
            backgroundColor: [
                'rgba(233, 196, 106)',
                'rgba(233, 196, 106, 0.5)',
                
            ]
            },
        ],
    };

    const options = {
        title: {
            display:true,
            text: `Remaining Carbohydrates`
        }
    }
    
    return (
        <Card className="chart-card">
            <Card.Header className="charts-title yellow">Carbohydrates</Card.Header>
        <Doughnut data={data} options={options}/>
        </Card>
    )
}
export default CarbsChart;