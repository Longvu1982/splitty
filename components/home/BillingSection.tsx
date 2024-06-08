import { View, Text } from 'react-native';
import React from 'react';
import OweCard from '../OweCard';
import { OweType } from '@/utils/models/common.model';

const BillingSection = () => {
  return (
    <View className="px-6">
      <View className="flex-row gap-2">
        <View className="bg-primary rounded-2xl py-5 px-4 flex-1">
          <Text className="text-white text-2xl font-semibold mb-2">$567.58</Text>
          <Text className="text-white">You Owe</Text>
        </View>
        <View className="bg-primary rounded-2xl py-5 px-4 flex-1">
          <Text className="text-white text-2xl font-semibold mb-2">$567.58</Text>
          <Text className="text-white">You Owe</Text>
        </View>
      </View>
      <View className="py-3">
        <OweCard ownType={OweType.ownYou} billingType="hi" />
        <OweCard ownType={OweType.youOwn} billingType="hi" />
      </View>
    </View>
  );
};

export default BillingSection;
