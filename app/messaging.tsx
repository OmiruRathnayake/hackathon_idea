import React from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function Messaging() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f0f4f8' }}>
      <View style={{ backgroundColor: '#1a3d6d', paddingVertical: 16, paddingHorizontal: 20 }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Messaging</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ fontSize: 16, color: '#4b5563', marginBottom: 12 }}>
          Send a secure message to a citizen.
        </Text>

        <TextInput
          style={{
            backgroundColor: 'white',
            borderRadius: 6,
            padding: 12,
            borderColor: '#d1d5db',
            borderWidth: 1,
            minHeight: 100,
            textAlignVertical: 'top',
          }}
          placeholder="Type your message here..."
          multiline
        />

        <TouchableOpacity
          style={{
            marginTop: 12,
            backgroundColor: '#1a3d6d',
            paddingVertical: 10,
            borderRadius: 6,
          }}
          onPress={() => alert('Message sent!')}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>Send</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
