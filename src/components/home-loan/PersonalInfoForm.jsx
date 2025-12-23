// import React from 'react';
// import { View, Text, StyleSheet, TextInput } from 'react-native';
// import ProfileIcon from '../../assets/image/bottom-navigator/profile.png';


// export default function PersonalInfoForm() {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.heading}>Personal Information</Text>

//       <Text style={styles.label}>Full Name *</Text>
//       <TextInput
//         placeholder="Enter Your full name"
//         placeholderTextColor="#868686"
//         style={styles.input}
//       />

//       <Text style={styles.label}>Date of Birth *</Text>
//       <TextInput
//         placeholder="dd/mm/yy"
//         placeholderTextColor="#868686"
//         style={styles.input}
//       />

//       <Text style={styles.label}>Mobile Number *</Text>
//       <View style={styles.phoneRow}>
//         <Text style={styles.code}>+91</Text>
//         <TextInput
//           placeholder="Enter 10-digit mobile number"
//           placeholderTextColor="#868686"
//           keyboardType="number-pad"
//           maxLength={10}
//           style={styles.phoneInput}
//         />
//       </View>
//       <Text style={styles.helper}>we’ll send an OTP to verify this Number</Text>

//       <Text style={styles.label}>Email Address *</Text>
//       <TextInput
//         placeholder="Enter Your email address"
//         placeholderTextColor="#868686"
//         style={styles.input}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#fff',
//     margin: 16,
//     padding: 16,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#B8B8B8',
//   },
//   heading: {
//     fontSize: 16,
//     fontWeight: '700',
//     marginBottom: 12,
//     fontFamily: 'Segoe UI',
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 4,
//   },
//   input: {
//     height: 48,
//     borderWidth: 1,
//     borderColor: '#D9D9D9',
//     borderRadius: 8,
//     paddingHorizontal: 14,
//     marginBottom: 14,
//     color: '#000',
//   },
//   phoneRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#D1D5DB',
//     borderRadius: 8,
//     height: 48,
//     paddingHorizontal: 12,
//   },
//   code: {
//     marginRight: 10,
//     fontWeight: '400',
//     fontSize: 16,
//   },
//   phoneInput: {
//     flex: 1,
//     color: '#000',
//   },
//   helper: {
//     fontSize: 12,
//     color: '#6B7280',
//     marginBottom: 14,
//     marginTop: 6,
//   },
// });


import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import ProfileIcon from '../../assets/image/bottom-navigator/profile.png';
import CalendarIcon from '../../assets/image/home-loan/calendar.png';

export default function PersonalInfoForm() {
  const [dob, setDob] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      const d = selectedDate;
      const formatted = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
      setDob(formatted);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Personal Information</Text>

      {/* FULL NAME */}
      <Text style={styles.label}>Full Name *</Text>
      <View style={styles.inputWithIcon}>
        <TextInput
          placeholder="Enter your full name"
          placeholderTextColor="#868686"
          style={styles.inputFlex}
        />
        <Image source={ProfileIcon} style={styles.rightIcon} />
      </View>

      {/* DOB */}
      <Text style={styles.label}>Date of Birth *</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.inputWithIcon}
        onPress={() => setShowPicker(true)}>
        <TextInput
          placeholder="dd/mm/yyyy"
          placeholderTextColor="#868686"
          style={styles.inputFlex}
          editable={false}
          value={dob}
        />
        <Image source={CalendarIcon} style={styles.rightIcon} />
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onDateChange}
        />
      )}

      {/* MOBILE NUMBER */}
      <Text style={styles.label}>Mobile Number *</Text>
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
        we’ll send an OTP to verify this number
      </Text>

      {/* EMAIL */}
      <Text style={styles.label}>Email Address *</Text>
      <TextInput
        placeholder="Enter your email address"
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

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    paddingHorizontal: 14,
    marginBottom: 14,
    color: '#000',
  },

  /* INPUT WITH RIGHT ICON */
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 14,
  },
  inputFlex: {
    flex: 1,
    color: '#000',
  },
  rightIcon: {
    width: 18,
    height: 18,
    tintColor: '#868686',
  },

  /* PHONE */
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 12,
  },
  code: {
    fontSize: 16,
    color: '#000',
  },
  divider: {
    width: 1,
    height: 28,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 10,
  },
  phoneInput: {
    flex: 1,
    color: '#000',
  },

  helper: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 14,
    marginTop: 6,
  },
});
