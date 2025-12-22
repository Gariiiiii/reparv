import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import HomeHeader from '../components/home/HomeHeader';
import ActionCards from '../components/home/ActionCards';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <ActionCards />
        <View style={{height: 600}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8FF',
  },
});
