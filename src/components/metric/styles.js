import { StyleSheet, StatusBar, Dimensions } from "react-native";

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  textregular: {
    fontFamily: "HelveticaNeueCyr-Thin",
  },
  textmedium: {
    fontFamily: "HelveticaNeueCyr-Medium",
  },
  textlight: {
    fontFamily: "HelveticaNeueCyr-Light",
  },
  textbold: {
    fontFamily: "HelveticaNeueCyr-Bold",
  },
});
