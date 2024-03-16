import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { deviceHeight, deviceWidth, styles } from "../metric/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../metric/colors";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";
import CustomNumberKeypad from "../custom-ui/CustomNumberKeypad";
const MoneyInput = ({ setAmountOpen }) => {
  const [amount, setAmount] = React.useState("");

  const handleKeyPress = (value) => {
    setAmount((prevInput) => prevInput.toString() + value.toString());
  };

  const handleCancel = () => {
    const upDatedAmount = amount.slice(0, -1);
    setAmount(upDatedAmount);
  };

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      style={{ height: deviceHeight, width: deviceWidth }}
      className="absolute top-0 z-[2] bg-[#00000099] justify-end"
    >
      <View className="flex-row justify-center mb-3">
        <TouchableOpacity onPress={() => setAmountOpen(false)}>
          <MaterialIcons name="cancel" size={40} color="white" />
        </TouchableOpacity>
      </View>

      <Animated.View
        entering={SlideInDown}
        exiting={SlideOutDown}
        style={{ backgroundColor: colors.deepBlue }}
        className="rounded-t-[40px] p-4 h-[85%] justify-end"
      >
        <Text
          style={styles.textmedium}
          className="text-center text-white text-[60px] "
          numberOfLines={1}
        >
          ₦{amount}
        </Text>

        {/* The amount input */}
        <View className="">
          <CustomNumberKeypad
            handleKeyPress={handleKeyPress}
            handleCancel={handleCancel}
          />
        </View>

        {/* The send monry button */}
        <TouchableOpacity
          onPress={() => setAmountOpen(false)}
          activeOpacity={0.6}
          className="rounded-[10px] max-w-[173px] w-full mx-auto"
          style={{ backgroundColor: colors.red }}
        >
          <Text
            style={styles.textmedium}
            className="text-white text-base text-center py-5"
          >
            Send money
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

export default MoneyInput;
