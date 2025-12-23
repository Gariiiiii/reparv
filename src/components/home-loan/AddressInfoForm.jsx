import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const STATE_DATA = [
  {label: 'Maharashtra', value: 'Maharashtra'},
  {label: 'Gujarat', value: 'Gujarat'},
  {label: 'Rajasthan', value: 'Rajasthan'},
  {label: 'Delhi', value: 'Delhi'},
  {label: 'Karnataka', value: 'Karnataka'},
];

const CITY_DATA = {
  Maharashtra: [
    {label: 'Mumbai', value: 'Mumbai'},
    {label: 'Pune', value: 'Pune'},
    {label: 'Nagpur', value: 'Nagpur'},
    {label: 'Nashik', value: 'Nashik'},
    {label: 'Thane', value: 'Thane'},
  ],
  Gujarat: [
    {label: 'Ahmedabad', value: 'Ahmedabad'},
    {label: 'Surat', value: 'Surat'},
    {label: 'Vadodara', value: 'Vadodara'},
    {label: 'Rajkot', value: 'Rajkot'},
    {label: 'Bhavnagar', value: 'Bhavnagar'},
  ],
  Rajasthan: [
    {label: 'Jaipur', value: 'Jaipur'},
    {label: 'Jodhpur', value: 'Jodhpur'},
    {label: 'Udaipur', value: 'Udaipur'},
    {label: 'Kota', value: 'Kota'},
    {label: 'Ajmer', value: 'Ajmer'},
  ],
  Delhi: [
    {label: 'New Delhi', value: 'New Delhi'},
    {label: 'Dwarka', value: 'Dwarka'},
    {label: 'Rohini', value: 'Rohini'},
    {label: 'Saket', value: 'Saket'},
    {label: 'Karol Bagh', value: 'Karol Bagh'},
  ],
  Karnataka: [
    {label: 'Bengaluru', value: 'Bengaluru'},
    {label: 'Mysuru', value: 'Mysuru'},
    {label: 'Mangaluru', value: 'Mangaluru'},
    {label: 'Hubli', value: 'Hubli'},
    {label: 'Belgaum', value: 'Belgaum'},
  ],
};

export default function AddressInformationForm() {
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Address Information</Text>

      <Text style={styles.label}>
        State <Text style={styles.star}>*</Text>
      </Text>
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.dropdownContainer}
        itemContainerStyle={styles.itemContainer}
        itemTextStyle={styles.itemText}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.selectedText}
        data={STATE_DATA}
        labelField="label"
        valueField="value"
        placeholder="Select Your State"
        value={state}
        onChange={item => {
          setState(item.value);
          setCity(null);
        }}
      />

      <Text style={styles.label}>
        City <Text style={styles.star}>*</Text>
      </Text>
      <Dropdown
        style={[styles.dropdown, !state && styles.disabledDropdown]}
        containerStyle={styles.dropdownContainer}
        itemContainerStyle={styles.itemContainer}
        itemTextStyle={styles.itemText}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.selectedText}
        data={state ? CITY_DATA[state] : []}
        labelField="label"
        valueField="value"
        placeholder={state ? 'Select City' : 'Select State first'}
        value={city}
        disable={!state}
        onChange={item => setCity(item.value)}
      />

      <Text style={styles.label}>
        Pincode <Text style={styles.star}>*</Text>
      </Text>
      <TextInput
        placeholder="Enter 6-digit pincode"
        placeholderTextColor="#868686"
        keyboardType="number-pad"
        maxLength={6}
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
    height: 438,
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
  dropdown: {
    height: 48,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 14,
  },
  disabledDropdown: {
    backgroundColor: '#F9FAFB',
  },
  dropdownContainer: {
    maxHeight: 200,
    paddingVertical: 0, 
  },
  itemContainer: {
    paddingVertical: 0, 
    paddingHorizontal: 0,
  },
  itemText: {
    fontSize: 12,
    color: '#000',
  },
  placeholder: {
    fontSize: 14,
    color: '#D9D9D9',
  },
  selectedText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#000',
  },
});
