import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import BgImage from '../../assets/image/home/home-background.svg';

const {width} = Dimensions.get('window');

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <BgImage
        width={width}
        height={260}
        preserveAspectRatio="xMidYMid slice"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 260,
  },
});
