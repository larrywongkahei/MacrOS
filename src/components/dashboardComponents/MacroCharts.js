import { Chart as ChartJS, ArcElement, Tooltip, Title, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Container, Card } from 'react-bootstrap';

ChartJS.register(ArcElement, Tooltip, Title, Legend);


const MacroCharts = ({dayTotals}) => {

console.log(dayTotals)

const percentageCarbs = ((dayTotals.carbs*4)/dayTotals.calories)*100
const percentageProtein = ((dayTotals.protein*4)/dayTotals.calories)*100
const percentageFat = ((dayTotals.fat*9)/dayTotals.calories)*100



    const data = {
            labels: ['Carbohydrates (%)', 'Protein (%)', 'Fat (%)'],
            datasets: [
            {
            label: '%',
            data: [percentageCarbs.toFixed(0), percentageProtein.toFixed(0), percentageFat.toFixed(0)],
            backgroundColor: [
                'rgba(233, 196, 106)',
                'rgba(42, 157, 143)',
                'rgba(231, 111, 81)',
                
            ]
            },
        ],
    };

    const options = {
        title: {
            display:true,
            text: `Today's macros`
        }
    }
    
    return (
        <Container className="container-card">
            <Card className="chart-card">
                <Card.Header className="charts-title">Macros (%)</Card.Header>
                <Pie data={data} options={options}/>
            </Card>
        </Container>
    )
}
export default MacroCharts;