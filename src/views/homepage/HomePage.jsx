import { ScrollView, View, StyleSheet } from "react-native"
import { HomeHeader } from "../../components/homepage/header/HomeHeader"
import SearchView from "../../components/homepage/searchbar/SearchView"
import Categories from "../../components/homepage/categories/Categories"
import Spacer from "../../components/shared/Spacer"
import Recommendation from "../../components/homepage/recommendation/Recommendation"
import { categoriesData } from "../../data/CategoriesData"
import Popular from "../../components/homepage/popular/Popular"
import fetchRecommend from "../../hook/fetchRecommend"

export const HomePage = ({navigation}) => {
    // console.log(fetchRecommend().data);
    const foodData = fetchRecommend().data.recipes
    return (
        <View style={styles.container}>
            <ScrollView 
                showsVerticalScrollIndicator={false}
            >
                <HomeHeader
                    userName={'Anna'}
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
                />
                <Spacer height={32} />
                <Recommendation
                    foodData={foodData}
                    onDetailToggle={(item) => {
                        navigation.navigate('Detail', item)
                        console.log("pressed");
                    }}
                />
                <Spacer height={32} />
                <Popular
                    foodData={foodData}
                    onDetailToggle={(item) => {
                        navigation.navigate('Detail', item)
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