


const UserInfo = ({user}) => {
    
    return(
        <div className="component-container">
        <h3> This is the user info container</h3>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Height: {user.height}</p>
        <p>Activity Level: {user.activityLevel}</p>
        <p>XP: {user.experiencePoints}</p>
        <img alt="add profile photo?"></img>
        </div>
    )
}

export default UserInfo;