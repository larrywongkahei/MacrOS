import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card } from 'react-bootstrap'

ChartJS.register(ArcElement, Tooltip, Legend);


const FatChart = ({dayTotals, user}) => {




    const data = {
            labels: ['Fat consumed (g)', 'Fat remaining (g)'],
            datasets: [
            {
            label: 'g',
            data: [dayTotals.fat, (user.fatGoal-dayTotals.fat)],
            backgroundColor: [
                'rgba(231, 111, 81)',
                'rgba(231, 111, 81, 0.5)',
                
            ]
            },
        ],
    };

    const options = {
        title: {
            display:true,
            text: `Remaining Fat`
        }
    }
    
    return (
        <Card className="chart-card">
            <Card.Header className="charts-title" >Fat</Card.Header>
        <Doughnut data={data} options={options}/>
        </Card>
    )
}
export default FatChart;