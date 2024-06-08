import { Tabs } from 'expo-router';
import React, { ComponentProps } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { cn } from '@/utils';
import { Ionicons } from '@expo/vector-icons';
import { IconProps } from '@expo/vector-icons/build/createIconSet';
import { LinearGradient } from 'expo-linear-gradient';

const tabList: {
  name: string;
  title: string;
  iconName: ComponentProps<typeof Ionicons>['name'];
  iconNameFocus: ComponentProps<typeof Ionicons>['name'];
  type: 'nav' | 'action';
  size?: number;
}[] = [
  {
    name: 'index',
    title: 'home',
    iconName: 'home-sharp',
    iconNameFocus: 'home-outline',
    type: 'nav'
  },
  {
    name: 'lib',
    title: 'lib',
    iconName: 'swap-vertical',
    iconNameFocus: 'swap-vertical-outline',
    type: 'nav'
  },
  {
    name: 'add',
    title: 'lib',
    iconName: 'add-outline',
    iconNameFocus: 'add-outline',
    type: 'action',
    size: 25
  },
  {
    name: 'test',
    title: 'home',
    iconName: 'people',
    iconNameFocus: 'people-outline',
    type: 'nav'
  },
  {
    name: 'explore',
    title: 'lib',
    iconName: 'person',
    iconNameFocus: 'person-outline',
    type: 'nav'
  }
];

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const size = Dimensions.get('screen').width;

  console.log(size);

  return (
    <Tabs
      screenListeners={({ route }) => ({
        tabPress: (e) => {
          if (route.name === 'add') e.preventDefault();
        }
      })}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 27,
          left: (size - 240) / 2,
          height: 48,
          paddingBottom: 0,
          paddingTop: 0,
          paddingLeft: 0,
          paddingRight: 0,
          elevation: 0,
          backgroundColor: '#242424',
          borderRadius: 24,
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTopWidth: 0,
          borderWidth: 0,
          marginTop: -10,
          overflow: 'hidden',
          width: 240,
          gap: 10
        }
      }}
    >
      {tabList.map((item) => (
        <Tabs.Screen
          key={item.name}
          name={item.name}
          options={{
            title: 'Home',
            // href: null,
            tabBarIcon: ({ color, focused }) => (
              <View
                className={cn(
                  'rounded-full h-12 w-12 items-center justify-center active:opacity-75',
                  item.type === 'action' && 'bg-accent-orange',
                  item.type !== 'action' && focused ? 'bg-[#444]' : ''
                )}
              >
                <TabBarIcon
                  name={focused ? item.iconName : item.iconNameFocus}
                  color={item.type === 'nav' ? color : '#fff'}
                  size={item.size ?? 20}
                />
              </View>
            )
          }}
        />
      ))}
    </Tabs>
  );
}
