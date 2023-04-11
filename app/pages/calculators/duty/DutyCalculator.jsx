import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { routes } from "../../../constants";

const DutyCalculator = () => {
  const router = useRouter()
  return (
      <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: () =>(
            <Text style={{
              fontSize: 25,
              color: 'black',
            }}>Duty Calculator</Text>
         ),
          headerLeft: () => (
            <TouchableOpacity style={{
              width:40,
              height:'100%',
            }} onPress={()=>{
              router.back()
            }}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
        }}
      />
        <View>
          {/* <TouchableOpacity onPress={()=>{router.push(routes.calculators.duty.input)}}> */}
          <TouchableOpacity onPress={()=>{router.push(routes.calculators.duty.calculate)}}>
            <Text style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
            }}>Calculate Duty</Text>
          </TouchableOpacity>
          <Text>Duty Calculator</Text>
        </View>
      </SafeAreaView>
  );
};

export default DutyCalculator;
