import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import { styles } from "../metric/styles";

const CustomTouchableHiglight = ({ title, onPress, style }) => {
  return (
    <TouchableHighlight
      onPress={onPress ? onPress : () => null}
      underlayColor={"white"}
      className={`border-[1px] border-[#464E8A] rounded-[10px] p-4 ${style}`}
    >
      <Text
        style={styles.textmedium}
        className="text-[#464E8A] text-center text-base"
      >
        {title}
      </Text>
    </TouchableHighlight>
  );
};

export default CustomTouchableHiglight;
