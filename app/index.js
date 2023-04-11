import { createDrawerNavigator } from '@react-navigation/drawer';
import DutyCalculator from './calculators/duty';
import { HomeScreen } from './home';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Payee Calculator" component={HomeScreen} />
        <Drawer.Screen name="Duty Calculator" component={DutyCalculator} />
        <Drawer.Screen name="Document Scanner" component={HomeScreen} />
        <Drawer.Screen name="Taxpayer Feedback" component={HomeScreen} />
        <Drawer.Screen name="Tip Offs" component={HomeScreen} />
      </Drawer.Navigator>
  );
}
