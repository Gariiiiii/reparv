// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   StatusBar,
// } from 'react-native';
// import {useNavigation} from '@react-navigation/native';

// import BackIcon from '../assets/image/new-property/back-icon.svg';
// import ArrowIcon from '../assets/image/onboarding/arrow.svg';
// import PropertyType from '../components/rent-property/PropertyType';
// import PropertyArea from '../components/rent-property/PropertyArea';
// import PriceDetails from '../components/rent-property/PriceDetails';
// import ContactDetails from '../components/rent-property/ContactDetails';
// import UploadImg from '../components/rent-property/UploadImg';
// import {SafeAreaView} from 'react-native-safe-area-context';

// export default function RentOldNewPropertyScreen() {
//   const navigation = useNavigation();
//   const [propertyType, setPropertyType] = useState(null);
//   const [showUpload, setShowUpload] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [area, setArea] = useState('');
//   const [sellingPrice, setSellingPrice] = useState('');
//   const [ownerName, setOwnerName] = useState('');
//   const [phone, setPhone] = useState('');

//   const validateStepOne = () => {
//     const newErrors = {};

//     if (!propertyType) newErrors.propertyType = 'Please select property type';
//     if (!area) newErrors.area = 'Property area is required';
//     if (!sellingPrice) newErrors.sellingPrice = 'Selling price is required';
//     if (!ownerName) newErrors.ownerName = 'Owner name is required';
//     if (!phone) {
//       newErrors.phone = 'Phone number is required';
//     } else if (phone.length !== 10) {
//       newErrors.phone = 'Phone number must be 10 digits';
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleButtonPress = () => {
//     if (!showUpload) {
//       const isValid = validateStepOne();
//       if (isValid) setShowUpload(true);
//     } else {
//       console.log('Submit pressed');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         backgroundColor="#FAF8FF"
//         barStyle="dark-content"
//         translucent={false}
//       />
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <BackIcon width={22} height={22} />
//         </TouchableOpacity>

//         <Text style={styles.headerTitle}>Add Basic Details</Text>

//         <View style={{width: 22}} />
//       </View>

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}>
//         {!showUpload && (
//           <>
//             <PropertyType
//               value={propertyType}
//               // onChange={setPropertyType}
//               onChange={val => {
//                 setPropertyType(val);
//                 setErrors(prev => ({...prev, propertyType: null}));
//               }}
//               error={errors.propertyType}
//             />
//             <PropertyArea
//               value={area}
//               onChange={text => {
//                 setArea(text);
//                 setErrors(prev => ({...prev, area: null}));
//               }}
//               error={errors.area}
//             />
//             <PriceDetails
//               sellingPrice={sellingPrice}
//               onChangeSelling={text => {
//                 setSellingPrice(text);
//                 setErrors(prev => ({...prev, sellingPrice: null}));
//               }}
//               error={errors.sellingPrice}
//             />
//             <ContactDetails
//               ownerName={ownerName}
//               phone={phone}
//               onOwnerChange={text => {
//                 setOwnerName(text);
//                 setErrors(prev => ({...prev, ownerName: null}));
//               }}
//               onPhoneChange={text => {
//                 setPhone(text);
//                 setErrors(prev => ({...prev, phone: null}));
//               }}
//               errors={{
//                 ownerName: errors.ownerName,
//                 phone: errors.phone,
//               }}
//             />

//             <TouchableOpacity
//               activeOpacity={0.9}
//               style={styles.button}
//               onPress={handleButtonPress}>
//               <View style={styles.buttonContent}>
//                 <Text style={styles.buttonText}>Continue to next Step</Text>
//                 <ArrowIcon width={18} height={18} style={styles.arrowIcon} />
//               </View>
//             </TouchableOpacity>
//           </>
//         )}

//         {showUpload && (
//           <View style={styles.uploadWrapper}>
//             <UploadImg />
//             <View style={styles.bottomContainer}>
//               <TouchableOpacity
//                 activeOpacity={0.9}
//                 style={styles.button}
//                 onPress={handleButtonPress}>
//                 <Text style={styles.buttonText}>Submit</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}

