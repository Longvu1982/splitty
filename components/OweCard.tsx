import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { OweType } from '@/utils/models/common.model';
import { cn } from '@/utils';

interface OweCardProps {
  ownType: OweType;
  billingType: string;
}

const OweCard: FC<OweCardProps> = ({ ownType, billingType }) => {
  const numberOfItems = 5;
  const width = 96;
  const avatarWidth = 36;
  const margin = Math.abs(width - numberOfItems * avatarWidth) / (numberOfItems - 1);

  console.log(margin);

  console.log(ownType);

  return (
    <View className="rounded-2xl bg-white p-3 mb-3">
      <View className="flex-row items-center justify-between">
        <View className="flex-row gap-2 items-center">
          <View className="rounded-full w-9 h-9 bg-blue-300" />
          <View>
            <Text className="text-[#444] font-semibold mb-1">Birthday House</Text>
            <Text className="text-xs opacity-75">Mar 24, 2023</Text>
          </View>
        </View>

        <Text className="font-semibold text-lg">$4508.32</Text>
      </View>
      <View className="border-b-[1px] border-[#ccc] opacity-30 my-3" />
      <View className="flex-row items-center gap-3">
        <View className="relative flex-row w-24 grid">
          <View className="border-[1px] border-white  rounded-full w-9 h-9 bg-blue-300" />
          <View
            className="border-[1px] border-white rounded-full w-9 h-9 bg-blue-300"
            style={{
              marginLeft: -1 * margin
            }}
          />
          <View
            className="border-[1px] border-white rounded-full w-9 h-9 bg-blue-300"
            style={{
              marginLeft: -1 * margin
            }}
          />
          <View
            className="border-[1px] border-white rounded-full w-9 h-9 bg-blue-300"
            style={{
              marginLeft: -1 * margin
            }}
          />
          <View
            className="border-[1px] border-white rounded-full w-9 h-9 bg-blue-300"
            style={{
              marginLeft: -1 * margin
            }}
          />
        </View>
        <View
          className={cn(
            'h-9 flex-row items-center justify-between flex-1 rounded-2xl px-3',
            ownType === OweType.ownYou ? 'bg-success' : 'bg-fail'
          )}
        >
          <Text>{ownType === OweType.ownYou ? 'You are owed' : 'You owe'}</Text>
          <Text className={cn('font-bold', ownType === OweType.ownYou ? 'text-success' : 'text-fail')}>$1234.56</Text>
        </View>
      </View>
    </View>
  );
};

export default OweCard;
