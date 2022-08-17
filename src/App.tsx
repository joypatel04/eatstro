import { PortalProvider, PortalHost } from "@gorhom/portal";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import { LogBox } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { ThemeProvider } from "styled-components/native";

import { ToastConfig } from "./config/ToastConfig";

import { defaultTheme } from "~/utils/theme";
import Navigator from "~navigation";

// Ignore the warning caused by Lottie package
LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native."]);

const queryClient = new QueryClient();

const App = () => {
  const [fontsLoaded] = useFonts({
    "DMSans-Bold": require("../assets/fonts/DMSans-Bold.ttf"),
    "DMSans-Medium": require("../assets/fonts/DMSans-Medium.ttf"),
    DMSans: require("../assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Italic": require("../assets/fonts/DMSans-Italic.ttf"),
    Abel: require("../assets/fonts/abel-v18-latin-regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ThemeProvider theme={defaultTheme}>
            <PortalProvider>
              <NavigationContainer>
                <Navigator />
              </NavigationContainer>
              <PortalHost name="filterBottomSheet" />
            </PortalProvider>
          </ThemeProvider>
        </GestureHandlerRootView>
      </QueryClientProvider>
      <Toast config={ToastConfig} />
    </SafeAreaProvider>
  );
};

export default App;
