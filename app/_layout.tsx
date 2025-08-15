import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f0f4f8' }}>
      <Stack screenOptions={{
        headerStyle: { backgroundColor: '#1a3d6d' },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: '700' }
      }}>
        <Stack.Screen name="index" options={{ title: 'Dashboard' }} />
        <Stack.Screen name="appointments" options={{ title: 'Appointments' }} />
        <Stack.Screen name="documentReview" options={{ title: 'Document Review' }} />
        <Stack.Screen name="messaging" options={{ title: 'Messaging' }} />
      </Stack>
    </View>
  );
}
