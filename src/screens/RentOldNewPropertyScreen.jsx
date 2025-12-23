import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BackIcon from '../assets/image/new-property/back-icon.svg';
import PropertyType from '../components/rent-property/PropertyType';

export default function RentOldNewPropertyScreen() {
  const navigation = useNavigation();
  // const [propertyType, setPropertyType] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={22} height={22} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Add Basic Details</Text>

        <View style={{width: 22}} />
      </View>

      {/* <PropertyType value={propertyType} onChange={setPropertyType} /> */}

      {/* DEBUG / CHECK */}
      {/* {propertyType && (
        <Text style={{margin: 16}}>Selected: {propertyType}</Text>
      )} */}
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
});
