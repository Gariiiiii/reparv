import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Location from '../../assets/image/home/rented-properties-card/location.png';
import Bedroom from '../../assets/image/home/rented-properties-card/bedroom.png';
import UserIcon from '../../assets/image/home/rented-properties-card/user-icon.png';
import Message from '../../assets/image/home/rented-properties-card/message.png';

const {width} = Dimensions.get('window');
const IMAGE_BASE_URL = 'https://api.reparv.in';

export default function RentPropertyCards() {
  const [flats, setFlats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFlats();
  }, []);

  const fetchFlats = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://api.reparv.in/frontend/all-properties',
      );
      const data = await response.json();

      const filtered = data.filter(
        item => item.status === 'Active' && item.approve === 'Approved',
      );

      setFlats(filtered);
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setLoading(false);
    }
  };

  const getImage = item => {
    try {
      if (item.frontView) {
        const parsed = JSON.parse(item.frontView);
        return IMAGE_BASE_URL + parsed[0];
      }
      return null;
    } catch {
      return null;
    }
  };

  const formatINR = value => {
    if (!value) return '0';
    return Number(value).toLocaleString('en-IN');
  };

  const renderItem = ({item}) => {
    const imageUri = getImage(item);

    return (
      <View style={styles.card}>
        {/* IMAGE */}
        <View style={styles.imageContainer}>
          {imageUri ? (
            <Image source={{uri: imageUri}} style={styles.image} />
          ) : (
            <View style={[styles.image, {backgroundColor: '#eee'}]} />
          )}

          <View style={styles.badge}>
            <Text style={styles.badgeText}>Recommended</Text>
          </View>
        </View>

        {/* CONTENT */}
        <View style={styles.bottom}>
          <View style={styles.propertyRow}>
            <Image source={Location} style={styles.icon} />
            <Text style={styles.propertyType}>
              {item.location} ({item.distanceFromCityCenter} KM)
            </Text>
          </View>

          <Text style={styles.cardTitle} numberOfLines={2}>
            {item.propertyName}
          </Text>

          {/* FEATURES + PRICE */}
          <View style={styles.featuresPriceRow}>
            <View style={styles.featureRow}>
              <View style={styles.featureCircle}>
                <Image source={Bedroom} style={styles.featureIcon} />
              </View>
              <Text style={styles.featureText}>
                {item?.propertyCategory || ''}
              </Text>
            </View>

            <Text style={styles.price}>
              ₹{formatINR(item?.totalOfferPrice)}
            </Text>
          </View>

       <View style={styles.line} />


          {/* OWNER */}
          <View style={styles.ownerRow}>
            <View style={styles.ownerLeft}>
              <View style={styles.ownerDp}>
                <Image source={UserIcon} style={{width: 24, height: 24}} />
              </View>
              <View>
                <Text style={styles.ownerName}>
                  {item.projectBy || ''}
                </Text>
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
    );
  };

  if (loading) {
    return (
      <ActivityIndicator size="large" style={{marginTop: 40}} color="#8A38F5" />
    );
  }

  return (
    <View>
      {/* TITLE */}
      <View style={styles.row}>
        <LinearGradient
          colors={['#FAF8FF', '#5E23DC']}
          style={styles.line}
        />
        <Text style={styles.title}>Explore Our Properties</Text>
        <LinearGradient
          colors={['#8A38F5', '#FAF8FF']}
          style={styles.line}
        />
      </View>

      {/* LIST */}
      <FlatList
        data={flats}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => String(item.propertyid)}
        contentContainerStyle={{paddingHorizontal: 18, marginTop: 14}}
        renderItem={renderItem}
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
    fontFamily: 'SegoeUI-Bold',
    fontSize: 16,
    color: '#3F2D62',
  },

  /* CARD */
  card: {
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 12,
    elevation: 3,
    overflow: 'hidden',
  },

  imageContainer: {
    height: 180,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#8A38F5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: 'SegoeUI-Bold',
  },

  bottom: {
    padding: 12,
  },

  propertyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 4,
  },
  propertyType: {
    fontSize: 12,
    color: '#868686',
  },

  cardTitle: {
    fontSize: 13,
    fontFamily: 'SegoeUI-Bold',
    color: '#000',
    marginTop: 4,
  },

  featuresPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  featureIcon: {
    width: 16,
    height: 16,
  },
  featureText: {
    fontSize: 12,
    color: '#6F6F6F',
  },

  price: {
    fontSize: 13,
    fontFamily: 'SegoeUI-Bold',
    color: '#000',
  },

  ownerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0,
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
  line: {
  width: '100%',
  height: 1,
  backgroundColor: '#D9D9D9',
  alignSelf: 'center',
  marginVertical: 12,
},

});
