import React, {useCallback} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  BackHandler,
  StatusBar,
} from 'react-native';
import HomeHeader from '../components/home/HomeHeader';
import ActionCards from '../components/home/ActionCards';
import RentProperty from '../components/home/RentProperty';
import HomeLoan from '../components/home/HomeLoan';
import {useFocusEffect} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen() {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => {
        subscription.remove();
      };
    }, []),
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#4a2c6a"
        barStyle="light-content"
        translucent={false}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <ActionCards />
        <RentProperty />
        <HomeLoan />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8FF',
  },
});
