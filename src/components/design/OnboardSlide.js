import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { deviceWidth, styles } from "../metric/styles";
import CustomTouchableOpacity from "../custom-ui/CustomTouchableOpacity";
import Animated, { SlideInLeft } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const OnboardSlide = ({ item }) => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={[styles.container, { width: deviceWidth }]}
      source={item.bg}
      resizeMode="cover"
      className="flex-1 place-items-end"
    >
      <Animated.View
        entering={SlideInLeft}
        style={[styles.container, { backgroundColor: item.priColor }]}
        className="mt-auto w-[90%] max-w-[323px] p-9 pt-1 rounded-tr-[75px]"
      >
        {/* Pagination */}
        <View className="flex-row my-1 mt-3">
          <View
            className="w-8 h-2 rounded-[8px] "
            style={{
              width: item.id === 1 ? 32 : 16,
              backgroundColor: item.id === 2 ? "#FDD590" : "#FFB129",
            }}
          ></View>
          <View
            className="w-4 ml-1 h-2 rounded-[8px]"
            style={{
              width: item.id === 1 ? 16 : 32,
              backgroundColor: item.id === 1 ? "#FDD590" : "#FFB129",
            }}
          ></View>
        </View>

        {/* The heading */}
        <Text
          style={[styles.textbold, { color: item.secColor }]}
          className="text-lg mt-3"
        >
          {item.heading}
        </Text>

        {/* Other text */}
        <Text
          style={[styles.textlight, { color: item.secColor }]}
          className="text-base leading-6 mt-1 w-full max-w-[241px]"
        >
          {item.text}
        </Text>

        {/* The CTA button */}
        <CustomTouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          title="Start banking"
          secColor={item.priColor}
          priColor={item.secColor}
          style={{ height: 55, borderRadius: 10, marginTop: 20, width: 145 }}
        />
      </Animated.View>
    </ImageBackground>
  );
};

export default OnboardSlide;
