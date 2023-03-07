import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const ProteinChart = ({dayTotals, user}) => {




    const data = {
            labels: ['Protein consumed (g)', 'Protein remaining (g)'],
            datasets: [
            {
            label: 'g',
            data: [dayTotals.protein, (user.proteinGoal-dayTotals.protein)],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
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
        <>
        <Doughnut data={data} options={options}/>
        </>
    )
}
export default ProteinChart;