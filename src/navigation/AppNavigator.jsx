import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import OldPropertyScreen from '../screens/OldPropertyScreen';
import NewPropertyScreen from '../screens/NewPropertyScreen';
import RentPropertyScreen from '../screens/RentPropertyScreen';
import ResalePropertyScreen from '../screens/ResalePropertyScreen';
import BottomTabNavigator from './BottomTabNavigator';
import RentOldNewPropertyScreen from '../screens/RentOldNewPropertyScreen';
import HomeLoan from '../screens/HomeLoan';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

        <Stack.Screen name="MainTabs" component={BottomTabNavigator} />

        <Stack.Screen name="OldProperty" component={OldPropertyScreen} />
        <Stack.Screen name="NewProperty" component={NewPropertyScreen} />
        <Stack.Screen
          name="RentOldNewProperty"
          component={RentOldNewPropertyScreen}
        />
        <Stack.Screen name="RentProperty" component={RentPropertyScreen} />
        <Stack.Screen name="ResaleProperty" component={ResalePropertyScreen} />
        <Stack.Screen name="HomeLoan" component={HomeLoan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
