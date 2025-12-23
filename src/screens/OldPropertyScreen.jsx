import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BackIcon from '../assets/image/new-property/back-icon.svg';
import ArrowIcon from '../assets/image/onboarding/arrow.svg';
import OldPropertyType from '../components/old-property/OldPropertyType';
import OldPropertyArea from '../components/old-property/OldPropertyArea';
import OldPriceDetails from '../components/old-property/OldPriceDetails';
import OldContactDetails from '../components/old-property/OldContactDetails';
import OldUploadImg from '../components/old-property/OldUploadImg';

export default function OldPropertyScreen() {
  const navigation = useNavigation();
  const [propertyType, setPropertyType] = useState(null);
  const [showUpload, setShowUpload] = useState(false);
  const [errors, setErrors] = useState({});
  const [area, setArea] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');

  const validateStepOne = () => {
    const newErrors = {};

    if (!propertyType) newErrors.propertyType = 'Please select property type';
    if (!area) newErrors.area = 'Property area is required';
    if (!sellingPrice) newErrors.sellingPrice = 'Selling price is required';
    if (!ownerName) newErrors.ownerName = 'Owner name is required';
    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (phone.length !== 10) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleButtonPress = () => {
    if (!showUpload) {
      const isValid = validateStepOne();
      if (isValid) setShowUpload(true);
    } else {
      console.log('Submit pressed');
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={22} height={22} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Add Basic Details</Text>

        <View style={{width: 22}} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {!showUpload && (
          <>
            <OldPropertyType
              value={propertyType}
              // onChange={setPropertyType}
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
            <OldPriceDetails
              sellingPrice={sellingPrice}
              onChangeSelling={text => {
                setSellingPrice(text);
                setErrors(prev => ({...prev, sellingPrice: null}));
              }}
              error={errors.sellingPrice}
            />
            <OldContactDetails
              ownerName={ownerName}
              phone={phone}
              onOwnerChange={text => {
                setOwnerName(text);
                setErrors(prev => ({...prev, ownerName: null}));
              }}
              onPhoneChange={text => {
                setPhone(text);
                setErrors(prev => ({...prev, phone: null}));
              }}
              errors={{
                ownerName: errors.ownerName,
                phone: errors.phone,
              }}
            />

            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.button}
              onPress={handleButtonPress}>
              <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>Continue to next Step</Text>
                <ArrowIcon width={18} height={18} style={styles.arrowIcon} />
              </View>
            </TouchableOpacity>
          </>
        )}

        {showUpload && (
          <View style={styles.uploadWrapper}>
            <OldUploadImg />
            <View style={styles.bottomContainer}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.button}
                onPress={handleButtonPress}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <Text style={styles.footerText}>
          All fields marked with * are mandatory
        </Text>
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
  scrollContent: {
    paddingBottom: 24,
    gap: 16,
    flexGrow: 1,
  },
  uploadWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },

  bottomContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
    width: '80%',
    height: 50,
    backgroundColor: '#8A38F5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 11px 2px #8A38F540',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#8E8E8E',
  },
});
