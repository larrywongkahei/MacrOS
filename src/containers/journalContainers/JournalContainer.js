import DatePicker from "../../components/journalComponents/DatePicker";
import GoalsStats from "../../components/journalComponents/GoalsStats";
import UserInfo from "../../components/journalComponents/UserInfo";
import { useState } from "react";

const JournalContainer = () => {

    var date = new Date();

    var formatedDate = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`

    const [selectedDate, setSelectedDate] = useState(formatedDate);
 

    const updateDate = (newDate) => {
        setSelectedDate(newDate)
    }

    return(
        <>
        <hr/>
        <p>I am JournalContainer</p>
        <UserInfo />
        <DatePicker updateDate={updateDate} selectedDate={selectedDate}/>
        <GoalsStats />
        </>
    )
}

export default JournalContainer;