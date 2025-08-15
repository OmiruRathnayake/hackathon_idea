import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function DocumentReview() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f0f4f8' }}>
      <View style={{ backgroundColor: '#1a3d6d', paddingVertical: 16, paddingHorizontal: 20 }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Document Review</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View style={{ backgroundColor: 'white', borderRadius: 8, padding: 16, marginBottom: 20, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#1a3d6d' }}>Pending Documents</Text>
          <Text style={{ marginTop: 8, fontSize: 14, color: '#4b5563' }}>
            Review the list of documents awaiting approval.
          </Text>
          <TouchableOpacity style={{ marginTop: 12, backgroundColor: '#1a3d6d', paddingVertical: 10, borderRadius: 6 }}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>View Pending</Text>
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: 'white', borderRadius: 8, padding: 16, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#1a3d6d' }}>Reviewed Documents</Text>
          <Text style={{ marginTop: 8, fontSize: 14, color: '#4b5563' }}>
            Access the history of reviewed documents.
          </Text>
          <TouchableOpacity style={{ marginTop: 12, backgroundColor: '#1a3d6d', paddingVertical: 10, borderRadius: 6 }}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>View History</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
