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

    function getDateData(data, list){
        // data['userID'] = user.id
        data['user'] = user
        handleDayPost(data, list)
        }

    const handleUserPost = (user) => {
        console.log(`logging from main container: ${user}`);
        const request = new Request();
        request.post('/api/user', user).then(() => {
            window.location = '/'
        })
    }

    async function searchFoodItemsByThreeLetters(letters){
        const request = new Request()
        return(await request.get(`/api/fooditems?letters=${letters}`))

    }
    console.log(dayInstanceList)

    const handleUserPut = (user) => {
        const request = new Request();
        console.log(user);
        request.put(`/api/user/${user.id}`, user).then(() => {
            window.location = '/journal'
        })
    }

    const handleDayPost = async (day, list) => {
        console.log(`logging from main container: ${day}`);
        const request = new Request();
        const postDay = await request.post('/api/days', day)
        const responseToData = await postDay.json()
        const newDayInstanceList = [...dayInstanceList]
        newDayInstanceList.push(responseToData)
        setDayInstanceList(newDayInstanceList)   
        // Create a list of meal
        const mealList = await handleMealPost(responseToData)
        // Put food inside the list
        const mealListWithFoods = putFoodItemsIntoList(mealList, list)
        // Update the list to database(Testing)
        const updatedMeals = await handleMealPut(mealListWithFoods)
        responseToData['meals'] = updatedMeals
        handleDayPut(responseToData)

    }

    function putFoodItemsIntoList(mealList, foodItmesList){
        mealList.forEach(each => {
            const index = mealList.indexOf(each)
            each['foodItems'] = foodItmesList[index]
        })
        return mealList

    }


    const handleDayPut = (day) => {
        const request = new Request();
        request.put(`/api/days/${day.id}`, day)
        .then(res => {
            console.log(res.status)
            console.log(res.json())
        })
            window.location = '/dashboard'
    }

    const handleMealPost = async (day) => {
        const request = new Request();
        const breakfastMeal = {
            "mealType": "BREAKFAST", 
        };
    
        const lunchMeal = {
            "mealType": "LUNCH", 
        };
    
        const dinnerMeal = {
            "mealType": "DINNER", 
        };
    
        const snacksMeal = {
            "mealType": "SNACK", 
        };
        const mealList = [breakfastMeal, lunchMeal, dinnerMeal, snacksMeal]
        const newList = await Promise.all(mealList.map( async each => {
            each['day'] = day
            const mealPromise = await request.post('/api/meals', each)
            const mealData = await mealPromise.json()
            return mealData
    }))
    return newList
}

    const handleMealPut = (list) => {
        const request = new Request();
        const newList = Promise.all(list.map(async each => {
            const mealPromise = await request.put(`/api/meals/${each.id}`, each)
            const mealData = await mealPromise.json()
            return mealData
        }))
        return newList

            window.location = '/dashboard'
        
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
                    <Route path="/" element={<DashboardContainer user={user} days={days} meals={meals} foodItems={foodItems} searchFoodItemsByThreeLetters={searchFoodItemsByThreeLetters} filteredList={filteredList} getDateData={getDateData} addCustomFood={addCustomFood} putFoodItemsIntoList={putFoodItemsIntoList}/>} />
                    <Route path="/journal" element={<JournalContainer user={user} days={days} meals={meals} handleUserPut={handleUserPut}/>} />
                </Routes>
            </div>
        )


    } else {
        return(
            <>
            <NavBar user={user}/>
            <Routes>
                <Route path="/" element={<OnboardingContainer handleUserPost={handleUserPost}/>} />
            </Routes>
            </>
        
        )
    
        }
}

export default MainContainer;