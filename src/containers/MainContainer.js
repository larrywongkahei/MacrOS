import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar';
import DashboardContainer from '../containers/dashboardContainers/DashboardContainer';
import JournalContainer from '../containers/journalContainers/JournalContainer';
// import OnboardingContainer from '.. /containers/onboardingContainers/OnboardingContainer';
import Request from '../helpers/Request';
import OnboardingContainer from './onboardingContainers/OnboardingContainer';

const MainContainer = () => {

    const [user, setUser] = useState([])
    const [days, setDays] = useState([])
    const [meals, setMeals] = useState([])

    useEffect(() => {
        const request = new Request();
        const userPromise = request.get('/api/user');
        const dayPromise = request.get('/api/days');
        const mealPromise = request.get('/api/meals');

    Promise.all([userPromise, dayPromise, mealPromise])
    .then((data) => {
        setUser(data[0][0])
        setDays(data[1])
        setMeals(data[2])
    })
    }, [])

    const handleUserPost = (user) => {
        console.log(`logging from main container: ${user}`);
        const request = new Request();
        request.post('/api/user', user).then(() => {
            window.location = '/'
        })
    }

    const handleUserPut = (user) => {
        const request = new Request();
        request.put(`/api/user/${user.id}`, user).then(() => {
            window.location = '/dashboard'
        })
    }

    const handleDayPost = (days) => {
        const request = new Request();
        request.post('/api/days', days).then(() => {
            window.location = '/dashboard'
        })
    }

    const handleDayPut = (day) => {
        const request = new Request();
        request.put(`/api/days/${day.id}`, day).then(() => {
            window.location = '/dashboard'
        })
    }

    const handleMealPost = (meal) => {
        const request = new Request();
        request.post('/api/meals', meal).then(() => {
            window.location = '/dashboard'
        })
    }

    const handleMealPut = (meal) => {
        const request = new Request();
        request.put(`/api/meals/${meal.id}`, meal).then(() => {
            window.location = '/dashboard'
        })
    }

    

    console.log(user);
    console.log(days);
    console.log(meals);

    if (user) {
        return(
            <Routes>
                <Route path="/" element={<DashboardContainer user={user} days={days} meals={meals}/>} />
                <Route path="/journal" element={<JournalContainer user={user} days={days} meals={meals} />} />
            </Routes>
        )


    } else {
        return(
            <Routes>
                <Route path="/" element={<OnboardingContainer handleUserPost={handleUserPost}/>} />
            </Routes>
        
        )
    
        }
}

export default MainContainer;