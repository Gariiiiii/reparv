import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ToastAndroid,
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

export default function OldPropertyScreen() {
  const navigation = useNavigation();

  const [showUpload, setShowUpload] = useState(false);
  const [errors, setErrors] = useState({});

  const [propertyType, setPropertyType] = useState(null);
  const [area, setArea] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');

  //  ONLY ONE IMAGE STATE
  const [images, setImages] = useState([]);

  /* ---------------- VALIDATION ---------------- */
  const validateStepOne = () => {
    const newErrors = {};

    if (!propertyType) newErrors.propertyType = 'Please select property type';
    if (!area) newErrors.area = 'Property area is required';
    if (!sellingPrice) newErrors.sellingPrice = 'Selling price is required';
    if (!ownerName) newErrors.ownerName = 'Owner name is required';
    if (!phone || phone.length !== 10)
      newErrors.phone = 'Valid phone number required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



// IMAGE FROM CHILD
const handleImagePicked = image => {
  setImages([image]); // only one image
};



  const handleSubmit = async () => {
  if (images.length === 0) {
    ToastAndroid.show('Please upload one image', ToastAndroid.SHORT);
    return;
  }

  try {
    const formData = new FormData();

    formData.append('property_type', propertyType);
    formData.append('price', String(sellingPrice));
    formData.append('contact', String(phone));

    formData.append(
      'areas',
      JSON.stringify([
        { label: 'Built-up Area', value: area, unit: 'sq.ft.' },
      ]),
    );

    //  Image
    formData.append('frontView', {
      uri: images[0].uri,
      name: images[0].name || 'property.jpg',
      type: images[0].type || 'image/jpeg',
    });

    const res = await fetch(
  'http://10.16.33.25:3000/customerapp/property/post',
  {
    method: 'POST',
    body: formData,
  }
);

// 🔥 READ AS TEXT FIRST
const text = await res.text();
console.log('RAW RESPONSE:', text);

// Try JSON only if valid
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


  /* ---------------- BUTTON HANDLER ---------------- */
  const handleButtonPress = () => {
    if (!showUpload) {
      if (validateStepOne()) setShowUpload(true);
    } else {
      handleSubmit();
    }
  };

  const handleBackStep = () => {
  setShowUpload(false);
};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FAF8FF" barStyle="dark-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={22} height={22} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Add Basic Details</Text>
        <View style={{width: 22}} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
       {showUpload ? (
  <>
    {/* IMAGE UPLOAD STEP */}
    <OldUploadImg
      images={images}
      onImagePicked={handleImagePicked}
    />

    {/* BUTTON ROW */}
    <View style={styles.uploadButtonsRow}>
      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={handleBackStep}
      >
        <Text style={[styles.buttonText, {color: '#8A38F5'}]}>
          Back
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.submitButton]}
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  </>
) : (


        <Text style={styles.footerText}>
          All fields marked with * are mandatory
        </Text>)}
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
  uploadButtonsRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignSelf: 'center',
  width: '90%',
  gap: 12,
},

backButton: {
  flex: 1,
  backgroundColor: '#FFF',
  borderWidth: 1,
  borderColor: '#8A38F5',
},

submitButton: {
  flex: 1,
  backgroundColor: '#8A38F5',
},

});
