import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Animated,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import BackIcon from '../../assets/image/login/arrow.svg';

const {height} = Dimensions.get('window');

export default function OtpModal({visible, onClose, phone, onEdit, onVerify}) {
  const slideAnim = useRef(new Animated.Value(height)).current;
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [show, setShow] = useState(visible);
  const [errorMsg, setErrorMsg] = useState('');
  const STATIC_OTP = '123456';

  useEffect(() => {
    if (visible) {
      setShow(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: height,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setShow(false));
    }
  }, [visible]);

  const handleChange = (text, index) => {
    let temp = [...otp];
    temp[index] = text;
    setOtp(temp);

    if (text !== '' && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <Modal transparent visible={show} animationType="none">
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.overlay} onPress={onClose} />

        <Animated.View
          style={[styles.container, {transform: [{translateY: slideAnim}]}]}>
          <View style={styles.headerRow}>
            <TouchableOpacity style={styles.backRow} onPress={onClose}>
              <BackIcon width={24} height={24} />
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.titleCenter}>Verify your Number</Text>
          </View>

          <View style={styles.subtitleRow}>
            <Text style={styles.subtitleText}>OTP Shared on {phone}</Text>

            <Text style={styles.edit} onPress={onEdit}>
              Edit
            </Text>
          </View>

          <Text style={styles.label}>Enter OTP</Text>

          <View style={styles.otpRow}>
            {Array.from({length: 6}).map((_, i) => (
              <TextInput
                key={i}
                ref={ref => (inputRefs.current[i] = ref)}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={otp[i]}
                onChangeText={text => handleChange(text, i)}
                onKeyPress={e => handleKeyPress(e, i)}
              />
            ))}
          </View>
          {errorMsg ? (
            <Text style={{color: 'red', fontSize: 8, marginTop: 3, textAlign: 'center'}}>
              {errorMsg}
            </Text>
          ) : null}

          <Text style={styles.resend}>Resend in 10 sec..</Text>

          <TouchableOpacity
            style={styles.verifyBtn}
            onPress={() => {
              const entered = otp.join('');

              if (entered === STATIC_OTP) {
                setErrorMsg('');
                onClose?.();
                onVerify?.();
              } else {
                setErrorMsg('Invalid OTP, please try again');
              }
            }}>
            <Text style={styles.verifyBtnText}>Verify</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'},
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 25,
    paddingHorizontal: 20,
    elevation: 10,
  },
  headerRow: {flexDirection: 'column', alignItems: 'center', marginBottom: 10},
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  backText: {fontSize: 16, fontWeight: '700', marginLeft: 8},
  titleCenter: {fontSize: 24, fontWeight: '700', marginTop: 8},
  subtitleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  subtitleText: {
    fontSize: 12,
    color: '#868686',
    textAlign: 'center',
    marginRight: 5,
  },
  edit: {
    color: '#5E23DC',
    fontWeight: '700',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  otpInput: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
  },
  resend: {fontSize: 12, color: '#868686', textAlign: 'right', marginTop: 5},
  verifyBtn: {
    backgroundColor: '#5E23DC',
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 15,
  },
  verifyBtnText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
  },
});
