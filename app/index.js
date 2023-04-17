import { createDrawerNavigator } from '@react-navigation/drawer';
import PayeeCalculator from './pages/calculators/payee';
import DutyCalculator from './pages/calculators/duty';
import DocumentScanner from './pages/scanner';
import Feedback from './pages/feedback';
import TipOff from './pages/tipoff';
import HomeScreen from '../components/home/HomeScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Payee Calculator" component={PayeeCalculator} />
        <Drawer.Screen name="Duty Calculator" component={DutyCalculator} />
        <Drawer.Screen name="Document Scanner" component={DocumentScanner} />
        <Drawer.Screen name="Taxpayer Feedback" component={Feedback} />
        <Drawer.Screen name="Tip Offs" component={TipOff} />
      </Drawer.Navigator>
  );
}
