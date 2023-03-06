import MacroCharts from "../../components/dashboardComponents/MacroCharts";
import CaloriesRemainingChart from "../../components/dashboardComponents/CaloriesRemainingChart";

import DailyMacroStats from "../../components/dashboardComponents/DailyMacroStats";


const MacroStatsContainer = ({dayTotals}) => {
    return(
        <>
            <div className="component-container">
                <h2>Today's macrOS</h2>
                <MacroCharts dayTotals={dayTotals}/>
            </div>
            <div className="component-container">
            <h2>Calories Remaining</h2>

                <CaloriesRemainingChart dayTotals={dayTotals} />
            </div>
        </>
    )
}
export default MacroStatsContainer;