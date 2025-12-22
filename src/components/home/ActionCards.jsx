// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// import SellIcon from "../../assets/image/home/actioncard/sell-old-property.svg";
// import BuyIcon from "../../assets/image/home/actioncard/buy-new-property.svg";
// import RentIcon from "../../assets/image/home/actioncard/rent-property.svg";
// import ResaleIcon from "../../assets/image/home/actioncard/resale-property.svg";

// const { width } = Dimensions.get("window");

// export default function ActionCards() {
//   const navigation = useNavigation();

//   const cardData = [
//     { title: "Sell Old Property", icon: <SellIcon width={146} height={120} />, screen: "SellScreen" },
//     { title: "Buy New Property", icon: <BuyIcon width={142} height={112} />, screen: "BuyScreen" },
//     { title: "Rent Property", icon: <RentIcon width={146} height={115} />, screen: "RentScreen" },
//     { title: "Buy Resale Property", icon: <ResaleIcon width={147} height={104} />, screen: "MoreScreen" },
//   ];

//   return (
//     <View style={styles.wrapper}>
//       {cardData.map((item, index) => (
//         <TouchableOpacity
//           key={index}
//           style={styles.card}
//           activeOpacity={0.8}
//           onPress={() => navigation.navigate(item.screen)}
//         >
//           {item.icon}
//           <Text style={styles.title}>{item.title}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     width,
//     flexDirection: "row",
//     flexWrap: "wrap", // allow multiple rows
//     justifyContent: "space-between",
//     paddingHorizontal: 18,
//     marginTop: -35,
//   },
//   card: {
//     width: (width - 18 * 3) / 2, // two cards per row with spacing
//     height: 140, // increase height to fit icon properly
//     borderRadius: 16,
//     backgroundColor: "#FFFFFF",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 16, // spacing between rows
//     elevation: 6, // Android shadow
//     shadowColor: "#000", // iOS shadow
//     shadowOpacity: 0.15,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 4 },
//   },
//   title: {
//     fontSize: 12,
//     marginTop: 6,
//     fontWeight: "600",
//     color: "#4B3A8F",
//     textAlign: "center",
//   },
// });


import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SellIcon from "../../assets/image/home/actioncard/sell-old-property.svg";
import BuyIcon from "../../assets/image/home/actioncard/buy-new-property.svg";
import RentIcon from "../../assets/image/home/actioncard/rent-property.svg";
import ResaleIcon from "../../assets/image/home/actioncard/resale-property.svg";
import ArrowIcon from "../../assets/image/home/actioncard/arrow.svg"; 

const { width } = Dimensions.get("window");

export default function ActionCards() {
  const navigation = useNavigation();

  const cardData = [
    { title: "Sell Old Property", icon: <SellIcon width={146} height={120} />, screen: "SellScreen" },
    { title: "Buy New Property", icon: <BuyIcon width={142} height={112} />, screen: "BuyScreen" },
    { title: "Rent Property", icon: <RentIcon width={146} height={115} />, screen: "RentScreen" },
    { title: "Buy Resale Property", icon: <ResaleIcon width={147} height={104} />, screen: "MoreScreen" },
  ];

  return (
    <View style={styles.wrapper}>
      {cardData.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => navigation.navigate(item.screen)}
        >
          <View style={styles.row1}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <View style={styles.circle}>
              <ArrowIcon width={16} height={16} />
            </View>
          </View>

          <View style={styles.row2}>
            <View style={{ flex: 1, alignItems: "center" }}>{item.icon}</View>
            <View style={styles.verticalLine}></View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginTop: -35,
  },
  card: {
    width: (width - 18 * 3) / 2,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    paddingVertical: 12,
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
      marginBottom: 8,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4B3A8F",
      flex: 1,
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E8DFFF", 
    justifyContent: "center",
      alignItems: "center",
    
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
  },
  verticalLine: {
    width: 4,
    height: 40, // vertical line height
    backgroundColor: "#4B3A8F",
    marginLeft: 8,
    alignSelf: "center",
  },
});
