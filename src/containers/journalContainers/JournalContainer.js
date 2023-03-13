import DatePicker from "../../components/journalComponents/DatePicker";
import GoalsStats from "../../components/journalComponents/GoalsStats";
import UserInfo from "../../components/journalComponents/UserInfo";
import { useState } from "react";
import GoalsCharts from "../../components/journalComponents/GoalsCharts";
import SelectedDateChart from "../../components/journalComponents/SelectedDateChart";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                <Row>
                    <Col xs={2} md={4} lg={6}>
                        <UserInfo user = {user}/>
                    </Col>
                    <Col xs={2} md={4} lg={6}>
                    <GoalsStats user={user} setUser={setUser} onEdit={handleUserPut}/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={2} md={4} lg={6}>
                        <DatePicker updateDate={updateDate} selectedDate={selectedDate} days={days} />
                    </Col>
                    <Col xs={2} md={4} lg={6}>
                        <SelectedDateChart days={days} selectedDate={selectedDate} />
                    </Col>
                    
                </Row>
            </Container>
                <Container>
            <GoalsCharts user={user} days={days} /> 
                </Container>
        </Container>
    )
}

export default JournalContainer;