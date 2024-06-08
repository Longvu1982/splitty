import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { cn } from '@/utils';

interface LogoProps {
  classNames?: string;
  iconSize?: number;
  textClassNames?: string;
}

const Logo: FC<LogoProps> = ({ classNames, textClassNames, iconSize = 22 }) => {
  return (
    <View className={cn('flex-row items-center', classNames)}>
      <View className="rotate-45 bg-[#ffffff44] rounded-full p-2 mr-2">
        <Ionicons name="swap-vertical-sharp" className="font-semibold" color="#fff" size={iconSize} />
      </View>
      <Text className={cn('text-white font-semibold text-lg', textClassNames)}>Splitty</Text>
    </View>
  );
};

export default Logo;
