// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
//   Image,
// } from 'react-native';

// /* ICONS (PNG / SVG dono chalega) */
// import IndependentIcon from '../assets/image/rent-oldnew-property/property-type/independent-house.png';
// import IndependentFloorIcon from '../assets/image/rent-oldnew-property/property-type/independent-floor.png';
// import DuplexIcon from '../assets/image/rent-oldnew-property/property-type/duplex.png';
// import ResidentialPlotIcon from '../assets/image/rent-oldnew-property/property-type/residential-plot.png';
// import StudioIcon from '../assets/image/rent-oldnew-property/property-type/studio.png';
// import PenthouseIcon from '../assets/image/rent-oldnew-property/property-type/pent-house.png';
// import FlatIcon from '../assets/image/rent-oldnew-property/property-type/flat.png';
// import CommercialPlotIcon from '../assets/image/rent-oldnew-property/property-type/commercial-plot.png';
// import OfficeIcon from '../assets/image/rent-oldnew-property/property-type/office-space.png';
// import WarehouseIcon from '../assets/image/rent-oldnew-property/property-type/warehouse.png';
// import ShowroomsIcon from '../assets/image/rent-oldnew-property/property-type/showrooms.png';
// import ShopIcon from '../assets/image/rent-oldnew-property/property-type/shop.png';

// const PROPERTY_TYPES = [
//   {id: 'independent', label: 'Independent House/Villa', icon: IndependentIcon},
//   {
//     id: 'independent_FLOOR',
//     label: 'Independent Floor',
//     icon: IndependentFloorIcon,
//   },
//   {id: 'duplex', label: 'Duplex', icon: DuplexIcon},
//   {
//     id: 'residential_plot',
//     label: 'Residential Plot',
//     icon: ResidentialPlotIcon,
//   },
//   {id: 'studio', label: 'Studio', icon: StudioIcon},
//   {id: 'penthouse', label: 'Penthouse', icon: PenthouseIcon},
//   {id: 'flat', label: 'Flat / Apartment', icon: FlatIcon},
//   {id: 'commercial_plot', label: 'Commercial Plot', icon: CommercialPlotIcon},
//   {id: 'office', label: 'Office Space', icon: OfficeIcon},
//   {id: 'warehouse', label: 'Warehouse', icon: WarehouseIcon},
//   {id: 'showrooms', label: 'Warehouse', icon: WarehouseIcon},
//   {id: 'shop', label: 'Shop', icon: ShopIcon},
// ];

// export default function PropertyTypeSelector({value, onChange}) {
//   const renderItem = ({item}) => {
//     const selected = value === item.id;

//     return (
//       <TouchableOpacity
//         activeOpacity={0.85}
//         onPress={() => onChange(item.id)}
//         style={[styles.card, selected && styles.cardActive]}>
//         <Image
//           source={item.icon}
//           style={[styles.icon, selected && styles.iconActive]}
//           resizeMode="contain"
//         />

//         <Text style={[styles.label, selected && styles.labelActive]}>
//           {item.label}
//         </Text>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Property Type *</Text>

//       <FlatList
//         data={PROPERTY_TYPES}
//         keyExtractor={item => item.id}
//         numColumns={2}
//         columnWrapperStyle={styles.row}
//         renderItem={renderItem}
//         scrollEnabled={false}
//       />
//     </View>
//   );
// }

// /* ---------------- STYLES ---------------- */

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 16,
//     marginTop: 16,
//   },

//   heading: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: '#111827',
//     marginBottom: 12,
//   },

//   row: {
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },

//   card: {
//     width: '48%',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 14,
//     paddingHorizontal: 10,
//     alignItems: 'center',
//   },

//   cardActive: {
//     borderColor: '#6D28D9',
//     backgroundColor: '#F3EDFF',
//   },

//   icon: {
//     width: 26,
//     height: 26,
//     marginBottom: 8,
//     tintColor: '#6B7280',
//   },

//   iconActive: {
//     tintColor: '#6D28D9',
//   },

//   label: {
//     fontSize: 11,
//     fontWeight: '500',
//     color: '#6B7280',
//     textAlign: 'center',
//   },

//   labelActive: {
//     color: '#6D28D9',
//     fontWeight: '600',
//   },
// });
