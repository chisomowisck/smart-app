import { View, ScrollView, SafeAreaView, Text } from "react-native"
// import { DutyCalculatorDetailsView } from "../../../../components/calculators/duty/details/DutyCalculatorDetails";
import { Stack, useSearchParams } from "expo-router";

const DutyCalculatorDetails = () => {
  const params = useSearchParams();
  console.log(params)
  return (
    <View>
      <SafeAreaView>
        <Stack.Screen
        options={{
            title: "Details"
        }}>

        </Stack.Screen>
        <ScrollView>
        {/* <DutyCalculatorDetailsView/> */}
        <Text>
          {params.id}
        </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default DutyCalculatorDetails;
