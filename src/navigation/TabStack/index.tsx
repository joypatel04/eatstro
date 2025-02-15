import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { useCallback } from "react";

import TabContainer from "./components/TabContainer";

import { Home, Favourite, Cart, Orders, Profile } from "~/screens";

const Tab = createBottomTabNavigator();

const TabStack = () => {
  const CustomTabBar = useCallback(
    (props: BottomTabBarProps) => <TabContainer {...props} />,
    []
  );

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={CustomTabBar}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabStack;
