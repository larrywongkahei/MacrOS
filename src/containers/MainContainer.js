import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import DashboardContainer from '../containers/dashboardContainers/DashboardContainer';
// import JournalContainer from '../containers/journalContainers/JournalContainer';
// import OnboardingContainer from '.. /containers/onboardingContainers/OnboardingContainer';
import Request from '../helpers/Request';

const MainContainer = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        const request = new Request();
        const userPromise = request.get('/api/user');

    Promise.all([userPromise])
    .then((data) => {
        setUser(data[0][0])
    })
    }, [])

    const handlePost = (user) => {
        const request = new Request();
        request.post('/api/user', user).then(() => {
            window.location = '/dashboard'
        })
    }

    const handlePut = (user) => {
        const request = new Request();
        request.put(`/api/user/${user.id}`, user).then(() => {
            window.location = '/dashboard'
        })
    }

    console.log(user.name);

    return(
        <Routes>
            <Route path="/dashboard" element={<DashboardContainer user={user}/>} />
            {/* <JournalContainer />
            <OnboardingContainer /> */}
        </Routes>
    )
}

export default MainContainer;