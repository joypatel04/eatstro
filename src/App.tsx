import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { PortalProvider, PortalHost } from "@gorhom/portal";
import Toast from "react-native-toast-message";
import Navigator from "~navigation";

import { ToastConfig } from "./config/ToastConfig";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PortalProvider>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
          <PortalHost name="filterBottomSheet" />
        </PortalProvider>
      </GestureHandlerRootView>
      <Toast config={ToastConfig} />
    </SafeAreaProvider>
  );
}
