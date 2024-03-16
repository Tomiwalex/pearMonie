import { View, Text, TouchableOpacity, Pressable, onPress } from "react-native";
import React from "react";
import { styles } from "../metric/styles";

/**
+ * Generates a custom TouchableOpacity component with specified title, class, style, primary color, and secondary color.
+ *
+ * @param {object} title - The title to be displayed in the component
+ * @param {string} className - The class name for styling purposes using tailwind css
+ * @param {object} style - The inline style object for the component
+ * @param {string} priColor - The primary color for the TouchableOpacity
+ * @param {string} secColor - The secondary color for the Pressable and Text components
+ * @return {JSX.Element} The custom TouchableOpacity component
+ */
const CustomTouchableOpacity = ({
  title,
  style,
  priColor,
  secColor,
  onPress,
}) => {
  return (
    <View
      style={[
        { position: "relative", borderColor: priColor, borderWidth: 1 },
        style,
      ]}
      className="overflow-hidden"
    >
      <Pressable
        style={{
          backgroundColor: secColor,

          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          left: 0,
          justifyContent: "center",
        }}
        disabled={true}
      >
        <Text
          style={[styles.textmedium, { color: priColor }]}
          className="text-center text-base"
        >
          {title}
        </Text>
      </Pressable>

      <TouchableOpacity
        onPress={onPress ? onPress : null}
        style={{
          backgroundColor: priColor,
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          left: 0,
          justifyContent: "center",
        }}
        activeOpacity={0}
      >
        <Text
          style={[styles.textmedium, { color: secColor }]}
          className="text-center text-base"
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomTouchableOpacity;
