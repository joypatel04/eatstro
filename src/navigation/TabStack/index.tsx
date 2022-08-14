import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Favourite, Cart, Orders, Profile } from "~/screens";

const Tab = createBottomTabNavigator();

const TabStack = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favourite" component={Favourite} />
    <Tab.Screen name="Cart" component={Cart} />
    <Tab.Screen name="Orders" component={Orders} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default TabStack;
