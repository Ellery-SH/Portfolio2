import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import {styles} from './styles.js'




export const AppButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
  );
};