//         <Text style={styles.footerText}>
//           All fields marked with * are mandatory
//         </Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FAF8FF',
//   },
//   header: {
//     height: 56,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     justifyContent: 'space-between',
//   },
//   headerTitle: {
//     fontFamily: 'Segoe UI',
//     fontSize: 16,
//     fontFamily: 'SegoeUI-Bold',
//     color: '#000',
//   },
//   scrollContent: {
//     paddingBottom: 24,
//     gap: 16,
//     flexGrow: 1,
//   },
//   uploadWrapper: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },

//   bottomContainer: {
//     paddingVertical: 10,
//     alignItems: 'center',
//   },
//   button: {
//     alignSelf: 'center',
//     width: '80%',
//     height: 50,
//     backgroundColor: '#8A38F5',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     boxShadow: '0px 4px 11px 2px #8A38F540',
//   },
//   buttonContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontFamily: 'SegoeUI-Bold',
//   },
//   footerText: {
//     textAlign: 'center',
//     fontSize: 12,
//     color: '#8E8E8E',
//   },
// });

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ToastAndroid,
  TextInput,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {launchImageLibrary} from 'react-native-image-picker';

import BackIcon from '../assets/image/new-property/back-icon.svg';
import ArrowIcon from '../assets/image/onboarding/arrow.svg';

import OldPropertyType from '../components/old-property/OldPropertyType';
import OldPropertyArea from '../components/old-property/OldPropertyArea';
import OldPriceDetails from '../components/old-property/OldPriceDetails';
import OldContactDetails from '../components/old-property/OldContactDetails';
import OldUploadImg from '../components/old-property/OldUploadImg';
import LinearGradient from 'react-native-linear-gradient';

