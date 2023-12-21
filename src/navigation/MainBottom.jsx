import UserProfileScreen from "../views/account/UserProfileScreen"
import UserInfo from "../views/account/UserProfileScreen"
import FavoriteDishesScreen from "../views/favorites/FavoriteDishesScreen"
import { HomePage } from "../views/homepage/HomePage"
import MealPlanningScreen from "../views/meal_planning/MealPlanningScreen"
import { Tab } from "./Tab"
import Feather from 'react-native-vector-icons/Feather'

function MainBottom() {
    return <Tab.Navigator initialRouteName='HomePage'
        screenOptions={
            ({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName
                    switch (route.name) {
                        case 'HomePage': {
                            iconName = 'home'
                            break
                        }
                        case 'FavoritesDishes': {
                            iconName = 'heart'
                            break
                        }
                        case 'MealPlanning': {
                            iconName = 'calendar'
                            break
                        }
                        case 'UserInfo': {
                            iconName = 'user'
                        }
                        default:
                            break;
                    }
                    return <Feather
                        name={`${iconName}`}
                        color={color} size={24}
                    />
                },
                tabBarActiveTintColor: 'dodgerblue',
                tabBarInactiveTintColor: 'black',
            })
        }
    >
        <Tab.Screen
            name='HomePage'
            component={HomePage}
            options={{
                title: 'Home'
            }}
        />
        <Tab.Screen
            name="FavoritesDishes"
            component={FavoriteDishesScreen}
            options={{
                title: 'Favorite'
            }}

        />
        <Tab.Screen
            name="MealPlanning"
            component={MealPlanningScreen}
            options={{
                title: 'Planning'
            }}

        />
        <Tab.Screen
            name="UserInfo"
            component={UserProfileScreen}
            options={{
                title: 'User'
            }}

        />
    </Tab.Navigator>
}

export default MainBottom