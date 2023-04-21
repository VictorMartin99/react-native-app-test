import { SafeAreaView, StyleSheet} from 'react-native';
import MainStack from './navigation/MainStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
      <SafeAreaView style = {{ flex: 1}}>
        <MainStack />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
