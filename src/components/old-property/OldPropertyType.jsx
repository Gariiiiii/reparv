import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import IndependentIcon from '../../assets/image/rent-oldnew-property/property-type/independent-house.png';
import IndependentFloorIcon from '../../assets/image/rent-oldnew-property/property-type/independent-floor.png';
import DuplexIcon from '../../assets/image/rent-oldnew-property/property-type/duplex.png';
import ResidentialPlotIcon from '../../assets/image/rent-oldnew-property/property-type/residential-plot.png';
import StudioIcon from '../../assets/image/rent-oldnew-property/property-type/studio.png';
import PenthouseIcon from '../../assets/image/rent-oldnew-property/property-type/pent-house.png';
import FlatIcon from '../../assets/image/rent-oldnew-property/property-type/flat.png';
import CommercialPlotIcon from '../../assets/image/rent-oldnew-property/property-type/commercial-plot.png';
import OfficeIcon from '../../assets/image/rent-oldnew-property/property-type/office-space.png';
import WarehouseIcon from '../../assets/image/rent-oldnew-property/property-type/warehouse.png';
import ShowroomsIcon from '../../assets/image/rent-oldnew-property/property-type/showrooms.png';
import ShopIcon from '../../assets/image/rent-oldnew-property/property-type/shops.png';

const PROPERTY_TYPES = [
  {id: 'independent', label: 'Independent House/Villa', icon: IndependentIcon},
  {
    id: 'independent_FLOOR',
    label: 'Independent Floor',
    icon: IndependentFloorIcon,
  },
  {id: 'duplex', label: 'Duplex', icon: DuplexIcon},
  {
    id: 'residential_plot',
    label: 'Residential Plot',
    icon: ResidentialPlotIcon,
  },
  {id: 'studio', label: 'Studio', icon: StudioIcon},
  {id: 'penthouse', label: 'Penthouse', icon: PenthouseIcon},
  {id: 'flat', label: 'Flat / Apartment', icon: FlatIcon},
  {id: 'commercial_plot', label: 'Commercial Plot', icon: CommercialPlotIcon},
  {id: 'office', label: 'Office Space', icon: OfficeIcon},
  {id: 'warehouse', label: 'Warehouse', icon: WarehouseIcon},
  {id: 'showrooms', label: 'Warehouse', icon: ShowroomsIcon},
  {id: 'shop', label: 'Shop', icon: ShopIcon},
];

export default function OldPropertyType({value, onChange, error}) {
  const renderItem = ({item}) => {
    const selected = value === item.id;

    return (
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => onChange(item.id)}
        style={[styles.card, selected && styles.cardActive]}>
        <Image
          source={item.icon}
          style={[styles.icon, selected && styles.iconActive]}
          resizeMode="contain"
        />

        <Text style={[styles.label, selected && styles.labelActive]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Property Type <Text style={styles.required}>*</Text>
      </Text>

      <FlatList
        key="three-columns"
        data={PROPERTY_TYPES}
        keyExtractor={item => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row}
        renderItem={renderItem}
        scrollEnabled={false}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 16,
    fontFamily : "SegoeUI-Bold",
    color: '#000',
    marginBottom: 12,
    fontFamily: 'Segoe UI',
  },
  required: {
    color: '#E33629',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    width: '30%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  cardActive: {
    borderColor: '#8A38F5',
    backgroundColor: '#8A38F5',
  },
  icon: {
    width: 26,
    height: 26,
    marginBottom: 8,
    tintColor: '#868686',
  },
  iconActive: {
    tintColor: '#fff',
  },
  label: {
    fontSize: 11,
    fontWeight: '500',
    color: '#868686',
    textAlign: 'center',
  },
  labelActive: {
    color: '#fff',
    fontFamily : "SegoeUI-Bold",
  },
  error: {
    color: '#E33629',
    fontSize: 12,
    marginVertical: 6,
  },
});
