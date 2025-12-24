import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ArrowIcon from '../assets/image/home/actioncard/arrow.svg';
import BackIcon from '../assets/image/new-property/back-icon.svg';


import FlatImg from '../assets/image/resale-property/resale-flat.png';
import RowHouseImg from '../assets/image/resale-property/row-house.png';
import OfficeImg from '../assets/image/resale-property/office.png';
import FarmHouseImg from '../assets/image/resale-property/farm-house.png';
import GodownImg from '../assets/image/resale-property/godown.png';
import ResaleFarmHouseImg from '../assets/image/resale-property/resale-farm.png';
import BungalowImg from '../assets/image/resale-property/bungalow.png';
import ShopImg from '../assets/image/resale-property/shop.png';

const {width} = Dimensions.get('window');

export default function ResalePropertyScreen() {
  const navigation = useNavigation();

  const cardData = [
    {title: 'Resale Flat', img: FlatImg},
    {title: 'Resale Row House', img: RowHouseImg},
    {title: 'Resale Office', img: OfficeImg},
    {title: 'Resale Farm House', img: FarmHouseImg},
    {title: 'Resale Godown', img: GodownImg},
    {title: 'Resale Farm', img: ResaleFarmHouseImg},
    {title: 'Resale Bungalow', img: BungalowImg},
    {title: 'Resale Shop', img: ShopImg},
  ];

  const formatTitle = title => {
    const words = title.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i += 2) {
      result += words.slice(i, i + 2).join(' ') + '\n';
    }
    return result.trim();
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={22} height={22} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Buy Resale Property</Text>

        <View style={{width: 22}} />
      </View>

      {/* CARDS */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.wrapper}>
        {cardData.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.85}
            style={styles.card}>
            <View style={styles.row1}>
              <Text style={styles.title}>{formatTitle(item.title)}</Text>
              <View style={styles.circle}>
                <ArrowIcon width={16} height={16} />
              </View>
            </View>

            <View style={styles.row2}>
              <Image
                source={item.img}
                style={styles.image}
                resizeMode="contain"
              />
              <View style={styles.verticalLine} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8FF',
  },
  header: {
    height: 56,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'Segoe UI',
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 16,
  },
  card: {
    width: (width - 18 * 3) / 2,
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    paddingVertical: 12,
    boxShadow: '0px 4px 6px rgba(0,0,0,0.08)',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginBottom: 6,
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3F2D62',
    lineHeight: 22,
    flex: 1,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#EEE8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row2: {
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: 140,
    height: 110,
  },
  verticalLine: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{translateY: -24}],
    width: 8,
    height: 36,
    backgroundColor: '#5E23DC',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
});
