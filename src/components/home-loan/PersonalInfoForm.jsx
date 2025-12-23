import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import ProfileIcon from '../../assets/image/bottom-navigator/profile.png';

export default function PersonalInfoForm() {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Personal Information</Text>

      <Text style={styles.label}>
        Full Name <Text style={styles.star}>*</Text>
      </Text>

      <View style={styles.inputWithIcon}>
        <TextInput
          placeholder="Enter Your full name"
          placeholderTextColor="#868686"
          style={styles.inputFlex}
        />
        <Image source={ProfileIcon} style={styles.profileIcon} />
      </View>

      <Text style={styles.label}>
        Date of Birth <Text style={styles.star}>*</Text>
      </Text>
      <TextInput
        placeholder="dd/mm/yy"
        placeholderTextColor="#868686"
        style={styles.input}
      />

      <Text style={styles.label}>
        Mobile Number <Text style={styles.star}>*</Text>
      </Text>

      <View style={styles.phoneRow}>
        <Text style={styles.code}>+91</Text>
        <View style={styles.divider} />
        <TextInput
          placeholder="Enter 10-digit mobile number"
          placeholderTextColor="#868686"
          keyboardType="number-pad"
          maxLength={10}
          style={styles.phoneInput}
        />
      </View>

      <Text style={styles.helper}>
        we'll send an OTP to verify this Number
      </Text>

      <Text style={styles.label}>
        Email Address <Text style={styles.star}>*</Text>
      </Text>
      <TextInput
        placeholder="Enter Your email address"
        placeholderTextColor="#868686"
        style={styles.input}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 16,
    marginBottom: 4,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#B8B8B8',
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  star: {
    color: '#E33629',
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    paddingHorizontal: 14,
    marginBottom: 14,
  },
  inputFlex: {
    flex: 1,
    color: '#000',
  },
  profileIcon: {
    width: 20,
    height: 20,
    tintColor: '#868686',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    paddingHorizontal: 14,
    marginBottom: 14,
    color: '#000',
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 12,
  },
  code: {
    fontSize: 16,
    marginRight: 8,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: '#D1D5DB',
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
    color: '#000',
  },
  helper: {
    fontSize: 12,
    color: '#868686',
    marginBottom: 14,
    marginTop: 6,
  },
});
