import { PortalProvider, PortalHost } from "@gorhom/portal";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

import { ToastConfig } from "./config/ToastConfig";

import Navigator from "~navigation";

// Ignore the warning caused by Lottie package
LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native."]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <PortalProvider>
            <NavigationContainer>
              <Navigator />
            </NavigationContainer>
            <PortalHost name="filterBottomSheet" />
          </PortalProvider>
        </GestureHandlerRootView>
      </QueryClientProvider>
      <Toast config={ToastConfig} />
    </SafeAreaProvider>
  );
}
