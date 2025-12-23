import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import BackIcon from '../assets/image/new-property/back-icon.svg';
import {useNavigation} from '@react-navigation/native';
import LoanStepIndicator from '../components/home-loan/LoanStepIndicator';
import PersonalInfoForm from '../components/home-loan/PersonalInfoForm';
import JobIcon from '../assets/image/home-loan/job.png';
import BusinessIcon from '../assets/image/home-loan/business.png';

import {Image} from 'react-native';

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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={22} height={22} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Home Loan Application</Text>

        <View style={{width: 22}} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LoanStepIndicator step={1} />

        <LoanTabs active={tab} onChange={setTab} />

        {tab === 'job' ? (
          <PersonalInfoForm />
        ) : (
          <View style={styles.businessBox}>
            <Text style={styles.businessText}>
              Business form will be added here
            </Text>
          </View>
        )}

        <TouchableOpacity style={styles.cta}>
          <Text style={styles.ctaText}>Continue to next Step →</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          🔒 Your information is secure and encrypted
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
    backgroundColor: '#FFFFFF',
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
  tabContainer: {
    flexDirection: 'row',
    margin: 16,
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
    fontWeight: '700',
    fontSize: 16,
    color: '#000',
  },
  activeTabText: {
    color: '#fff',
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
    fontWeight: '700',
  },
  footer: {
    textAlign: 'center',
    fontSize: 12,
    color: '#6B7280',
    marginVertical: 16,
  },
  businessBox: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  businessText: {
    color: '#6B7280',
  },
});
