import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import Layout from './src/screen/Layout';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />

    </ThemeProvider>
  );
}
