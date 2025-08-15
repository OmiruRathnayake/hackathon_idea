import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import GovernmentOfficerInterface from './index';
import Appointments from './appointments';
import DocumentReview from './documentReview';

// Temporary Messaging screen so navigation works without missing file error
function Messaging() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 10 }}>Messaging</Text>
      <Text style={{ fontSize: 14, color: '#4b5563', textAlign: 'center' }}>
        Communicate with citizens securely.
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Dashboard" component={GovernmentOfficerInterface} />
        <Stack.Screen name="Appointments" component={Appointments} />
        <Stack.Screen name="DocumentReview" component={DocumentReview} />
        <Stack.Screen name="Messaging" component={Messaging} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


/*
//From Sandamina...
// App.js
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
  Image,
} from 'react-native';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [userType, setUserType] = useState('');
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    isAbove18: null,
  });

  // Welcome Screen Component
  const WelcomeScreen = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.title}>Healinko</Text>
        <Text style={styles.subtitle}>Digital Healthcare Platform</Text>
        
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => setCurrentScreen('login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={() => setCurrentScreen('userSelection')}
        >
          <Text style={styles.secondaryButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  // User Selection Screen
  const UserSelectionScreen = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>Sign Up As</Text>
        <Text style={styles.subtitle}>Select your role</Text>
        
        <TouchableOpacity 
          style={styles.userTypeButton}
          onPress={() => {
            setUserType('patient');
            setCurrentScreen('ageVerification');
          }}
        >
          <Text style={styles.buttonText}>Patient</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.userTypeButton}
          onPress={() => {
            setUserType('doctor');
            setCurrentScreen('slmcUpload');
          }}
        >
          <Text style={styles.buttonText}>Doctor</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.userTypeButton}
          onPress={() => {
            setUserType('pharmacist');
            setCurrentScreen('slmcUpload');
          }}
        >
          <Text style={styles.buttonText}>Pharmacist</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  // Age Verification Screen (for patients)
  const AgeVerificationScreen = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>Age Verification</Text>
        <Text style={styles.subtitle}>Are you above 18?</Text>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={styles.choiceButton}
            onPress={() => {
              setFormData({...formData, isAbove18: true});
              setCurrentScreen('signup');
            }}
          >
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.choiceButton}
            onPress={() => {
              Alert.alert('Age Requirement', 'You must be 18 or older to register');
            }}
          >
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );

  // SLMC ID Upload Screen (for doctors and pharmacists)
  const SLMCUploadScreen = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>SLMC Verification</Text>
        <Text style={styles.subtitle}>Upload your SLMC ID</Text>
        
        <View style={styles.uploadArea}>
          <Text style={styles.uploadText}>Tap to upload SLMC ID</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => {
            Alert.alert('Upload', 'SLMC ID uploaded successfully');
            setCurrentScreen('signup');
          }}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  // Login Screen
  const LoginScreen = () => (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Login</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={formData.username}
          onChangeText={(text) => setFormData({...formData, username: text})}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => setFormData({...formData, password: text})}
        />
        
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => {
            if (formData.username && formData.password) {
              // Mock login - determine user type based on username prefix
              let loginUserType = 'patient';
              if (formData.username.startsWith('dr')) loginUserType = 'doctor';
              if (formData.username.startsWith('ph')) loginUserType = 'pharmacist';
              
              setUser({ username: formData.username, type: loginUserType });
              setUserType(loginUserType);
              setCurrentScreen('dashboard');
            } else {
              Alert.alert('Error', 'Please fill in all fields');
            }
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => setCurrentScreen('userSelection')}>
          <Text style={styles.linkText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );

  // Signup Screen
  const SignupScreen = () => (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Create your {userType} account</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={formData.username}
          onChangeText={(text) => setFormData({...formData, username: text})}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => setFormData({...formData, password: text})}
        />
        
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => {
            if (formData.username && formData.password) {
              setUser({ username: formData.username, type: userType });
              setCurrentScreen('dashboard');
            } else {
              Alert.alert('Error', 'Please fill in all fields');
            }
          }}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => setCurrentScreen('login')}>
          <Text style={styles.linkText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );

  // Patient Dashboard
  const PatientDashboard = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Hello {user?.username}</Text>
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => {
            setUser(null);
            setCurrentScreen('welcome');
            setFormData({ username: '', password: '', isAbove18: null });
          }}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.dashboardContent}>
        <TouchableOpacity 
          style={styles.dashboardCard}
          onPress={() => setCurrentScreen('medicalHistory')}
        >
          <Text style={styles.cardTitle}>Medical History</Text>
          <Text style={styles.cardSubtitle}>View your medical records</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.dashboardCard}
          onPress={() => setCurrentScreen('treatmentSummary')}
        >
          <Text style={styles.cardTitle}>Treatment Summary</Text>
          <Text style={styles.cardSubtitle}>View treatment details</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.dashboardCard}
          onPress={() => setCurrentScreen('doctorChanneling')}
        >
          <Text style={styles.cardTitle}>Doctor Channeling</Text>
          <Text style={styles.cardSubtitle}>Book appointments</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.dashboardCard}
          onPress={() => setCurrentScreen('eId')}
        >
          <Text style={styles.cardTitle}>E-ID</Text>
          <Text style={styles.cardSubtitle}>Digital health ID</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );

  // Doctor Dashboard
  const DoctorDashboard = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Dr. {user?.username}</Text>
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => {
            setUser(null);
            setCurrentScreen('welcome');
            setFormData({ username: '', password: '', isAbove18: null });
          }}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.dashboardContent}>
        <TouchableOpacity 
          style={styles.dashboardCard}
          onPress={() => setCurrentScreen('addTreatments')}
        >
          <Text style={styles.cardTitle}>Add Treatments</Text>
          <Text style={styles.cardSubtitle}>Add new patient treatments</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.dashboardCard}
          onPress={() => Alert.alert('Patients', 'Patient list coming soon')}
        >
          <Text style={styles.cardTitle}>Patients</Text>
          <Text style={styles.cardSubtitle}>View patient list</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.dashboardCard}
          onPress={() => Alert.alert('Schedule', 'Schedule management coming soon')}
        >
          <Text style={styles.cardTitle}>Schedule</Text>
          <Text style={styles.cardSubtitle}>Manage appointments</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );

  // Pharmacist Dashboard
  const PharmacistDashboard = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Pharmacist {user?.username}</Text>
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => {
            setUser(null);
            setCurrentScreen('welcome');
            setFormData({ username: '', password: '', isAbove18: null });
          }}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.dashboardContent}>
        <TouchableOpacity 
          style={styles.dashboardCard}
          onPress={() => Alert.alert('Prescriptions', 'Prescription scanning coming soon')}
        >
          <Text style={styles.cardTitle}>Scan Prescription</Text>
          <Text style={styles.cardSubtitle}>Scan and process prescriptions</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.dashboardCard}
          onPress={() => Alert.alert('Inventory', 'Inventory management coming soon')}
        >
          <Text style={styles.cardTitle}>Inventory</Text>
          <Text style={styles.cardSubtitle}>Manage medicine stock</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.dashboardCard}
          onPress={() => Alert.alert('Orders', 'Order history coming soon')}
        >
          <Text style={styles.cardTitle}>Orders</Text>
          <Text style={styles.cardSubtitle}>View order history</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );

  // Medical History Screen
  const MedicalHistoryScreen = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setCurrentScreen('dashboard')}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Medical History</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.recordCard}>
          <Text style={styles.recordTitle}>Consultation - Jan 15, 2024</Text>
          <Text style={styles.recordDoctor}>Dr. John Smith</Text>
          <Text style={styles.recordDetails}>Regular checkup - All vitals normal</Text>
        </View>
        
        <View style={styles.recordCard}>
          <Text style={styles.recordTitle}>Lab Results - Dec 10, 2023</Text>
          <Text style={styles.recordDoctor}>City Lab</Text>
          <Text style={styles.recordDetails}>Blood test results available</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  // Treatment Summary Screen
  const TreatmentSummaryScreen = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setCurrentScreen('dashboard')}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Treatment Summary</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.treatmentCard}>
          <Text style={styles.treatmentTitle}>Current Medication</Text>
          <Text style={styles.treatmentDetails}>Amoxicillin 500mg - 3 times daily</Text>
          <Text style={styles.treatmentDuration}>Duration: 7 days</Text>
        </View>
        
        <View style={styles.treatmentCard}>
          <Text style={styles.treatmentTitle}>Follow-up</Text>
          <Text style={styles.treatmentDetails}>Next appointment: Jan 25, 2024</Text>
          <Text style={styles.treatmentDoctor}>Dr. John Smith</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  // E-ID Screen
  const EIdScreen = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setCurrentScreen('dashboard')}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>E-ID</Text>
      </View>
      
      <View style={styles.eIdContainer}>
        <View style={styles.eIdCard}>
          <Text style={styles.eIdTitle}>Digital Health ID</Text>
          <Text style={styles.eIdName}>{user?.username}</Text>
          <Text style={styles.eIdNumber}>ID: HLK{Math.floor(Math.random() * 100000)}</Text>
          
          <TouchableOpacity 
            style={styles.scanButton}
            onPress={() => Alert.alert('Scan', 'QR Code scanning feature')}
          >
            <Text style={styles.scanButtonText}>Scan E-ID</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );

  // Add Treatments Screen (for doctors)
  const AddTreatmentsScreen = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setCurrentScreen('dashboard')}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Treatments</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Patient ID"
          placeholderTextColor="#999"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Treatment Description"
          placeholderTextColor="#999"
          multiline
          numberOfLines={4}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Medication"
          placeholderTextColor="#999"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Dosage"
          placeholderTextColor="#999"
        />
        
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => {
            Alert.alert('Success', 'Treatment added successfully');
            setCurrentScreen('dashboard');
          }}
        >
          <Text style={styles.buttonText}>Add Treatment</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen />;
      case 'userSelection':
        return <UserSelectionScreen />;
      case 'ageVerification':
        return <AgeVerificationScreen />;
      case 'slmcUpload':
        return <SLMCUploadScreen />;
      case 'login':
        return <LoginScreen />;
      case 'signup':
        return <SignupScreen />;
      case 'dashboard':
        switch (userType) {
          case 'doctor':
            return <DoctorDashboard />;
          case 'pharmacist':
            return <PharmacistDashboard />;
          default:
            return <PatientDashboard />;
        }
      case 'medicalHistory':
        return <MedicalHistoryScreen />;
      case 'treatmentSummary':
        return <TreatmentSummaryScreen />;
      case 'eId':
        return <EIdScreen />;
      case 'addTreatments':
        return <AddTreatmentsScreen />;
      default:
        return <WelcomeScreen />;
    }
  };

  return renderScreen();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 30,
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  userTypeButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  choiceButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 10,
    minWidth: 80,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: 'white',
    fontSize: 16,
  },
  linkText: {
    color: '#3498db',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 14,
  },
  uploadArea: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    padding: 40,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: 'white',
  },
  uploadText: {
    color: '#7f8c8d',
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
  logoutButton: {
    padding: 8,
  },
  logoutText: {
    color: '#e74c3c',
    fontSize: 14,
  },
  backButton: {
    color: '#3498db',
    fontSize: 16,
  },
  dashboardContent: {
    flex: 1,
    padding: 20,
  },
  dashboardCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  recordCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  recordTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  recordDoctor: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 2,
  },
  recordDetails: {
    fontSize: 14,
    color: '#34495e',
    marginTop: 5,
  },
  treatmentCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#2ecc71',
  },
  treatmentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  treatmentDetails: {
    fontSize: 14,
    color: '#34495e',
    marginTop: 5,
  },
  treatmentDuration: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 3,
  },
  treatmentDoctor: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 3,
  },
  eIdContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  eIdCard: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  eIdTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  },
  eIdName: {
    fontSize: 18,
    color: '#34495e',
    marginBottom: 10,
  },
  eIdNumber: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 30,
  },
  scanButton: {
    backgroundColor: '#9b59b6',
    padding: 12,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  scanButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default App;
*/