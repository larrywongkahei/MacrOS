import MacroCharts from "../../components/dashboardComponents/MacroCharts";
import DailyMacroStats from "../../components/dashboardComponents/DailyMacroStats";


const MacroStatsContainer = () => {
    return(
        <div className="component-container">
        <p>I am a MacroStatsContainer containing:</p>
        <MacroCharts />
        <DailyMacroStats />
        </div>
    )
}
export default MacroStatsContainer;