import DatePicker from "../../components/journalComponents/DatePicker";
import GoalsStats from "../../components/journalComponents/GoalsStats";
import UserInfo from "../../components/journalComponents/UserInfo";
import { useState } from "react";
import GoalsCharts from "../../components/journalComponents/GoalsCharts";
import SelectedDateChart from "../../components/journalComponents/SelectedDateChart";
import { Container } from 'react-bootstrap';

const JournalContainer = ({user, setUser, handleUserPut, days, meals}) => {

    var date = new Date();

    var formatedDate = date.toISOString().split('T')[0];

    const [selectedDate, setSelectedDate] = useState(formatedDate);


    const updateDate = (newDate) => {
        setSelectedDate(newDate)
    }


    return(
        <Container className="container-card">
            <Container>
                <UserInfo user = {user}/>
            </Container>
            <Container>
                <DatePicker updateDate={updateDate} selectedDate={selectedDate} days={days} />
            </Container>
            <Container>
                <GoalsStats user={user} setUser={setUser} onEdit={handleUserPut}/>
            </Container>
                <Container>
            <GoalsCharts user={user} days={days} /> 
                </Container>
            <Container>
                <SelectedDateChart days={days} selectedDate={selectedDate} />
            </Container>
        </Container>
    )
}

export default JournalContainer;