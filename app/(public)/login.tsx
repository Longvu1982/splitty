import LayoutGradientWrapper from '@/components/LayoutGradientWrapper';
import Logo from '@/components/Logo';
import { useWarmUpBrowser } from '@/hooks/useWrapperBrowser';
import { useOAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  useWarmUpBrowser();
  const [isLoading, setLoading] = useState(false);

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      setLoading(true);
      const { createdSessionId, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive?.({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <LayoutGradientWrapper>
      <Spinner visible={isLoading} />
      <Logo classNames="mx-auto mt-5 mb-8" textClassNames="text-4xl font-bold" iconSize={28} />
      <Text className="text-center text-white px-10 font-semibold text-xl mb-10">
        Effortlessly split bills and settle up with friends. Simplify your shared expenses today!
      </Text>

      <TouchableOpacity
        className="bg-accent-orange p-4 px-6 mx-auto flex-row items-center justify-center w-fit rounded-lg mb-40 space-x-2"
        onPress={onPress}
      >
        <Ionicons name="logo-google" color="#fff" size={28} />
        <Text className="text-white font-semibold">Sign in with Google</Text>
      </TouchableOpacity>

      <View className="absolute inset-0 h-[100vh] w-full pointer-events-none z-[-1]">
        <Image
          source={require('../../assets/images/illustration.png')}
          className="h-[600px] aspect-square absolute left-0 w-[700px] -bottom-10"
          style={{ resizeMode: 'contain' }}
        />
      </View>
    </LayoutGradientWrapper>
  );
};
export default SignInWithOAuth;
