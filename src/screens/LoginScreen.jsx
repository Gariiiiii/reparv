import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  Modal,
} from 'react-native';

import Bg1 from '../assets/image/login/login1.svg';
import Bg2 from '../assets/image/login/login2.svg';
import Bg3 from '../assets/image/login/login3.svg';
import Hyperbola from '../assets/image/login/hyperbola-shape.svg';
import Google from '../assets/image/login/devicon_google.svg';
import Whatsapp from '../assets/image/login/Whatsapp.svg';
import Logo from '../assets/image/login/logo.svg';
import DropdownIcon from '../assets/image/login/dropdown.svg';
import LinearGradient from 'react-native-linear-gradient';
import OtpModal from '../components/login/OtpModal';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    id: 1,
    image: Bg1,
    title: 'Buy Property with Confidence',
    smallText: 'Verified homes • Transparent pricing',
  },
  {
    id: 2,
    image: Bg2,
    title: 'Sell Your Property Faster',
    smallText: 'List • Connect • Close',
  },
  {
    id: 3,
    image: Bg3,
    title: 'Rent Made Simple',
    smallText: 'Homes • Shops • Offices',
  },
];

export default function LoginScreen() {
  const flatRef = useRef();
  const [index, setIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [otpVisible, setOtpVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [bottomVisible, setBottomVisible] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setInterval(() => {
      let nextIndex = (index + 1) % slides.length;
      setIndex(nextIndex);
      flatRef?.current?.scrollToIndex({animated: true, index: nextIndex});
    }, 3000);

    return () => clearInterval(timer);
  }, [index]);

  const breakTitle = text => {
    const words = text.split(' ');
    if (words.length <= 3) return text;
    return words.slice(0, 3).join(' ') + '\n' + words.slice(3).join(' ');
  };

  const handleLogin = () => {
    if (phoneNumber.trim().length !== 10) {
      setError('Please enter valid 10 digit phone number');
      return;
    }

    setError('');
    setOtpVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <FlatList
          ref={flatRef}
          data={slides}
          keyExtractor={item => item.id.toString()}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            const Bg = item.image;
            return (
              <View style={styles.slide}>
                <Bg
                  width={width}
                  height={height * 0.4}
                  preserveAspectRatio="xMidYMid slice"
                />
                <View style={styles.overlayText}>
                  <Text style={styles.title}>{breakTitle(item.title)}</Text>
                  <Text style={styles.smallText}>{item.smallText}</Text>
                  <View style={styles.dotsContainer}>
                    {slides.map((_, i) => (
                      <View
                        key={i}
                        style={[styles.dot, index === i && styles.activeDot]}
                      />
                    ))}
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>

      <Modal visible={bottomVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.bottomCardWrapper}>
            <Hyperbola
              width={width}
              height={height * 0.75}
              style={{position: 'absolute', top: 0}}
              preserveAspectRatio="xMidYMid slice"
            />

            <View style={styles.bottomCardContent}>
              <Logo width={84} height={35} />

              <Text style={styles.mainTitle}>
                Your <Text style={{color: '#000'}}>All In One</Text> property
                Solution
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '85%',
                  marginVertical: 12,
                }}>
                <LinearGradient
                  colors={['#FFFFFF', '#5E23DC']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={{flex: 1, height: 1}}
                />

                <Text style={[styles.loginText, {marginHorizontal: 10}]}>
                  Login or SignUp
                </Text>

                <LinearGradient
                  colors={['#5E23DC', '#FFFFFF']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={{flex: 1, height: 1}}
                />
              </View>

              <View style={styles.phoneWrapper}>
                <Text style={styles.label}>Phone Number</Text>
                <View style={styles.phoneRow}>
                  {/* <Text style={styles.country}>+91</Text> */}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 6,
                    }}>
                    <Text style={styles.country}>+91</Text>
                    <DropdownIcon
                      width={24}
                      height={24}
                      style={{marginLeft: 6}}
                    />
                  </View>

                  <TextInput
                    style={[styles.input, {fontSize: 20}]}
                    placeholder="Phone Number"
                    maxLength={10}
                    placeholderTextColor="#868686"
                    keyboardType="number-pad"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                  />
                </View>
              </View>

              {error ? (
                <Text style={{color: 'red', fontSize: 8, marginTop: 3}}>
                  {error}
                </Text>
              ) : null}

              <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginBtnText}>Login</Text>
              </TouchableOpacity>

              <OtpModal
                visible={otpVisible}
                onClose={() => setOtpVisible(false)}
                phone={phoneNumber}
                onEdit={() => setOtpVisible(false)}
                onVerify={() => {
                  setBottomVisible(false);
                  setOtpVisible(false);
                  navigation.navigate('MainTabs');
                }}
              />

              <Text style={styles.terms}>
                By Clicking above you agree to{' '}
                <Text style={styles.link}>Terms & Conditions</Text>
              </Text>

              <Text style={styles.or}>Or login with</Text>

              <View style={styles.socialRow}>
                <View style={styles.socialIconWrapper}>
                  <Google width={24} height={24} />
                </View>
                <View style={styles.socialIconWrapper}>
                  <Whatsapp width={24} height={24} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#321376'},
  topContainer: {height: '40%', width: '100%'},
  slide: {width, height: '100%', position: 'relative'},
  overlayText: {
    position: 'absolute',
    width: width,
    top: '50%',
    alignItems: 'flex-start',
    transform: [{translateY: -40}],
    paddingLeft: 28,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontFamily : "SegoeUI-Bold",
    width: '80%',
    lineHeight: 36,
  },
  smallText: {
    color: '#fff',
    fontSize: 16,
    fontFamily : "SegoeUI-Bold",
    marginTop: 6,
    width: '90%',
    lineHeight: 36,
  },
  dotsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  dot: {
    width: 19,
    height: 4,
    borderRadius: 7,
    backgroundColor: '#D9D9D9',
    marginRight: 6,
  },
  activeDot: {backgroundColor: '#6F00FF', width: 59},
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  bottomCardWrapper: {
    height: height * 0.55,
  },
  bottomCardContent: {flex: 1, paddingTop: 20, alignItems: 'center', gap: 4},
  mainTitle: {
    fontSize: 24,
    fontFamily : "SegoeUI-Bold",
    textAlign: 'center',
    lineHeight: 36,
    color: '#5E23DC',
    width: '70%',
  },
  loginText: {
    fontSize: 16,
    fontFamily : "SegoeUI-Bold",
    textAlign: 'center',
  },
  phoneWrapper: {
    width: '85%',
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#5E23DC',
  },
  label: {width: '85%', color: '#5E23DC', fontSize: 12},
  country: {
    fontSize: 20,
    marginRight: 10,
  },
  input: {flex: 1, fontSize: 12, color: '#868686'},

  loginBtn: {
    width: '85%',
    backgroundColor: '#5E23DC',
    padding: 14,
    borderRadius: 12,
    marginTop: 22,
  },
  loginBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily : "SegoeUI-Bold",
  },

  terms: {fontSize: 8, marginTop: 8, color: '#868686'},
  link: {color: '#6a1bff', fontFamily : "SegoeUI-Bold"},
  or: {fontSize: 8, marginTop: 8, color: '#868686'},
  socialRow: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    width: '50%',
    justifyContent: 'center',
    gap: 20,
  },
  socialIconWrapper: {
    borderWidth: 1,
    borderColor: '#B8B8B8',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
