
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { useRouter } from "expo-router";
import { routes } from '../../constants';
import styles from './HomeScreen.style';
import { images } from '../../constants';

const HomeScreen = () => {
    const router = useRouter()
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={images.mraLogo} style={styles.headerImg}/>
        <TouchableOpacity style={styles.headerBtn} onPress={()=>{
          router.push(routes.calculators.duty.index)
        }}>
          <Text style={styles.headerBtnText}>Getting Started</Text>
        </TouchableOpacity>
      </View>
    );
  }

  export default HomeScreen;