export default function RentOldNewPropertyScreen() {
  const navigation = useNavigation();

  const [showUpload, setShowUpload] = useState(false);
  const [errors, setErrors] = useState({});
  const [propertyName, setPropertyName] = useState('');
  const [propertyType, setPropertyType] = useState(null);
  const [area, setArea] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [imageFiles, setImageFiles] = useState({
    frontView: [],
    sideView: [],
    kitchenView: [],
    hallView: [],
    bedroomView: [],
    bathroomView: [],
    balconyView: [],
    nearestLandmark: [],
    developedAmenities: [],
  });

  /* ---------------- VALIDATION ---------------- */
  const validateStepOne = () => {
    const newErrors = {};

    if (!propertyType) newErrors.propertyType = 'Please select property type';
    if (!area) newErrors.area = 'Property area is required';
    if (!sellingPrice) newErrors.sellingPrice = 'Offer price is required';
    if (!totalPrice) newErrors.totalPrice = 'Total price is required ';
    if (!ownerName) newErrors.ownerName = 'Owner name is required';
    if (!phone || phone.length !== 10)
      newErrors.phone = 'Valid phone number required';
    if (!propertyName) newErrors.propertyName = 'Property name is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getTotalImageCount = () => {
    return Object.values(imageFiles).reduce((sum, arr) => sum + arr.length, 0);
  };

  const handleSubmit = async () => {
    if (getTotalImageCount() < 5) {
      ToastAndroid.show('Please upload at least 5 images', ToastAndroid.SHORT);
      return;
    }

    try {
      const formData = new FormData();

      formData.append('property_type', propertyType);
      formData.append('property_name', String(propertyName));
      formData.append('price', totalPrice);
      formData.append('ofprice', sellingPrice);
      formData.append('contact', String(phone));

      formData.append(
        'areas',
        JSON.stringify([{label: 'Built-up Area', value: area, unit: 'sq.ft.'}]),
      );

      Object.keys(imageFiles).forEach(key => {
        const filesArray = imageFiles[key];
        if (filesArray && filesArray.length > 0) {
          filesArray.forEach((file, index) => {
            formData.append(key, {
              uri: file.uri,
              type: file.type || 'image/jpeg',
              name: file.name || `${key}_${index}.jpg`,
            });
          });
        }
      });

      const res = await fetch(
        'https://api.reparv.in/customerapp/property/post',
        {
          method: 'POST',
          body: formData,
        },
      );

      const text = await res.text();
      console.log('RAW RESPONSE:', text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.log('Response is not JSON');
      }

      if (res.ok) {
        ToastAndroid.show('Property added successfully', ToastAndroid.SHORT);
        navigation.goBack();
      } else {
        ToastAndroid.show(
          data?.message || 'Property submission failed',
          ToastAndroid.LONG,
        );
      }
    } catch (err) {
      console.log('UPLOAD ERROR:', err);
      ToastAndroid.show('Network error', ToastAndroid.LONG);
    }
  };

  const handleButtonPress = () => {
    if (!showUpload) {
      if (validateStepOne()) setShowUpload(true);
    } else {
      handleSubmit();
    }
  };

  const handleBackPress = () => {
    if (showUpload) {
      // If on upload step, go back to details step
      setShowUpload(false);
    } else {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FAF8FF" barStyle="dark-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <BackIcon width={22} height={22} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Add Basic Details</Text>
        <View style={{width: 22}} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {!showUpload ? (
          <>
            <OldPropertyType
              value={propertyType}
              onChange={val => {
                setPropertyType(val);
                setErrors(prev => ({...prev, propertyType: null}));
              }}
              error={errors.propertyType}
            />

            <OldPropertyArea
              value={area}
              onChange={text => {
                setArea(text);
                setErrors(prev => ({...prev, area: null}));
              }}
              error={errors.area}
            />

            {/*Property Name */}
            <View
              style={{
                backgroundColor: 'white',
                paddingHorizontal: 24,
                paddingVertical: 16,
              }}>
              <View style={styles.headerRow}>
                <Text style={styles.heading}>Property Name</Text>
              </View>

              <View style={styles.inputWrapper}>
                <TextInput
                  placeholder="Enter Property Name"
                  placeholderTextColor="#9CA3AF"
                  style={styles.input}
                  value={propertyName}
                  onChangeText={v => {
                    setPropertyName(v);
                  }}
                />
              </View>
              {errors.propertyName && (
                <Text style={styles.error}>{errors.propertyName}</Text>
              )}
            </View>

            <OldPriceDetails
              sellingPrice={sellingPrice}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              onChangeSelling={text => {
                setSellingPrice(text);
                setErrors(prev => ({
                  ...prev,
                  totalPrice: null,
                  sellingPrice: null,
                }));
              }}
              error={errors.sellingPrice}
              error2={errors.totalPrice}
            />

            <OldContactDetails
              ownerName={ownerName}
              phone={phone}
              onOwnerChange={setOwnerName}
              onPhoneChange={setPhone}
              errors={errors}
            />

            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>Continue to next Step</Text>
                <ArrowIcon width={18} height={18} />
              </View>
            </TouchableOpacity>
          </>
        ) : (
          <>
            {/* IMAGE UPLOAD STEP */}
            <OldUploadImg
              imageFiles={imageFiles}
              setImageFiles={setImageFiles}
            />

            <View style={styles.nbuttonRow}>
              {/* Cancel Button */}
              <Pressable
                style={({pressed}) => [
                  styles.nbutton,
                  pressed && styles.pressed,
                ]}>
                <LinearGradient
                  colors={['#A855F7', '#8B5CF6']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.gradientButton}>
                  <Text style={styles.nbuttonText}>Cancel</Text>
                </LinearGradient>
              </Pressable>

              {/* Submit Button */}
              <Pressable
                style={({pressed}) => [
                  styles.nbutton,
                  pressed && styles.pressed,
                ]}
                onPress={handleButtonPress}>
                <LinearGradient
                  colors={['#34D399', '#10B981']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.gradientButton}>
                  <Text style={styles.nbuttonText}>Submit</Text>
                </LinearGradient>
              </Pressable>
            </View>
          </>
        )}

        <Text style={styles.footerText}>
          All fields marked with * are mandatory
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8FF',
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: 'SegoeUI-Bold',
    color: '#000',
  },
  scrollContent: {
    paddingBottom: 24,
    gap: 16,
    flexGrow: 1,
  },
  button: {
    alignSelf: 'center',
    width: '80%',
    height: 50,
    backgroundColor: '#8A38F5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SegoeUI-Bold',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#8E8E8E',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  heading: {
    fontSize: 16,
    fontFamily : "SegoeUI-Bold",
    color: '#000',
    fontFamily: 'Segoe UI',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  required: {
    color: '#E33629',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 12,
  },
  error: {
    color: '#E33629',
    fontSize: 12,
    marginVertical: 6,
  },
  nbuttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 12,
  },
  nbutton: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  gradientButton: {
    flex: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nbuttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SegoeUI-Bold',
  },
  pressed: {
    transform: [{scale: 0.95}],
    opacity: 0.85,
  },
});

