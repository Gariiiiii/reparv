import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SellIcon from '../../assets/image/home/actioncard/sell-old-property.svg';
import BuyIcon from '../../assets/image/home/actioncard/buy-new-property.svg';
import RentIcon from '../../assets/image/home/actioncard/rent-property.svg';
import ResaleIcon from '../../assets/image/home/actioncard/resale-property.svg';
import ArrowIcon from '../../assets/image/home/actioncard/arrow.svg';

const {width} = Dimensions.get('window');

export default function ActionCards() {
  const navigation = useNavigation();

  const cardData = [
    {
      title: 'Sell Old Property',
      icon: <SellIcon width={146} height={120} />,
      screen: 'OldProperty',
    },
    {
      title: 'Buy New Property',
      icon: <BuyIcon width={142} height={112} />,
      screen: 'NewProperty',
    },
    {
      title: 'Rent Property',
      icon: <RentIcon width={146} height={115} />,
      screen: 'RentProperty',
    },
    {
      title: 'Buy Resale Property',
      icon: <ResaleIcon width={147} height={104} />,
      screen: 'ResaleProperty',
    },
  ];

  function formatTitle(title, maxWordsPerLine = 2) {
    const words = title.split(' ');
    if (words.length <= maxWordsPerLine) return title;

    let result = '';
    for (let i = 0; i < words.length; i += maxWordsPerLine) {
      result += words.slice(i, i + maxWordsPerLine).join(' ') + '\n';
    }

    return result.trim();
  }

  return (
    <View style={styles.wrapper}>
      {cardData.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => navigation.navigate(item.screen)}>
          <View style={styles.row1}>
            <View style={{flex: 1}}>
              <Text style={styles.cardTitle}> {formatTitle(item.title)}</Text>
              {item.title === 'Rent Property' && (
                <Text style={styles.subtitle}>(New / Old)</Text>
              )}
            </View>

            <View style={styles.circle}>
              <ArrowIcon width={16} height={16} />
            </View>
          </View>

          <View style={styles.row2}>
            <View style={styles.iconWrapper}>{item.icon}</View>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginTop: -35,
  },
  card: {
    width: (width - 18 * 3) / 2,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    paddingVertical: 12,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3F2D62',
    flex: 1,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 0,
    position: 'relative',
  },
  iconWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  verticalLine: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{translateY: -16}], 

    width: 8,
    height: 33,

    backgroundColor: '#5E23DC',

    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
});
