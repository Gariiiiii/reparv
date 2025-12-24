import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import BackIcon from '../assets/image/new-property/back-icon.svg';
import {useNavigation} from '@react-navigation/native';
import LoanStepIndicator from '../components/home-loan/LoanStepIndicator';
import PersonalInfoForm from '../components/home-loan/PersonalInfoForm';
import JobIcon from '../assets/image/home-loan/job.png';
import BusinessIcon from '../assets/image/home-loan/business.png';
import UploadIcon from '../assets/image/rent-oldnew-property/lock.png';
import ArrowIcon from '../assets/image/onboarding/arrow.svg';

import {Image} from 'react-native';
import AddressInformationForm from '../components/home-loan/AddressInfoForm';
import UploadDocumentsForm from '../components/home-loan/UploadDocForm';
import UploadDocForm from '../components/home-loan/UploadDocForm';
import {SafeAreaView} from 'react-native-safe-area-context';

const LoanTabs = ({active, onChange}) => {
  return (
    <View style={styles.tabContainer}>
      {/* JOB TAB */}
      <TouchableOpacity
        style={[styles.tab, active === 'job' && styles.activeTab]}
        onPress={() => onChange('job')}>
        <View style={styles.tabContent}>
          <Image
            source={JobIcon}
            style={[
              styles.tabIcon,
              {tintColor: active === 'job' ? '#FFFFFF' : '#000000'},
            ]}
          />
          <Text
            style={[styles.tabText, active === 'job' && styles.activeTabText]}>
            Job
          </Text>
        </View>
      </TouchableOpacity>

      {/* BUSINESS TAB */}
      <TouchableOpacity
        style={[styles.tab, active === 'business' && styles.activeTab]}
        onPress={() => onChange('business')}>
        <View style={styles.tabContent}>
          <Image
            source={BusinessIcon}
            style={[
              styles.tabIcon,
              {tintColor: active === 'business' ? '#FFFFFF' : '#000000'},
            ]}
          />
          <Text
            style={[
              styles.tabText,
              active === 'business' && styles.activeTabText,
            ]}>
            Business
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function HomeLoan() {
  const navigation = useNavigation();
  const [tab, setTab] = useState('job');
  const [step, setStep] = useState(1);

  const [personal, setPersonal] = useState({
    name: '',
    dob: '',
    phone: '',
    email: '',
  });

  const [address, setAddress] = useState({
    state: '',
    city: '',
    pincode: '',
  });

  const [docs, setDocs] = useState({
    pan: '',
    aadhaar: '',
  });

  const [errors, setErrors] = useState({});

  const handleContinue = () => {
    let e = {};

    if (step === 1) {
      if (!personal.name) e.name = 'Full name is required';
      if (!personal.dob) e.dob = 'DOB is required';
      if (personal.phone.length !== 10) e.phone = 'Enter valid mobile number';
      if (!/\S+@\S+\.\S+/.test(personal.email)) e.email = 'Enter valid email';
    }

    if (step === 2) {
      if (!address.state) e.state = 'State is required';
      if (!address.city) e.city = 'City is required';
      if (address.pincode.length !== 6) e.pincode = 'Enter valid pincode';
    }

    if (step === 3) {
      if (docs.pan.length !== 10) e.pan = 'Invalid PAN number';
      if (docs.aadhaar.length !== 12) e.aadhaar = 'Invalid Aadhaar number';
    }

    setErrors(e);

    if (Object.keys(e).length === 0) {
      if (step < 3) setStep(step + 1);
      else console.log('FINAL SUBMIT', {personal, address, docs});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#FAF8FF"
        barStyle="dark-content"
        translucent={false}
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={22} height={22} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Home Loan Application</Text>

        <View style={{width: 22}} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LoanStepIndicator step={step} />

        <LoanTabs active={tab} onChange={setTab} />

        {tab === 'job' ? (
          <>
            {/* {step === 1 && <PersonalInfoForm />}
            {step === 2 && <AddressInformationForm />}
            {step === 3 && <UploadDocumentsForm />} */}
            {step === 1 && (
              <PersonalInfoForm
                data={personal}
                setData={setPersonal}
                errors={errors}
              />
            )}

            {step === 2 && (
              <AddressInformationForm
                data={address}
                setData={setAddress}
                errors={errors}
              />
            )}

            {step === 3 && (
              <UploadDocForm data={docs} setData={setDocs} errors={errors} />
            )}
          </>
        ) : (
          <View style={styles.businessBox}>
            <Text style={styles.businessText}>
              Business form will be added here
            </Text>
          </View>
        )}

        {tab === 'job' && (
          <TouchableOpacity style={styles.cta} onPress={handleContinue}>
            <View style={styles.ctaContent}>
              <Text style={styles.ctaText}>
                {step < 3 ? 'Continue to next Step' : 'Submit Application'}
              </Text>
              <ArrowIcon width={20} height={20} />
            </View>
          </TouchableOpacity>
        )}

        <View style={styles.footerRow}>
          <Image source={UploadIcon} style={styles.footerIcon} />
          <Text style={styles.footerText}>
            Your information is secure and encrypted
          </Text>
        </View>
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
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'Segoe UI',
    fontSize: 16,
    fontFamily: 'SegoeUI-Bold',
    color: '#000',
  },
  tabContainer: {
    flexDirection: 'row',
    margin: 16,
    marginBottom: 0,
    backgroundColor: '#fff',
    borderRadius: 6,
    overflow: 'hidden',
    padding: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: '#8A38F5',
  },
  tabContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tabIcon: {
    width: 18,
    height: 18,
  },

  tabText: {
    fontFamily: 'SegoeUI-Bold',
    fontSize: 16,
    color: '#000',
  },
  activeTabText: {
    color: '#fff',
  },
  ctaContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  error: {
    color: '#E33629',
    fontSize: 12,
    marginBottom: 8,
  },
  cta: {
    height: 52,
    backgroundColor: '#7C3AED',
    borderRadius: 12,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SegoeUI-Bold',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    gap: 6,
  },
  footerIcon: {
    width: 16,
    height: 16,
    tintColor: '#868686',
  },
  footerText: {
    fontSize: 12,
    color: '#868686',
  },
  businessBox: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    height: 455,
  },
  businessText: {
    color: '#868686',
  },
});
