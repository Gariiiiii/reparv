import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Location from '../../assets/image/home/rented-properties-card/location.png';
import Bathroom from '../../assets/image/home/rented-properties-card/bathroom.png';
import Bedroom from '../../assets/image/home/rented-properties-card/bedroom.png';
import UserIcon from '../../assets/image/home/rented-properties-card/user-icon.png';
import Message from '../../assets/image/home/rented-properties-card/message.png';

const {width} = Dimensions.get('window');

const DATA = [
  {
    id: 1,
    img: require('../../assets/image/home/rented-properties-card/rented-properties.png'),
    title: '3 BHK MarlBoro House',
    price: '₹15,000 / Mon',
    owner: 'Lucky',
  },
  {
    id: 2,
    img: require('../../assets/image/home/rented-properties-card/rented-properties.png'),
    title: '3 BHK MarlBoro House',
    price: '₹12,500 / Mon',
    owner: 'Lucky',
  },
];

export default function RentPropertyCards() {
  return (
    <View>
      <View style={styles.row}>
        <LinearGradient
          colors={['#FAF8FF', '#5E23DC']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.line}
        />
        <Text style={styles.title}>Properties on Rent</Text>
        <LinearGradient
          colors={['#8A38F5', '#FAF8FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.line}
        />
      </View>

      <FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingHorizontal: 18, marginTop: 14}}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={{height: '60%'}}>
              <Image source={item.img} style={styles.image} />

              <View style={styles.badge}>
                <Text style={styles.badgeText}>Recommended</Text>
              </View>
            </View>

            <View style={styles.bottom}>
              <View style={styles.propertyRow}>
                <Image
                  source={Location}
                  style={{width: 20, height: 20, marginRight: 4}}
                />
                <Text style={styles.propertyType}>Property Location (5KM)</Text>
              </View>

              <Text style={styles.cardTitle}>{item.title}</Text>

              <View style={styles.featuresPriceRow}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.featureCircle}>
                    <Image source={Bedroom} style={{width: 16, height: 16}} />
                  </View>
                  <Text style={styles.featureText}>3 Bedroom</Text>

                  <View style={[styles.featureCircle, {marginLeft: 12}]}>
                    <Image source={Bathroom} style={{width: 16, height: 16}} />
                  </View>
                  <Text style={styles.featureText}>2 Bathroom</Text>
                </View>

                <Text style={styles.price}>{item.price}</Text>
              </View>

              <View style={styles.ownerRow}>
                <View style={styles.ownerLeft}>
                  <View style={styles.ownerDp}>
                    <Image source={UserIcon} style={{width: 24, height: 24}} />
                  </View>
                  <View>
                    <Text style={styles.ownerName}>{item.owner}</Text>
                    <Text style={styles.ownerLabel}>Owner</Text>
                  </View>
                </View>

                <View style={styles.chatBtn}>
                  <Image
                    source={Message}
                    style={{width: 20, height: 20, tintColor: '#fff'}}
                  />
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 30,
  },
  line: {
    width: 73,
    height: 2,
    borderRadius: 2,
  },
  title: {
    fontFamily : "SegoeUI-Bold",
    fontSize: 16,
    lineHeight: 16,
    color: '#3F2D62',
  },
  card: {
    margin: 4,
    width: width * 0.8,
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 12,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.06)',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#8A38F5',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 10,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontFamily : "SegoeUI-Bold",
  },
  bottom: {
    height: '40%',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  propertyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  propertyType: {
    fontSize: 12,
    color: '#868686',
    fontFamily: 'Segoe UI',
  },
  dot: {
    width: 4,
    height: 4,
    backgroundColor: '#6F6F6F',
    borderRadius: 4,
    marginHorizontal: 6,
  },
  cardTitle: {
    fontSize: 13,
    fontFamily : "SegoeUI-Bold",
    color: '#000',
    marginTop: 4,
  },
  featuresPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  featuresRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  featureCircle: {
    width: 24,
    height: 24,
    borderRadius: 14,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureText: {
    fontSize: 12,
    marginLeft: 4,
    color: '#6F6F6F',
  },
  price: {
    fontSize: 12,
    fontFamily : "SegoeUI-Bold",
    marginTop: 2,
    fontFamily: 'Segoe UI',
  },
  ownerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  ownerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  ownerDp: {
    width: 30,
    height: 30,
  },
  ownerName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#868686',
  },
  ownerLabel: {
    fontSize: 8,
    fontWeight: '500',
    color: '#868686',
  },
  chatBtn: {
    width: 40,
    height: 30,
    backgroundColor: '#8A38F5',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
