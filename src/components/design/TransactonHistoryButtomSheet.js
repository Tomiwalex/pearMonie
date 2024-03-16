import { View, Text, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../metric/styles";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { baseUrl } from "../metric/url";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../metric/colors";
import History from "./History";

const TransactonHistoryButtomSheet = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchDetails = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseUrl}/api/v1/transactions`);
      setData(res.data.transactions);
      // console.log(res.data, "response");
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  const HistorySkeleton = () => {
    return (
      <View className=" flex-row items-center my-5 pb-5 px-4">
        <ShimmerPlaceholder
          shimmerColors={colors.shimmerColors}
          style={{ height: 48, width: 48, borderRadius: 48 }}
        />

        <View className="ml-2 flex-1">
          <ShimmerPlaceholder
            shimmerColors={colors.shimmerColors}
            style={{ height: 16, borderRadius: 4, width: "60%" }}
          />

          <ShimmerPlaceholder
            shimmerColors={colors.shimmerColors}
            style={{
              height: 28,
              width: 87,
              marginTop: 8,
              borderRadius: 28,
            }}
          />
        </View>

        <ShimmerPlaceholder
          shimmerColors={colors.shimmerColors}
          style={{ height: 16, borderRadius: 4, width: 70 }}
        />
      </View>
    );
  };

  return (
    <View className="pt-2">
      <View className="flex-row items-center px-4 mb-7">
        <Text style={styles.textmedium} className="text-base text-white">
          All Transactions
        </Text>

        <Text
          style={styles.textlight}
          className="flex-1 text-right text-[#4E589F]"
        >
          Sort by:
        </Text>

        {/* filter */}
        <Pressable className="flex-row items-center ml-2">
          <Text style={styles.textlight} className="text-white mr-2">
            Recent
          </Text>
          <FontAwesome name="angle-down" size={20} color="white" />
        </Pressable>
      </View>

      {loading && (
        <View>
          <HistorySkeleton />
          <HistorySkeleton />
          <HistorySkeleton />
        </View>
      )}

      {/* transaction history */}
      {!loading &&
        data &&
        data.map((item, index) => (
          <History item={item} key={index} index={index} />
        ))}
    </View>
  );
};

export default TransactonHistoryButtomSheet;
