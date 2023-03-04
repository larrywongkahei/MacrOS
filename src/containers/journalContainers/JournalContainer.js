import DatePicker from "../../components/journalComponents/DatePicker";
import GoalsStats from "../../components/journalComponents/GoalsStats";
import UserInfo from "../../components/journalComponents/UserInfo";
import { useState } from "react";
import GoalsCharts from "../../components/journalComponents/GoalsCharts";

const JournalContainer = ({user, handleUserPut, days}) => {

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
        <DatePicker updateDate={updateDate} selectedDate={selectedDate} days={days} />
        <GoalsStats user={user} onEdit={handleUserPut}/>
        <GoalsCharts user={user} days={days} /> 
        </div>
    )
}

export default JournalContainer;