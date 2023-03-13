import MacroCharts from "../../components/dashboardComponents/MacroCharts";
import CaloriesRemainingChart from "../../components/dashboardComponents/CaloriesRemainingChart";

import DailyMacroStats from "../../components/dashboardComponents/DailyMacroStats";
import CarbsChart from "../../components/dashboardComponents/CarbsChart";
import ProteinChart from "../../components/dashboardComponents/ProteinChart";
import FatChart from "../../components/dashboardComponents/FatChart";
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MacroStatsContainer.css'


const MacroStatsContainer = ({ dayTotals, user }) => {
    return (

    <Container>

        <Row>
            
            <Col xs={2} md={4} lg={6}>
                    {/* <h2 className="center">Today's Macros</h2> */}
                <MacroCharts dayTotals={dayTotals} />
            </Col>
            <Col xs={2} md={4} lg={6}>
                {/* <h2>Calories</h2> */}
                <CaloriesRemainingChart dayTotals={dayTotals} user={user} />
            </Col>
        </Row>

        <Row>
            <Col xs={6} md={4}>
                {/* <h2>Carbohydrates</h2> */}
                {/* <p>Goal: {user.carbsGoal}g</p> */}
                <CarbsChart dayTotals={dayTotals} user={user} />
            </Col>
            <Col xs={6} md={4}>
                {/* <h2>Protein</h2>
                <p>Goal: {user.proteinGoal}g</p> */}
                <ProteinChart dayTotals={dayTotals} user={user} />
            </Col>
            <Col xs={6} md={4}>
                {/* <h2>Fat</h2>
                <p>Goal: {user.fatGoal}g</p> */}
                <FatChart dayTotals={dayTotals} user={user} />
            </Col>
        </Row>
    </Container>
    );
};

export default MacroStatsContainer;