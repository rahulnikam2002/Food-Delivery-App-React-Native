import {
  View,
  Text,
  Image,
  Button,
  Alert,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
// import IntroPageImage from "../assets/pexels-adrienn-1537635.jpg";
import IntroPageImage from "../assets/pexels-edward-eyer-687824.jpg";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const IntroScreen = () => {
    const navigation  = useNavigation()
  return (
    <View  style={[tw`h-full`, {backgroundColor: "white"}]}>
      <View style={tw`w-full h-2/3`}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={IntroPageImage}
        />
      </View>

      <View style={[tw`p-10`, styles.bottomView]}>
        <Text style={tw`p-2 text-center text-xl font-semibold`}>
          Feeling Hungry
        </Text>
        <Text style={tw`p-3 text-center text-base pb-6`}>
          All the best restuarant with their top menu waiting for you, they
          can't wait for your order
        </Text>
        {/* <Button
        title='Hello'
        color={"#ff4e03"}
        /> */}
        <TouchableOpacity
          style={[tw`w-full p-3 rounded-lg`, { backgroundColor: "#cb202d" }]}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={[tw`text-center text-base`, { color: "white" }]}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    position: "relative",
    backgroundColor: "white",
    bottom: 15,
    borderRadius: 20,
  },
});

export default IntroScreen;
