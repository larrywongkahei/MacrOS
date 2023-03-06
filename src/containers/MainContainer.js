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
    // We use the get method to get all the day instance from the backend and save it in dayInstance.
    const [dayInstanceList, setDayInstanceList] = useState([])
    const [meals, setMeals] = useState([])
    const [foodItems, setFoodItems] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const [onboardingComplete, setOnboardingComplete] = useState(false)


    useEffect(() => {
        const request = new Request();
        const userPromise = request.get('/api/user');
        const dayPromise = request.get('/api/days');
        const mealPromise = request.get('/api/meals');
        const foodItemsPromise = request.get('/api/fooditems')
        const dayInstanceListPromise = request.get('api/days')

    Promise.all([userPromise, dayPromise, mealPromise, foodItemsPromise, dayInstanceListPromise])
    .then((data) => {
        setUser(data[0][0])
        setDays(data[1])
        setMeals(data[2])
        setFoodItems(data[3])
        setDayInstanceList(data[4])
    })
    }, [])

    function getDateData(data){
        // data['userID'] = user.id
        data['user'] = user
        handleDayPost(data)
        }

    const handleUserPost = (user) => {
        console.log(user.caloriesGoal)
        const request = new Request();
        request.post('/api/user', user)
        // .then(() => {
        //     window.location = '/'
        // })
    }

    async function searchFoodItemsByThreeLetters(letters){
        const request = new Request()
        return(await request.get(`/api/fooditems?letters=${letters}`))

    }

    const handleUserPut = (user) => {
        const request = new Request();
        console.log(user);
        request.put(`/api/user/${user.id}`, user).then(() => {
            window.location = '/journal'
        })
    }

    const handleDayPost = async (day) => {
        console.log(`logging from main container: ${day}`);
        const request = new Request();
        const postDay = await request.post('/api/days', day)
        const responseToData = await postDay.json()
        const newDayInstanceList = [...dayInstanceList]
        newDayInstanceList.push(responseToData)
        setDayInstanceList(newDayInstanceList)   
    }
    console.log(dayInstanceList.length)

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

    function addCustomFood(foodItem){
        const request = new Request();
        foodItem["barcode"] = "1234"
        request.post("/api/fooditems", foodItem).then(res => console.log(res.status))

    }


    

    console.log(user);
    // console.log(days);
    // console.log(meals);

    if (user) {
        return(
            <div>
                <NavBar user={user}/>
                <Routes>
                    <Route path="/" element={<DashboardContainer user={user} days={days} meals={meals} foodItems={foodItems} searchFoodItemsByThreeLetters={searchFoodItemsByThreeLetters} filteredList={filteredList} getDateData={getDateData} addCustomFood={addCustomFood}/>} />
                    <Route path="/journal" element={<JournalContainer user={user} days={days} meals={meals} handleUserPut={handleUserPut}/>} />
                </Routes>
            </div>
        )


    } else {
        return(
            <>
            <NavBar user={user}/>
            <Routes>
                <Route path="/" element={<OnboardingContainer handleUserPost={handleUserPost} setOnboardingComplete={setOnboardingComplete}/>} />
            </Routes>
            </>
        
        )
    
        }
}

export default MainContainer;