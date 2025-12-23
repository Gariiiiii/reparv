import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function LoanStepIndicator({step = 1}) {
  const Step = ({number, label, active}) => (
    <View style={styles.stepItem}>
      <View style={[styles.circle, active && styles.activeCircle]}>
        <Text style={[styles.circleText, active && styles.activeText]}>
          {number}
        </Text>
      </View>
      <Text style={[styles.label, active && styles.activeLabel]}>{label}</Text>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.line} />

      <View style={styles.container}>
        <Step number="1" label="Personal" active={step === 1} />
        <Step number="2" label="Address" active={step === 2} />
        <Step number="3" label="Documents" active={step === 3} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 24,
    marginTop: 16,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  stepItem: {
    alignItems: 'center',
    width: 70,
  },

  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  activeCircle: {
    backgroundColor: '#8A38F5',
  },

  circleText: {
    fontSize: 20,
    color: '#868686',
  },

  activeText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },

  label: {
    marginTop: 6,
    fontSize: 12,
    color: '#868686',
  },

  activeLabel: {
    color: '#8A38F5',
    fontWeight: '700',
  },

  line: {
    position: 'absolute',
    top: 25, 
    left: 60,
    right: 60,
    height: 1,
    backgroundColor: '#B8B8B8',
    zIndex: 1,
  },
});
