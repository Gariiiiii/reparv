import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import UploadIcon from '../../assets/image/rent-oldnew-property/img-upload.png';

const MAX_LENGTH = 5000;

export default function OldUploadImg({images = [], onImagePicked}) {
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleChange = text => {
    if (text.length > MAX_LENGTH) {
      setError('Property description cannot exceed 5000 characters');
    } else {
      setError('');
    }
    setDescription(text);
  };

  /*IMAGE PICKER (FIXED) */
  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
      },
      response => {
        if (response.didCancel) return;
        if (response.errorCode) {
          console.log('Picker Error:', response.errorMessage);
          return;
        }

        const asset = response.assets?.[0];
        if (!asset) return;

        onImagePicked({
          uri: asset.uri,
          name: asset.fileName || 'property.jpg',
          type: asset.type || 'image/jpeg',
        });
      },
    );
  };

  const hasImage = images.length > 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Property Photos</Text>

      <View style={styles.uploadBox}>
        {hasImage ? (
          <>
            <Image source={{uri: images[0].uri}} style={styles.previewImage} />

            <TouchableOpacity
              style={[styles.uploadBtn, {marginTop: 12}]}
              onPress={pickImage}
            >
              <Text style={styles.uploadBtnText}>Change Photo</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Image source={UploadIcon} style={styles.icon} />

            <Text style={styles.addText}>
              <Text style={styles.plus}>＋ </Text>
              Add at least 1 Photo
            </Text>

            <Text style={styles.subText}>Drop your Photos here</Text>

            <Text style={styles.metaText}>
              Max Size 10MB · Format: png, jpg, jpeg, webp
            </Text>

            <TouchableOpacity style={styles.uploadBtn} onPress={pickImage}>
              <Text style={styles.uploadBtnText}>Upload Photos</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <Text style={[styles.title, {marginTop: 16}]}>
        Add Additional information{' '}
        <Text style={styles.optional}>(Optional)</Text>
      </Text>

      <View
        style={[
          styles.textAreaWrapper,
          error && {borderColor: '#E33629'},
        ]}
      >
        <TextInput
          placeholder="Property Description..........."
          placeholderTextColor="#D9D9D9"
          multiline
          maxLength={MAX_LENGTH}
          style={styles.textArea}
          value={description}
          onChangeText={handleChange}
        />

        <Text style={styles.counter}>
          {description.length}/{MAX_LENGTH}
        </Text>
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontFamily: 'SegoeUI-Bold',
    color: '#000',
    marginBottom: 12,
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: '#868686',
    borderRadius: 8,
    backgroundColor: '#FAF8FF',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  icon: {
    width: 42,
    height: 32,
    marginBottom: 12,
    tintColor: '#8A38F5',
  },
  previewImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  addText: {
    fontSize: 14,
    fontFamily: 'SegoeUI-Bold',
    color: '#8A38F5',
    marginBottom: 6,
  },
  plus: {
    fontSize: 18,
    fontFamily: 'SegoeUI-Bold',
  },
  subText: {
    fontSize: 12,
    color: '#868686',
    marginBottom: 8,
  },
  metaText: {
    fontSize: 12,
    color: '#868686',
    textAlign: 'center',
    marginBottom: 16,
  },
  uploadBtn: {
    paddingHorizontal: 28,
    height: 36,
    backgroundColor: '#8A38F5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  uploadBtnText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'SegoeUI-Bold',
  },
  optional: {
    fontSize: 14,
    color: '#868686',
  },
  textAreaWrapper: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    padding: 12,
    minHeight: 150,
    backgroundColor: '#fff',
  },
  textArea: {
    fontSize: 14,
    color: '#000',
    textAlignVertical: 'top',
    flex: 1,
  },
  counter: {
    fontSize: 12,
    color: '#868686',
    textAlign: 'right',
    marginTop: 6,
  },
  error: {
    color: '#E33629',
    fontSize: 12,
    marginTop: 6,
  },
});
