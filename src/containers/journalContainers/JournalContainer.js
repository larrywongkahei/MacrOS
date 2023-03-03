import DatePicker from "../../components/journalComponents/DatePicker";
import GoalsStats from "../../components/journalComponents/GoalsStats";
import UserInfo from "../../components/journalComponents/UserInfo";
import { useState } from "react";
import GoalsCharts from "../../components/journalComponents/GoalsCharts";
import SelectedDayMacroChart from "../../components/journalComponents/SelectedDayMacroChart";

const JournalContainer = ({user, handleUserPut, days, meals}) => {

    var date = new Date();

    var formatedDate = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`

    const [selectedDate, setSelectedDate] = useState(formatedDate);


    const updateDate = (newDate) => {
        setSelectedDate(newDate)
    }

    return(
        <div className="component-container">
        <p>I am JournalContainer</p>
        <UserInfo user = {user}/>
        <DatePicker updateDate={updateDate} selectedDate={selectedDate}/>
        <GoalsStats user={user} onEdit={handleUserPut}/>
        <GoalsCharts user={user} days={days} /> 
        <SelectedDayMacroChart selectedDate={selectedDate} meals={meals}/>
        </div>
    )
}

export default JournalContainer;