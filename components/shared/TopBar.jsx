import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const TopBar = ({ title, onBackPress }) => (
  <SafeAreaView style={styles.container}>
    <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
      <Text style={styles.backButtonText}>{'< Back'}</Text>
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingHorizontal: 10,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    paddingLeft: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TopBar;