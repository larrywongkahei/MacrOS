import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const MacroCharts = ({dayTotals}) => {

console.log(dayTotals)

    const data = {
            labels: ['Carbohydrates (g)', 'of which Sugars (g)', 'Protein (g)', 'Fat (g)'],
            datasets: [
            {
            label: '',
            data: [dayTotals.carbs, dayTotals.sugars, dayTotals.protein, dayTotals.fat],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            },
        ],
    };
    
    return (
        <>
        <Pie data={data} />
        </>
    )
}
export default MacroCharts;