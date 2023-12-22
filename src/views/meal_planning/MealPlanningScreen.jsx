import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { SpoonacularInfoContext } from '../../contexts/SpoonacularInfoContext'
import fetchWeekMealPlanner from '../../hook/fetchWeekMealPlanner'
import MealPlanningByDay from '../../components/meal_planning/MealPlanningByDay'
import AppScreen from '../../navigation/AppScreen'

const MealPlanningScreen = ({ navigation }) => {
  const spoonacularInfoContext = useContext(SpoonacularInfoContext)
  if (!spoonacularInfoContext) {
    return
  }

  const onItemPressed = (foodId) => {
    navigation.navigate(AppScreen.DetailScreen, foodId)
  }

  const { data: mealData, isLoading: mealLoading } = fetchWeekMealPlanner(spoonacularInfoContext.hash)
  if (mealLoading || !mealData.week) {
    return
  }
  console.log(mealData.week.monday.meals);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <MealPlanningByDay day="Monday" mealData={mealData.week.monday.meals} onItemPressed={onItemPressed} />
      <MealPlanningByDay day="Tuesday" mealData={mealData.week.tuesday.meals} onItemPressed={onItemPressed} />
      <MealPlanningByDay day="Wednesday" mealData={mealData.week.wednesday.meals} onItemPressed={onItemPressed} />
      <MealPlanningByDay day="Thursday" mealData={mealData.week.thursday.meals} onItemPressed={onItemPressed} />
      <MealPlanningByDay day="Friday" mealData={mealData.week.friday.meals} onItemPressed={onItemPressed} />
      <MealPlanningByDay day="Saturday" mealData={mealData.week.saturday.meals} onItemPressed={onItemPressed} />
      <MealPlanningByDay day="Sunday" mealData={mealData.week.sunday.meals} onItemPressed={onItemPressed} />
    </ScrollView>
  )
}

export default MealPlanningScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 16
  }
})