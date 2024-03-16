import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../metric/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";

const History = ({ index, item }) => {
  return (
    <Animated.View
      style={{
        backgroundColor: index % 2 === 0 ? "#192259" : "transparent",
      }}
      className="flex-row items-center py-4 px-3"
    >
      <Image className="h-12 w-12 rounded-full bg-[#010a43]" />

      <View className="flex-1 mx-3">
        <Text
          numberOfLines={1}
          style={styles.textbold}
          className="text-base text-[#858EC5]"
        >
          {item.to_wallet || item.from_wallet}
        </Text>

        <View
          style={{
            width: item.type === "debit" ? 75 : 95,
            backgroundColor: item.type === "debit" ? "#FAAD39" : "#1DC7AC",
          }}
          className=" px-3 p-2 rounded-full mt-2 flex-row items-center"
        >
          <MaterialCommunityIcons
            name="account-arrow-left-outline"
            size={20}
            color="white"
          />
          <Text style={styles.textlight} className="text-xs text-white ml-1">
            {item.type === "debit" ? "Sent" : "Received"}
          </Text>
        </View>
      </View>

      <Text
        style={[
          styles.textbold,
          { color: item.type == "debit" ? "#FAAD39" : "#1DC7AC" },
        ]}
        className="text-base text-white "
      >
        {item.currency} {item.amount}
      </Text>
    </Animated.View>
  );
};

export default History;
