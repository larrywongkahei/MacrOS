import DatePicker from "../../components/journalComponents/DatePicker";
import GoalsStats from "../../components/journalComponents/GoalsStats";
import UserInfo from "../../components/journalComponents/UserInfo";
import NavBar from "../../components/NavBar";


const JournalContainer = () => {
    return(
        <>
        <hr/>
        <p>I am JournalContainer</p>
        <NavBar/>
        <UserInfo />
        <DatePicker />
        <GoalsStats />
        </>
    )
}

export default JournalContainer;