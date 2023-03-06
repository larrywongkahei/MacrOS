import MacroCharts from "../../components/dashboardComponents/MacroCharts";
import DailyMacroStats from "../../components/dashboardComponents/DailyMacroStats";


const MacroStatsContainer = ({dayTotals}) => {
    return(
        <div className="component-container">
        <p>I am a MacroStatsContainer containing:</p>
        <MacroCharts dayTotals={dayTotals}/>
        </div>
    )
}
export default MacroStatsContainer;