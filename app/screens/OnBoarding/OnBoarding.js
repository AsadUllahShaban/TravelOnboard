import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';

// export default function OnBoarding() {
const OnBoarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Onboarding Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
});

export default OnBoarding;
