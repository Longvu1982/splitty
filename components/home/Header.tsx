import { useBoolean } from '@/hooks/useBoolean';
import { cn } from '@/utils';
import { useAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Logo from '../Logo';

interface HeaderProps {
  classNames: string;
}

const Header = ({ classNames }: HeaderProps) => {
  console.log(classNames);
  const { value: isLoading, setTrue, setFalse } = useBoolean(false);

  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }

  return (
    <View className={cn('px-6 flex-row justify-between', classNames)}>
      <Spinner visible={isLoading} />
      <Logo />
      <View className="flex-row gap-2">
        <View className="bg-[#ffffff44] rounded-full p-2">
          <Ionicons name="notifications-sharp" className="font-semibold" color="#fff" size={22} />
        </View>
        <View className="bg-[#ffffff44] rounded-full p-2">
          <Pressable
            onPress={async () => {
              setTrue();
              await signOut();
              setFalse();
            }}
          >
            <Ionicons name="notifications-sharp" className="font-semibold" color="#fff" size={22} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Header;
