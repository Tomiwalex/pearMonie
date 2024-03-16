import { View, Text } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const LoadingDot = ({ color }) => {
  const size1 = useSharedValue(18);
  const size2 = useSharedValue(13);
  const size3 = useSharedValue(9);
  const size4 = useSharedValue(6);

  const circle1Style = useAnimatedStyle(() => {
    return {
      width: size1.value,
      height: size1.value,
    };
  });

  const circle2Style = useAnimatedStyle(() => {
    return {
      width: size2.value,
      height: size2.value,
    };
  });

  const circle3Style = useAnimatedStyle(() => {
    return {
      width: size3.value,
      height: size3.value,
    };
  });

  const circle4Style = useAnimatedStyle(() => {
    return {
      width: size4.value,
      height: size4.value,
    };
  });

  React.useEffect(() => {
    size1.value = withRepeat(
      withSequence(
        withTiming(18, { duration: 900 }),
        withTiming(13, { duration: 900 }),
        withTiming(9, { duration: 900 }),
        withTiming(6, { duration: 900 })
      ),
      -1,
      true
    );

    size2.value = withRepeat(
      withSequence(
        withTiming(13, { duration: 900 }),
        withTiming(18, { duration: 900 }),
        withTiming(13, { duration: 900 }),
        withTiming(9, { duration: 900 })
      ),
      -1,
      true
    );

    size3.value = withRepeat(
      withSequence(
        withTiming(9, { duration: 1800 }),
        withTiming(18, { duration: 900 }),
        withTiming(13, { duration: 900 })
      ),
      -1,
      true
    );

    size4.value = withRepeat(
      withSequence(
        withTiming(6, { duration: 900 }),
        withTiming(6, { duration: 900 }),
        withTiming(6, { duration: 900 }),
        withTiming(18, { duration: 900 })
      ),
      -1,
      true
    );
  }, []);

  return (
    <View className="flex-row items-center justify-cent h-5">
      {/* first circle */}
      <Animated.View
        style={[circle1Style, { backgroundColor: color }]}
        className=" rounded-full  mr-1"
      ></Animated.View>

      {/* second circle */}
      <Animated.View
        style={[circle2Style, { backgroundColor: color }]}
        className="rounded-full mr-1"
      ></Animated.View>

      {/* third circle */}
      <Animated.View
        style={[circle3Style, { backgroundColor: color }]}
        className="rounded-full"
      ></Animated.View>

      {/* fourth circle */}
      <Animated.View
        style={[circle4Style, { backgroundColor: color }]}
        className="rounded-full ml-1"
      ></Animated.View>
    </View>
  );
};

export default LoadingDot;
