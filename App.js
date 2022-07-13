import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import HomeScreen from "./screens/HomeScreen";
import IntroScreen from "./screens/IntroScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer  style={tw`h-full`}>
      <SafeAreaProvider>
        <stack.Navigator>
          <stack.Screen
            name="IntroScreen"
            component={IntroScreen}
            options={{
              headerShown: false,
              gestureDirection: "horizontal",
              gestureEnabled: true,
            }}
          />

          <stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
              gestureDirection: "horizontal",
              gestureEnabled: true,
            }}
          />
        </stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
