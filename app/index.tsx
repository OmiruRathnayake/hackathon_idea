import React from 'react';
import { Text, View, TouchableOpacity, ScrollView /*, TextInput*/ } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

export default function GovernmentOfficerInterface() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f4f8' }}>
      <View style={{ backgroundColor: '#1a3d6d', paddingVertical: 16, paddingHorizontal: 20 }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Government Officer Dashboard</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View style={{ backgroundColor: 'white', borderRadius: 8, padding: 16, marginBottom: 20, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#1a3d6d' }}>Scheduled Appointments</Text>
          <Text style={{ marginTop: 8, fontSize: 14, color: '#4b5563' }}>
            View, manage, and confirm appointments for your department.
          </Text>
          <TouchableOpacity
            style={{ marginTop: 12, backgroundColor: '#1a3d6d', paddingVertical: 10, borderRadius: 6 }}
            onPress={() => router.push('/appointments') /*navigation.navigate('Appointments')*/}
          >
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>View Appointments</Text>
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: 'white', borderRadius: 8, padding: 16, marginBottom: 20, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#1a3d6d' }}>Document Review</Text>
          <Text style={{ marginTop: 8, fontSize: 14, color: '#4b5563' }}>
            Review pre-submitted documents and request corrections before scheduled appointments.
          </Text>
          <TouchableOpacity
            style={{ marginTop: 12, backgroundColor: '#1a3d6d', paddingVertical: 10, borderRadius: 6 }}
            onPress={() => router.push('/documentReview') /*navigation.navigate('DocumentReview')*/}
          >
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>Review Documents</Text>
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: 'white', borderRadius: 8, padding: 16, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#1a3d6d' }}>Citizen Communication</Text>
          <Text style={{ marginTop: 8, fontSize: 14, color: '#4b5563' }}>
            Communicate securely with citizens for clarification or additional information.
          </Text>
          <TouchableOpacity
            style={{ marginTop: 12, backgroundColor: '#1a3d6d', paddingVertical: 10, borderRadius: 6 }}
            onPress={() => router.push('/messaging') /*navigation.navigate('Messaging')*/}
          >
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
