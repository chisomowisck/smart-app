import { View, ScrollView, SafeAreaView } from "react-native"
import DutyCalculatorView from "../../../../components/calculators/duty/DutyCalculator";

const DutyCalculator = () => {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
        <DutyCalculatorView/>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default DutyCalculator;
