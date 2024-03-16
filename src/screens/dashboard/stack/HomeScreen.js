import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../../components/metric/styles";
import { colors } from "../../../components/metric/colors";
import { Ionicons } from "@expo/vector-icons";
import CustomTouchableHiglight from "../../../components/custom-ui/CustomTouchableHiglight";
import { useNavigation } from "@react-navigation/native";
import SendBottomSheet from "../../../components/design/SendMoneyBottomSheet.";
import TransactonHistoryButtomSheet from "../../../components/design/TransactonHistoryButtomSheet";
import History from "../../../components/design/History";
import axios from "axios";
import { baseUrl } from "../../../components/metric/url";

const HomeScreen = () => {
  const [balanceShown, setBalanceShown] = React.useState(false);
  const [isHistoryOpened, setHistoryOpened] = useState(false);
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  // function to fetch the transaction
  const fetchDetails = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/transactions`);
      setData(res.data.transactions);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <View className="flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container, { backgroundColor: colors.darkBlue }]}
      >
        {/*  The home header*/}
        <View className="flex-row items-center p-4 py-6">
          <TouchableOpacity activeOpacity={0.6}>
            <Image
              className="h-12 w-12"
              source={require("../../../../assets/images/icon/menu-icon.png")}
            />
          </TouchableOpacity>

          {/* user's name */}
          <Text
            style={styles.textmedium}
            className="flex-1 ml-4 text-xl text-white"
          >
            Hello, Sandra
          </Text>

          <TouchableOpacity
            activeOpacity={0.6}
            className="bg-[#212A6B] rounded-lg p-[11px]"
          >
            <Text style={styles.textmedium} className="text-[#426DDC]">
              Add money
            </Text>
          </TouchableOpacity>
        </View>

        {/* the users wallet */}
        <View className="px-4 text-xs text-white mt-5">
          <Text className="text-xs text-white" style={styles.textlight}>
            Your current balance is
          </Text>

          <View className="flex-row items-center mt-3">
            {/* currency sign */}
            <Text style={styles.textmedium} className="text-[40px] text-white">
              ₦
            </Text>

            {/* balance */}
            <Text
              style={[
                styles.textbold,
                {
                  fontSize: balanceShown ? 40 : 60,
                  top: balanceShown ? 0 : 12,
                },
              ]}
              className=" text-white"
              numberOfLines={1}
            >
              {balanceShown ? "0.00" : "****"}
            </Text>

            {/* hide abd show balance */}
            <TouchableOpacity
              onPress={() => setBalanceShown(!balanceShown)}
              className="ml-3"
            >
              <Ionicons
                name={balanceShown ? "eye-off-outline" : "eye-outline"}
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* CTA buttons */}
        <View className="mt-10 px-4 flex-row justify-between md:justify-start">
          {/* request money button */}
          <CustomTouchableHiglight
            onPress={() => navigation.navigate("SearchRecipient")}
            style="basis-[49%] md:max-w-[164px]"
            title="Request money"
          />

          {/* send money button */}
          <CustomTouchableHiglight
            onPress={() => navigation.navigate("SearchRecipient")}
            style="basis-[49%] md:max-w-[164px]"
            title="Send money"
          />
        </View>

        {/* the transaction bottom sheet */}
        <View className="mt-6">
          <View className="flex-row items-center justify-between mb-2 p-4">
            <Text style={styles.textbold} className="text-lg text-white">
              Recent Activity
            </Text>

            <TouchableOpacity onPress={() => setHistoryOpened(true)}>
              <Text style={styles.textbold} className="text-gray-500 text-base">
                Show all
              </Text>
            </TouchableOpacity>
          </View>

          {data &&
            data.map((item, index) => (
              <History item={item} key={index} index={index} />
            ))}
        </View>

        {/* the bottom sheet */}
        <SendBottomSheet isOpen={isHistoryOpened} setOpen={setHistoryOpened}>
          <TransactonHistoryButtomSheet />
        </SendBottomSheet>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
