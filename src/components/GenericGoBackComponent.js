import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GenericGoBackComponent = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={{alignSelf: 'flex-start', marginLeft: 33}} onPress={() => navigation.goBack()}>
      <Image style={{height: 30, width: 30}} source={require('../assets/icons/goback.png')} />
    </TouchableOpacity>
  );
}

export default GenericGoBackComponent;