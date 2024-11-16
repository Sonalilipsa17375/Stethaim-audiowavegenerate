import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function HomeScreen() {
  const [audioFile, setAudioFile] = useState(null);

  const pickAudioFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'audio/*', 
      });

      if (result.type === 'success') {
        setAudioFile(result);
      }
    } catch (error) {
      console.error('Error picking audio file:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an Audio File" onPress={pickAudioFile} />
      {audioFile && (
        <View style={styles.audioDetails}>
          <Text>File Name: {audioFile.name}</Text>
          <Text>File Size: {audioFile.size} bytes</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  audioDetails: {
    marginTop: 16,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
});
