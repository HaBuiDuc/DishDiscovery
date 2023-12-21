import { ScrollView, View, StyleSheet } from "react-native"
import { HomeHeader } from "../../components/homepage/header/HomeHeader"
import SearchView from "../../components/homepage/searchbar/SearchView"
import Categories from "../../components/homepage/categories/Categories"
import Spacer from "../../components/shared/Spacer"
import Recommendation from "../../components/homepage/recommendation/Recommendation"
import { categoriesData } from "../../data/CategoriesData"
import Popular from "../../components/homepage/popular/Popular"
import fetchRecommend from "../../hook/fetchRecommend"
import { useContext } from "react"
import { UserProfileContext } from "../../contexts/UserProfileContext"
import AppScreen from "../../navigation/AppScreen"

export const HomePage = ({ navigation }) => {
    const { data, isLoading, refetch } = fetchRecommend()
    const foodData = data.recipes
    const {userProfile} = useContext(UserProfileContext)

    const onCategorySelect = (item) => {
        let category = ''
        console.log(item);
        switch(item.id) {
            case 0: {
                category = 'all'
                break
            }
            case 1: {
                category = 'breakfast'
                break
            }
            case 2: {
                category = 'main course'
                break
            }
            case 3: {
                category = 'soup'
                break
            }
            case 4: {
                category = 'dessert'
                break
            }
            case 5: {
                category = 'snack'
                break
            }
        }
        navigation.navigate(AppScreen.FoodByCategoryScreen, {category})
    }

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <HomeHeader
                    userName={userProfile.fullName}
                    userAvatar={require('/Users/habuiduc/Development/MobileDev/ReactNative/DishDiscovery/assets/images/image.jpeg')}
                />
                <Spacer height={8} />
                <SearchView
                    onSearchToggle={() => {
                        navigation.navigate('Search')
                    }}
                />
                <Spacer height={16} />
                <Categories
                    data={categoriesData}
                    onCategorySelect={onCategorySelect}
                />
                <Spacer height={32} />
                <Recommendation
                    foodData={foodData}
                    onDetailToggle={(item) => {
                        navigation.navigate('Detail', item.id)
                        console.log("pressed");
                    }}
                />
                <Spacer height={32} />
                <Popular
                    foodData={foodData}
                    onDetailToggle={(item) => {
                        navigation.navigate('Detail', item.id)
                        console.log("pressed");
                    }}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(247,247,247)',
        flex: 1,
        paddingHorizontal: 16,
    }
})