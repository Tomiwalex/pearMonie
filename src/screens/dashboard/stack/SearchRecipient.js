import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { deviceWidth, styles } from "../../../components/metric/styles";
import { colors } from "../../../components/metric/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import users from "../../../data/mockUser.json";
import RecepientSearchResult from "../../../components/design/RecepientSearchResult";
import SendBottomSheet from "../../../components/design/SendMoneyBottomSheet.";
import MoneyInput from "../../../components/design/MoneyInput";

const SearchRecipient = () => {
  const navigation = useNavigation();
  const [isFocus, setIsFocus] = React.useState(false);
  const [isAmountOpen, setAmountOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [data, setData] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState({});
  const [isOpen, setOpen] = React.useState(false);
  const numImages = data?.length; // Number of images
  const rad = deviceWidth - 100;
  const radius = rad / 2; // Radius of the circle
  const images = Array.from({ length: numImages });

  const getRandomPosition = (index) => {
    const angle = (360 / numImages) * index;
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);
    return { x, y };
  };
  // function to search and filter the users's list to sort users whose name match the searched text
  const handleSearch = (e) => {
    setSelectedUser({});
    if (e !== "") {
      setData(
        users.filter((user) =>
          user?.name.toLowerCase().includes(e.toLowerCase())
        )
      );
    } else {
      setData([]);
    }
  };

  return (
    <View
      className="flex-1"
      style={[styles.container, { backgroundColor: colors.darkBlue }]}
    >
      <SafeAreaView className="flex-1">
        {/* header, contains the search bar */}
        <View className="p-4 flex-row items-center mt-2">
          <Pressable
            onPress={() => navigation.goBack()}
            className="flex-row items-center"
          >
            <Ionicons name="chevron-back" size={24} color="white" />
            <Text style={styles.textmedium} className="text-white text-sm ml-2">
              Back
            </Text>
          </Pressable>

          {/* searchInput */}
          <TextInput
            style={[
              styles.textmedium,
              { borderColor: isFocus ? "#1DC7AC" : colors.mediumBlue },
            ]}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            value={input}
            onChangeText={(e) => {
              setInput((prev) => e);
              handleSearch(e);
            }}
            className="p-4 py-3 text-white flex-1 rounded-lg border-[1px] border-[#1DC7AC] ml-4"
            placeholderTextColor={"grey"}
            placeholder="Search "
            cursorColor={"#1DC7AC"}
          />
        </View>

        {/* ripple circle */}
        <View className="mt-10 relative">
          <View
            className="rounded-full border-[1px] border-[#0D164B] items-center justify-center"
            style={{ width: deviceWidth, height: deviceWidth }}
          >
            <View
              className="rounded-full border-[1px] border-[#0D164B] items-center justify-center"
              style={{ width: deviceWidth - 100, height: deviceWidth - 100 }}
            >
              <View
                className="rounded-full border-[1px] border-[#0D164B] items-center justify-center"
                style={{ width: deviceWidth - 200, height: deviceWidth - 200 }}
              >
                <View className=" h-10 w-">
                  {data.map((item, index) => {
                    const { x, y } = getRandomPosition(index);
                    return (
                      <RecepientSearchResult
                        setOpen={setOpen}
                        index={index}
                        item={item}
                        x={x}
                        y={y}
                        key={index}
                        setSelectedUser={setSelectedUser}
                        selectedUser={selectedUser}
                      />
                    );
                  })}
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>

      {/* the botton sheet to continue to the amount input section */}
      <SendBottomSheet isOpen={isOpen} setOpen={setOpen}>
        <View className="items-center">
          <Image
            resizeMode="cover"
            className="h-[72px] w-[72px] rounded-full bg-blue-950 mt-4"
          />

          <Text
            style={styles.textmedium}
            className="text-white text-[20px] mt-10"
          >
            {selectedUser?.name}
          </Text>
          <Text style={styles.textlight} className="text-white mt-4">
            {selectedUser?.phoneNumber}
          </Text>

          {/* The continue button */}
          <TouchableOpacity
            activeOpacity={0.6}
            className="rounded-[10px] max-w-[173px] w-full mx-auto mt-10"
            onPress={() => {
              setOpen(false);
              setAmountOpen(true);
            }}
            style={{ backgroundColor: colors.red }}
          >
            <Text
              style={styles.textmedium}
              className="text-white text-base text-center py-5"
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </SendBottomSheet>

      {/* the amount input section */}
      {isAmountOpen && <MoneyInput setAmountOpen={setAmountOpen} />}
    </View>
  );
};

export default SearchRecipient;
