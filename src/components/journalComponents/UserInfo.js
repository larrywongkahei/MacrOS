import { Card, Container } from 'react-bootstrap'


const UserInfo = ({user}) => {
    
    return(
            <Card className="container-card">
                <Card.Header className="charts-title green">{user.name}'s Stats</Card.Header>
                    <Container className="container-card">
                            <p><b>Age:</b> {user.age}</p>
                            <p><b>Height:</b> {user.height}cm</p>
                            <p><b>Calorie Goal:</b> {user.caloriesGoal}Kcal</p>
                            <p><b>Protein Goal:</b> {user.proteinGoal}g</p>
                            <p><b>Carbohydrate Goal:</b> {user.carbsGoal}g</p>
                            <p><b>Fat Goal:</b> {user.fatGoal}g</p>
                        {/* <p>XP: {user.experiencePoints}</p> */}
                    </Container>
            </Card>
    )
}

export default UserInfo;