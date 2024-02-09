import { ClerkProvider,SignedIn,SignedOut } from '@clerk/clerk-expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { NavigationContainer } from '@react-navigation/native';
import * as SecureStore from "expo-secure-store";
import TabNavigation from './App/Navigations/TabNavigation';
import { useFonts } from 'expo-font';
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });
  return (
    <ClerkProvider 
    tokenCache={tokenCache}
    publishableKey='pk_test_c2F2aW5nLXNoZWVwLTQyLmNsZXJrLmFjY291bnRzLmRldiQ'>

      <View style={styles.container}>
        {/* //SignedIn Component */}

        <SignedIn>
          
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
          
        </SignedIn>
        {/* //signedOut Component */}
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,

  },
});
