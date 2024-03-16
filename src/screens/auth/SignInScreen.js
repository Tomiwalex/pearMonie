import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../components/metric/styles";
import { colors } from "../../components/metric/colors";
import LoadingDot from "../../components/design/LoadingDot";
import axios from "axios";
import { baseUrl } from "../../components/metric/url";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SignInnScreen = () => {
  const navigation = useNavigation();
  const [isPasswordShown, setIsPasswordShown] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({
    emailOrUsername: "", //stores the input value for username
    password: "", //stores the input value for password
  });

  /* A function to handle the login process asynchronously.   */
  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${baseUrl}/api/v1/login`, {
        username: userInfo.emailOrUsername,
        password: userInfo.password,
      });

      console.log(res.data);
      navigation.replace("Dashboard");
    } catch (err) {
      Alert.alert("Error", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../assets/splash.png")}
      className="flex-1"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        vertical
        contentContainerStyle={{ flex: 1 }}
      >
        <View className="flex-1 justify-center items-center">
          <View
            className="p-6 py-14 rounded-[39px] w-[90%] max-w-[394px]"
            style={{ backgroundColor: "#fff" }}
          >
            <View className="py-3 ml-3  bg-[#1C265C20] rounded-lg w-[70] items-center">
              <MaterialCommunityIcons
                name="account-arrow-left-outline"
                size={40}
                color={colors.deepBlue}
              />
            </View>

            {/* Welcome text */}
            <Text
              style={[styles.textbold, { color: colors.deepBlue }]}
              className="text-xl mt-5 ml-2"
            >
              Welcome Back {""}
            </Text>

            <Text
              style={[styles.textlight, { color: colors.deepBlue }]}
              className="text-sm ml-2 mt-"
            >
              Enter your details to continue
            </Text>

            {/* The sign in form */}
            <View className="mt-7">
              {/* Mail or username input */}
              <TextInput
                className="text-xs  border-[1px] rounded-[17px] p-3"
                value={userInfo.emailOrUsername}
                onChangeText={(e) => {
                  setUserInfo({ ...userInfo, emailOrUsername: e });
                  // reset();
                }}
                style={[styles.textbold]}
                placeholder="Username"
                placeholderTextColor={"#A8A8A8"}
                cursorColor={colors.deepBlue}
              />

              {/* Password input */}
              <View className="p-3  border-[1px] rounded-[17px] mt-7 flex-row">
                <TextInput
                  style={[styles.textbold]}
                  secureTextEntry={isPasswordShown ? false : true}
                  className="text-xm flex-1 mr-1"
                  placeholder="*******"
                  value={userInfo.password}
                  onChangeText={(e) => {
                    setUserInfo({ ...userInfo, password: e });
                    //   reset();
                  }}
                  cursorColor={colors.deepBlue}
                />

                <Pressable onPress={() => setIsPasswordShown(!isPasswordShown)}>
                  {isPasswordShown ? (
                    <Ionicons name="eye" size={24} color={colors.deepBlue} />
                  ) : (
                    <Ionicons
                      name="eye-off"
                      size={24}
                      color={colors.deepBlue}
                    />
                  )}
                </Pressable>
              </View>

              {/* Sign in button */}
              <TouchableOpacity
                disabled={
                  !userInfo.emailOrUsername || !userInfo.password || isLoading
                    ? true
                    : false
                }
                style={{
                  opacity:
                    !userInfo.emailOrUsername || !userInfo.password || isLoading
                      ? 0.7
                      : 1,
                  backgroundColor: colors.deepBlue,
                }}
                onPress={handleLogin}
                activeOpacity={0.7}
                className="p-4 mt-7 rounded-[17px]"
              >
                {isLoading ? (
                  <View className="py-[2px] items-center">
                    <LoadingDot color="#fff" />
                  </View>
                ) : (
                  <Text
                    className="text-center text-base text-white"
                    style={[styles.textbold]}
                  >
                    Sign in
                  </Text>
                )}
              </TouchableOpacity>

              {/* Sign up option */}
              <Text
                style={styles.textlight}
                className=" text-sm mt-5 text-center"
              >
                Don’t have an account?{" "}
                <TouchableOpacity onPress={() => navigation.replace("SignUp")}>
                  <Text
                    style={[styles.textmedium, { color: colors.deepBlue }]}
                    className="underline top-[4px] text-sm"
                  >
                    Sign up
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignInnScreen;
