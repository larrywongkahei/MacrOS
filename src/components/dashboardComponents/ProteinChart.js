import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

ChartJS.register(ArcElement, Tooltip, Legend);


const ProteinChart = ({dayTotals, user}) => {




    const data = {
            labels: ['Protein consumed (g)', `Protein remaining of ${user.proteinGoal}g Goal`],
            datasets: [
            {
            label: 'g',
            data: [dayTotals.protein, (user.proteinGoal-dayTotals.protein)],
            backgroundColor: [
                'rgba(42, 157, 143)',
                'rgba(42, 157, 143, 0.5)',
            ]
            },
        ],
    };

    const options = {
        title: {
            display:true,
            text: `Remaining Protein`
        }
    }
    
    return (
        <Card className="chart-card">
            <Card.Header className="charts-title">Protein</Card.Header>
        <Doughnut data={data} options={options}/>
        </Card>
    )
}
export default ProteinChart;