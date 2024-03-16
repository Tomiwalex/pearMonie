import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Animated, { FadeIn } from "react-native-reanimated";
import { styles } from "../metric/styles";

const RecepientSearchResult = ({
  setOpen,
  index,
  item,
  setSelectedUser,
  selectedUser,
  x,
  y,
}) => {
  return (
    <Animated.View
      entering={FadeIn.delay(index * 100)}
      style={{
        position: "absolute",
        left: x - 40,
        top: y - 30,
      }}
      className=" items-center absolute "
      key={index}
    >
      <TouchableOpacity
        style={{
          borderWidth: selectedUser?.id === item?.id ? 4 : 2,
          borderColor: selectedUser?.id === item?.id ? "#1DC7AC" : "white",
        }}
        onPress={() => {
          setSelectedUser(item);
          setOpen(true);
        }}
        activeOpacity={0.6}
        className="] rounded-full overflow-hidden"
      >
        <Image
          style={{
            width: selectedUser?.id === item?.id ? 72 : 36,
            height: selectedUser?.id === item?.id ? 72 : 36,
          }}
          resizeMode="cover"
          className=""
          source={require("../../../assets/images/icon/menu-icon.png")}
        />
      </TouchableOpacity>

      <Text
        style={styles.textlight}
        className="text-white text-xs text-center mt-1"
      >
        {item.name}
      </Text>
    </Animated.View>
  );
};

export default RecepientSearchResult;
