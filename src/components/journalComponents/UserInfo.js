import { Card, Container } from 'react-bootstrap'


const UserInfo = ({user}) => {
    
    return(
            <Card className="container-card">
                <Card.Header className="charts-title">{user.name}</Card.Header>
                    <Container>
                            <p>Age: {user.age}</p>
                            <p>Height: {user.height}cm</p>
                            <p>Starting Weight: {user.startingWeight}kg</p>
                            <p>Activity Level: {user.activityLevel}</p>
                            <p>Goal: {user.goalType}</p>
                            <p>Calorie Goal: {user.caloriesGoal}Kcal</p>
                            <p>Protein Goal: {user.proteinGoal}g</p>
                            <p>Carbohydrate Goal: {user.carbsGoal}g</p>
                            <p>Fat Goal: {user.fatGoal}g</p>
                        {/* <p>XP: {user.experiencePoints}</p> */}
                    </Container>
            </Card>
    )
}

export default UserInfo;