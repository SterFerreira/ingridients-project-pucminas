import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { View , StatusBar } from 'react-native';
import { useNavigation, useRoute} from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';

const HeaderComponent = () => {
  const {userSigned} = useUser();

  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={Styles.Header}>
      <StatusBar
        hidden = {false}
        translucent = {true}
        backgroundColor = "#E05D25"
        networkActivityIndicatorVisible = {true}/>
      { userSigned ? <Button mode="text" style={Styles.HeaderButton} labelStyle={[Styles.HeaderButtonLabel, route.name == 'AccountPage' ? Styles.HeaderButtonLabelSelected : null]} onPress={() => navigation.navigate('AccountPage')}>Conta</Button> : null }
      { !userSigned ? <Button mode="text" style={Styles.HeaderButton} labelStyle={[Styles.HeaderButtonLabel, route.name == 'LoginPage' ? Styles.HeaderButtonLabelSelected : null]} onPress={() => navigation.navigate('LoginPage')}>Login</Button> : null }
      <Button mode="text" style={Styles.HeaderButton} labelStyle={[Styles.HeaderButtonLabel, route.name == 'MainPage' ? Styles.HeaderButtonLabelSelected : null]} onPress={() => navigation.navigate('MainPage')}>Pesquisar</Button>
      <Button mode="text" style={Styles.HeaderButton} labelStyle={[Styles.HeaderButtonLabel, route.name == 'PostRecipePage' ? Styles.HeaderButtonLabelSelected : null]} onPress={() => navigation.navigate('PostRecipePage')}>Postar</Button>
    </View>  
  );
}

const Styles = StyleSheet.create({
    Header: {
       height: 80,
       flexDirection: 'row',
       justifyContent: 'space-around',
       backgroundColor: '#E05D25'
    },
    HeaderButton:{
      marginTop: 40
    },
    HeaderButtonLabel: {
      color: "#FFFFFF",
      //fontFamily: 'Oxygen',
      fontWeight: '400',
      fontSize: 13,
      width: 80,
      textTransform: 'capitalize'
    },
    HeaderButtonLabelSelected: {
      borderBottomWidth: 1,
      paddingBottom: 3,
      borderBottomColor: '#FFF9F9'
    }
});

export default HeaderComponent;