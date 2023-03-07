import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const CarbsChart = ({dayTotals, user}) => {


const carbs = (dayTotals.carbs - dayTotals.sugars)

    const data = {
            labels: ['Carbohydrates consumed (g)', 'Carbohydrates remaining (g)'],
            datasets: [
            {
            label: 'g',
            data: [carbs, (user.carbsGoal-carbs)],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 120, 132, 0.5)',
                'rgba(255, 206, 86, 0.2)',
                
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
        <>
        <Doughnut data={data} options={options}/>
        </>
    )
}
export default CarbsChart;