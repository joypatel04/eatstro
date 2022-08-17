import { createStackNavigator } from "@react-navigation/stack";

import TabStack from "~/navigation/TabStack";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabStack"
        component={TabStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
