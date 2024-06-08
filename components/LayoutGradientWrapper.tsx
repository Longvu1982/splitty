import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

const LayoutGradientWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <LinearGradient colors={['#ff714b', '#ebbe61']} className="h-screen w-full">
      <ScrollView className="h-screen">
        <SafeAreaView className="h-screen">{children}</SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
};

export default LayoutGradientWrapper;
