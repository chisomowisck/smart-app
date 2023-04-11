
import { Text, TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useRouter } from "expo-router";
import { routes } from '../../constants';

export const HomeScreen = () => {
    const router = useRouter()
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity style={{
          backgroundColor: 'green',
          padding: 10,
          margin: 10,
          borderRadius: 10,
          alignItems: 'center',
        }} onPress={()=>{
          router.push(routes.calculators.duty.calculate)
        }}>
          <Text>Hello</Text>
        </TouchableOpacity>
      </View>
    );
  }