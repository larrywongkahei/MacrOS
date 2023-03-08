import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar';
import DashboardContainer from '../containers/dashboardContainers/DashboardContainer';
import JournalContainer from '../containers/journalContainers/JournalContainer';
// import OnboardingContainer from '.. /containers/onboardingContainers/OnboardingContainer';
import Request from '../helpers/Request';
import OnboardingContainer from './onboardingContainers/OnboardingContainer';
import Swal from 'sweetalert2'
import Footer from '../components/Footer';

const MainContainer = () => {

    const [user, setUser] = useState([])
    const [days, setDays] = useState([])
    // We use the get method to get all the day instance from the backend and save it in dayInstance.
    const [dayInstanceList, setDayInstanceList] = useState([])
    const [meals, setMeals] = useState([])
    const [foodItems, setFoodItems] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const [dayTotals, setDayTotals] = useState({ calories: 0, carbs: 0, sugars: 0, protein: 0, fat: 0 })

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

    function getDateData(data, listOfMeals){
        // data['userID'] = user.id
        data['user'] = user
        handleDayPost(data, listOfMeals)
        }

    const handleUserPost = (user) => {
        const request = new Request();
        request.post('/api/user', user)
        // .then(() => {
        //     window.location = '/'
        // })
        Swal.fire({
            title: 'Your nutrition goals per day:',
            html:
            '<b>Calories:</b> &nbsp'+`${user.caloriesGoal} kcal`+'<br/>' +
            '<b>Protein:</b> &nbsp'+`${user.proteinGoal}g` + '<br/>' +
            '<b>Fat:</b> &nbsp'+`${user.fatGoal}g` + '<br/>' +
            '<b>Carbs:</b> &nbsp'+`${user.carbsGoal}g`,
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#A5DC86'
          })
          setUser(user);
    }

    async function searchFoodItemsByThreeLetters(letters){
        const request = new Request()
        return(await request.get(`/api/fooditems?letters=${letters}`))

    }
    console.log(dayInstanceList)

    const handleUserPut = (user) => {
        const request = new Request();
        request.put(`/api/user/${user.id}`, user).then(() => {
        })
    }

    const handleDayPost = async (day, listOfMeals) => {
        const request = new Request();
        const postDay = await request.post('/api/days', day)
        const responseToData = await postDay.json()
        // const newDayInstanceList = [...dayInstanceList]
        // newDayInstanceList.push(responseToData)
        // setDayInstanceList(newDayInstanceList)   
        // Create a list of meal
        const mealList = await handleMealPost(responseToData)
        // Put food inside the list
        const mealListWithFoods = putFoodItemsIntoList(mealList, listOfMeals)
        // Update the list with foods to database
        const updatedMeals = await handleMealPut(mealListWithFoods)
        // Add meals field to day object
        responseToData['meals'] = updatedMeals
        // Update the day object to database
        handleDayPut(responseToData)
        window.location.replace('/journal');
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
        .then(res => res.json())
        .then(data => {
            const newDayInstanceList = [...dayInstanceList]
            newDayInstanceList.push(data)
            setDayInstanceList(newDayInstanceList)   
        })
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

    const updateDayTotal = function(dayTotalsData){
        setDayTotals(dayTotalsData)
        console.log(`Function triggered ${dayTotalsData.calories}`)
    }


    

    if (user) {
        return(
            <div>
                <NavBar user={user} dayTotals={dayTotals}/>
                <Routes>
                    <Route path="/" element={<DashboardContainer user={user} setUser={setUser} days={days} meals={meals} foodItems={foodItems} searchFoodItemsByThreeLetters={searchFoodItemsByThreeLetters} filteredList={filteredList} getDateData={getDateData} addCustomFood={addCustomFood} updateDayTotal={updateDayTotal} dayTotals={dayTotals} handleUserPut={handleUserPut}/>} />
                    <Route path="/journal" element={<JournalContainer user={user} setUser={setUser} days={days} meals={meals} handleUserPut={handleUserPut}/>} />
                </Routes>
                <Footer/>
            </div>
        )


    } else {
        return(
            <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<OnboardingContainer handleUserPost={handleUserPost} />} />
            </Routes>
            <Footer/>
            </>
        
        )
    
        }
}

export default MainContainer;