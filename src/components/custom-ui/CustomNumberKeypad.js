import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { styles as style2 } from "../metric/styles";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../metric/colors";

const CustomNumberKeypad = ({ handleKeyPress, handleCancel }) => {
  //   const handleKeyPress = (value) => {
  //     onKeyPress(value);
  //   };

  const KeypadButton = ({ num }) => {
    return (
      <TouchableHighlight
        underlayColor={"#ffffff20"}
        className="rounded-full h-[90px] w-[90px] justify-center item-center"
        onPress={() => handleKeyPress(num)}
      >
        <Text
          style={style2.textmedium}
          className="text-white text-2xl text-center"
        >
          {num}
        </Text>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container} className="my-5">
      <View style={styles.row}>
        {[1, 2, 3].map((num) => (
          <KeypadButton key={num} num={num} />
        ))}
      </View>

      <View style={styles.row}>
        {[4, 5, 6].map((num) => (
          <KeypadButton num={num} key={num} />
        ))}
      </View>

      <View style={styles.row}>
        {[7, 8, 9].map((num) => (
          <KeypadButton num={num} key={num} />
        ))}
      </View>

      <View style={styles.row}>
        <KeypadButton num={"."} />
        <KeypadButton num={0} />

        <TouchableHighlight
          underlayColor={"#ffffff20"}
          className="rounded-full h-[90px] w-[90px] flex-row justify-center items-center"
          onPress={handleCancel}
        >
          <Ionicons
            name="backspace-outline"
            size={24}
            color="white"
            selectionColor={colors.red}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 30,
    margin: 5,
    backgroundColor: "lightblue",
    borderRadius: 40,
  },
});

export default CustomNumberKeypad;
