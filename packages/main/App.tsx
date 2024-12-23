import { Home } from "@example/package1";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={StyleSheet.absoluteFill}>
        <Home />
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}
