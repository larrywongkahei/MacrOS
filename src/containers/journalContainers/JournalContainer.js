import DatePicker from "../../components/journalComponents/DatePicker";
import GoalsStats from "../../components/journalComponents/GoalsStats";
import UserInfo from "../../components/journalComponents/UserInfo";
import { useState } from "react";
import GoalsCharts from "../../components/journalComponents/GoalsCharts";
import SelectedDateChart from "../../components/journalComponents/SelectedDateChart";

const JournalContainer = ({user, setUser, handleUserPut, days, meals}) => {

    var date = new Date();

    var formatedDate = date.toISOString().split('T')[0];

    const [selectedDate, setSelectedDate] = useState(formatedDate);


    const updateDate = (newDate) => {
        setSelectedDate(newDate)
    }

    return(
        <div className="component-container">
        <p>I am JournalContainer</p>
        <UserInfo user = {user}/>
        <DatePicker updateDate={updateDate} selectedDate={selectedDate} days={days} />
        <GoalsStats user={user} setUser={setUser} onEdit={handleUserPut}/>
        <GoalsCharts user={user} days={days} /> 
        <SelectedDateChart days={days} selectedDate={selectedDate} />
        </div>
    )
}

export default JournalContainer;