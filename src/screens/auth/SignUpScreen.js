import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import { styles } from "../../components/metric/styles";
import { colors } from "../../components/metric/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LoadingDot from "../../components/design/LoadingDot";
import axios from "axios";
import { baseUrl } from "../../components/metric/url";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [isPasswordShown, setIsPasswordShown] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({
    username: "", //stores the input value for username
    password: "", //stores the input value for password
    email: "", //stores the input value for email
  });

  const [inputError, setInputError] = React.useState({
    mailError: false, //stores a value
  });

  // function to check if the email entered is valid
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setInputError({ ...inputError, mailError: false });
    } else {
      setInputError({ ...inputError, mailError: true });
    }
  };

  /* A function to handle the sign up process asynchronously.   */
  const handleRegister = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${baseUrl}/api/v1/register`,
        {
          ...userInfo,
        },
        { timeout: 60000 }
      );

      console.log(res.data);
      Alert.alert("Success", "Your account has been created successfully.");
      navigation.replace("SignIn");
    } catch (err) {
      Alert.alert("Error", `${err.message}, try again`);
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
            {/* sign up icon */}
            <View className="py-2 ml-3 pl-1 pb-3 bg-[#1C265C20] rounded-lg w-[70] items-center">
              <Ionicons
                name="create-outline"
                size={44}
                color={colors.deepBlue}
              />
            </View>

            <Text
              style={[styles.textbold, { color: colors.deepBlue }]}
              className="text-xl mt-5 ml-2"
            >
              Create Account
            </Text>

            <Text
              style={[styles.textlight, { color: colors.deepBlue }]}
              className="text-sm ml-2 mt-"
            >
              Join the winning team now
            </Text>

            {/* The sign up form */}
            <View className="mt-7">
              {/* username input */}
              <TextInput
                className="text-xs  border-[1px] rounded-[17px] p-3"
                value={userInfo.username}
                onChangeText={(e) => {
                  setUserInfo({ ...userInfo, username: e });
                }}
                style={[styles.textbold]}
                placeholder="Username"
                placeholderTextColor={"#A8A8A8"}
                cursorColor={colors.deepBlue}
              />

              {/* mail input */}
              <TextInput
                className="text-xs  border-[1px] rounded-[17px] p-3 mt-4"
                value={userInfo.email}
                onChangeText={(e) => {
                  setUserInfo({ ...userInfo, email: e });
                  isEmailValid(e);
                }}
                style={[
                  styles.textbold,
                  { borderColor: inputError.mailError ? "red" : "black" },
                ]}
                placeholder="example@gmail.com"
                placeholderTextColor={"#A8A8A8"}
                cursorColor={colors.deepBlue}
              />

              {/* invalid mail error message */}
              {inputError.mailError && (
                <Text
                  style={styles.textmedium}
                  className="text-red-600 text-xs mt-1 ml-2"
                >
                  *Enter a valid email address
                </Text>
              )}

              {/* Password input */}
              <View className="p-3  border-[1px] rounded-[17px] mt-4 flex-row">
                <TextInput
                  style={[styles.textbold]}
                  secureTextEntry={isPasswordShown ? false : true}
                  className="text-xm flex-1 mr-1"
                  placeholder="*******"
                  value={userInfo.password}
                  onChangeText={(e) => {
                    setUserInfo({ ...userInfo, password: e });
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

              {/* Sign up button */}
              <TouchableOpacity
                disabled={
                  !userInfo.email ||
                  !userInfo.username ||
                  !userInfo.password ||
                  isLoading
                    ? true
                    : false
                }
                style={{
                  opacity:
                    !userInfo.email ||
                    !userInfo.username ||
                    !userInfo.password ||
                    isLoading
                      ? 0.7
                      : 1,
                  backgroundColor: colors.deepBlue,
                }}
                onPress={handleRegister}
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
                    Create Account
                  </Text>
                )}
              </TouchableOpacity>

              {/* Sign up option */}
              <Text
                style={styles.textlight}
                className=" text-sm mt-5 text-center"
              >
                Already have an account?{" "}
                <TouchableOpacity onPress={() => navigation.replace("SignIn")}>
                  <Text
                    style={[styles.textmedium, { color: colors.deepBlue }]}
                    className="underline top-[4px] text-sm"
                  >
                    Sign in
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

export default SignUpScreen;
