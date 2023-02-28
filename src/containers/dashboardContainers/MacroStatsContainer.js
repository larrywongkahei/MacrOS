import MacroCharts from "../../components/dashboardComponents/MacroCharts";
import DailyMacroStats from "../../components/dashboardComponents/DailyMacroStats";


const MacroStatsContainer = () => {
    return(
        <>
        <hr/>
        <p>I am a MacroStatsContainer containing:</p>
        <MacroCharts />
        <DailyMacroStats />
        </>
    )
}
export default MacroStatsContainer;