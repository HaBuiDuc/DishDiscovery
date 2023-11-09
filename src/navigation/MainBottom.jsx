import { HomePage } from "../views/homepage/HomePage"
import { Tab } from "./Tab"

function MainBottom() {
    return <Tab.Navigator initialRouteName='HomePage'
        screenOptions={{
        }}
    >
        <Tab.Screen
            name='HomePage'
            component={HomePage}
            options={{
            }}
        />
    </Tab.Navigator>
}

export default MainBottom