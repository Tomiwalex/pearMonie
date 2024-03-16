import { View, Text, FlatList } from "react-native";
import React from "react";
import { styles } from "../../components/metric/styles";
import { colors } from "../../components/metric/colors";
import OnboardSlide from "../../components/design/OnboardSlide";

const OnboardingScreen = () => {
  /**
+   * slide:
+   * An array that contains the data for each slide in the onboarding screen.
+   * Each slide is an object with the following properties:
+   * - bg: A string that represents the background image of the slide.
+   *       It should be a require statement that points to an image file.
+   * - heading: A string that represents the heading text of the slide.
+   * - text: A string that represents the paragraph text of the slide.
+   * - priColor: A string that represents the primary color of the slide.
+   *            It should be a color code in the format of a hex value.
+   * - secColor: A string that represents the secondary color of the slide.
+   *             It should be a color code in the format of a hex value.
+   */

  const slide = [
    {
      id: 1,
      bg: require("../../../assets/splash.png"),
      heading: "Transfer That Is Safe",
      text: "You have nothing to be scared about, we got you covered.",
      priColor: colors.mediumBlue,
      secColor: "#fff",
    },
    {
      id: 2,
      bg: require("../../../assets/images/bg/splash-two-bg.png"),
      heading: "Transfer Money With Ease",
      text: "Making money is hard enough, we make transfering it easy enough.",
      priColor: "#fff",
      secColor: colors.deepBlue,
    },
  ];

  return (
    <View className="flex-1 bg-red-200">
      <FlatList
        pagingEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={slide}
        className="flex-1 bg-green-200"
        renderItem={({ item }) => <OnboardSlide item={item} />}
      />
    </View>
  );
};

export default OnboardingScreen;
