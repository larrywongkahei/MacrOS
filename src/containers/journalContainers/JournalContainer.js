import DatePicker from "../../components/journalComponents/DatePicker";
import GoalsStats from "../../components/journalComponents/GoalsStats";
import UserInfo from "../../components/journalComponents/UserInfo";
import NavBar from "../../components/NavBar";
import { useState } from "react";

const JournalContainer = ({user}) => {

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
        <NavBar/>
        <UserInfo user = {user}/>
        <DatePicker updateDate={updateDate} selectedDate={selectedDate}/>
        <GoalsStats />
        </>
    )
}

export default JournalContainer;