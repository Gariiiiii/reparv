import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SellIcon from '../../assets/image/home/actioncard/old-property.png';
import BuyIcon from '../../assets/image/home/actioncard/new-property.png';
import RentIcon from '../../assets/image/home/actioncard/rent-property.png';
import ResaleIcon from '../../assets/image/home/actioncard/resale-property.png';
import ArrowIcon from '../../assets/image/home/actioncard/arrow.svg';

const {width} = Dimensions.get('window');

const CARD_GAP = 16;
const CARD_WIDTH = (width - CARD_GAP * 3) / 2; 

export default function ActionCards() {
  const navigation = useNavigation();

  const cardData = [
    {
      title: 'Sell Old Property',
      icon: SellIcon,
      screen: 'OldProperty',
    },
    {
      title: 'Buy New Property',
      icon: BuyIcon,
      screen: 'NewProperty',
    },
    {
      title: 'Rent Property',
      icon: RentIcon,
      screen: 'RentOldNewProperty',
    },
    {
      title: 'Buy Resale Property',
      icon: ResaleIcon,
      screen: 'ResaleProperty',
    },
  ];

  const formatTitle = (title, maxWordsPerLine = 2) => {
    const words = title.split(' ');
    if (words.length <= maxWordsPerLine) return title;

    let result = '';
    for (let i = 0; i < words.length; i += maxWordsPerLine) {
      result += words.slice(i, i + maxWordsPerLine).join(' ') + '\n';
    }
    return result.trim();
  };

  return (
    <View style={styles.wrapper}>
      {cardData.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.85}
          style={styles.card}
          onPress={() => navigation.navigate(item.screen)}>
          <View style={styles.row1}>
            <View style={{flex: 1}}>
              <Text style={styles.cardTitle}>{formatTitle(item.title)}</Text>
              {item.title === 'Rent Property' && (
                <Text style={styles.subtitle}>(New / Old)</Text>
              )}
            </View>

            <View style={styles.circle}>
              <ArrowIcon width={14} height={14} />
            </View>
          </View>

          <View style={styles.row2}>
            <View style={styles.iconWrapper}>
              <Image
                source={item.icon}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.verticalLine} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: CARD_GAP,
    marginTop: -35,
  },

  card: {
    width: CARD_WIDTH,
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 10,
    marginBottom: CARD_GAP,
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.14)',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },

  cardTitle: {
    fontSize: 15,
    fontFamily: 'SegoeUI-Bold',
    color: '#3F2D62',
    lineHeight: 20,
  },

  subtitle: {
    fontSize: 12,
    color: '#3F2D62',
    marginTop: 2,
  },

  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E8DFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  row2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },

  iconWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: '80%',
    height: '80%',
  },

  verticalLine: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{translateY: -20}],
    width: 8,
    height: 40,
    backgroundColor: '#5E23DC',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
});
