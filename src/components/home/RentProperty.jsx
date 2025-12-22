import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

import RentPropertyIllustration from '../../assets/image/home/property-on-rent.png';
import ArrowIcon from '../../assets/image/home/actioncard/arrow.svg';
import LinearGradient from 'react-native-linear-gradient';
import RentPropertyCards from './RentPropertyCards';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

export default function RentProperty() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.card}>
        <View style={styles.leftWrap}>
          <Image
            source={RentPropertyIllustration}
            style={styles.leftImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>Property On Rent</Text>

            <View style={styles.arrowCircle}>
              <ArrowIcon width={18} height={18} />
            </View>
          </View>

          <Text style={styles.sub}>Verified Listings • Easy Move-In</Text>

          <LinearGradient
            colors={['#8A38F5', '#FDFEFE']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.tag}>
            <Text style={styles.tagText}>Zero Brokerage Options</Text>
          </LinearGradient>

          <TouchableOpacity
            style={styles.ctaBtn}
            onPress={() => navigation.navigate('RentProperty')}>
            <Text style={styles.ctaText}>Find Rental Property</Text>
          </TouchableOpacity>
        </View>
      </View>
      <RentPropertyCards />
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width - 32,
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: '#FDFEFE',
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingVertical: 16,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    marginTop: 10,
    alignItems: 'center',
    fontFamily: 'Segoe UI',
  },
  leftWrap: {
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftImage: {
    width: 120,
    height: 150,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3F2D62',
  },
  arrowCircle: {
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: '#F1EAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sub: {
    color: '#868686',
    marginTop: 4,
    fontSize: 12,
  },
  tag: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 10,
  },
  tagText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
  ctaBtn: {
    backgroundColor: '#5E23DC',
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 14,
    alignItems: 'center',
  },
  ctaText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 12,
  },
});
