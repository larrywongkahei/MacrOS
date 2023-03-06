import MacroCharts from "../../components/dashboardComponents/MacroCharts";
import CaloriesRemainingChart from "../../components/dashboardComponents/CaloriesRemainingChart";

import DailyMacroStats from "../../components/dashboardComponents/DailyMacroStats";
import CarbsChart from "../../components/dashboardComponents/CarbsChart";
import ProteinChart from "../../components/dashboardComponents/ProteinChart";
import FatChart from "../../components/dashboardComponents/FatChart";


const MacroStatsContainer = ({dayTotals, user}) => {
    return(
        <div className="component-container">
            <p> i am the macro stats container</p>
            <div className="component-container">
                <h2>Today's macrOS</h2>
                <MacroCharts dayTotals={dayTotals}/>
            </div>
            <div className="component-container">
            <h2>Calories</h2>
            <p>Goal: {user.caloriesGoal}Kcal</p>

                <CaloriesRemainingChart dayTotals={dayTotals} user={user} />
            </div>
            <div className="component-container">
            <h2>Carbohydrates</h2>
            <p>Goal: {user.carbsGoal}g</p>
            <p>Sugars: {user.sugarsGoal}g</p>

                <CarbsChart dayTotals={dayTotals} user={user} />
            </div>
            <div className="component-container">
            <h2>Protein</h2>
            <p>Goal: {user.proteinGoal}g</p>

                <ProteinChart dayTotals={dayTotals} user={user} />
            </div>
            <div className="component-container">
            <h2>Fat</h2>
            <p>Goal: {user.fatGoal}g</p>

                <FatChart dayTotals={dayTotals} user={user} />
            </div>
        </div>
    )
}
export default MacroStatsContainer;