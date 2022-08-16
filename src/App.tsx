import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import Navigator from "~navigation";
import { ToastConfig } from "./config/ToastConfig";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
      <Toast config={ToastConfig} />
    </SafeAreaProvider>
  );
}
