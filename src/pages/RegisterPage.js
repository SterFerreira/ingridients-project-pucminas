import { View,Image, TextInput, Text } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { register } from '../services/auth-service';
import { validateRegister } from '../services/users-service';
import StylesLoginPage from '../styles/StylesLoginPage';
import StylesGeneric from '../styles/StylesGeneric';
import StylesRegisterPage from '../styles/StylesRegisterPage';
import { useUser } from '../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = () => {

  const navigation = useNavigation();
  const {setUserSigned, userName, userId, setUserName, setUserId} = useUser();

  const [input, setInput] = useState('');
  const [inputDois, setInputDois] = useState('');

  const [inputEmail, setEmail] = useState('');
  const [inputEmailDois, setEmailDois] = useState('');

  const [hideEmail, setHideEmail] = useState(true);
  const [hideEmailDois, setHideEmailDois] = useState(true);

  const [hidePass, setHidePass] = useState(true);
  const [hidePassDois, setHidePassDois] = useState(true);

  const [errorMessage, setErrorMessage] = useState('');
  const [registerSucess, setRegisterSucess] = useState(false);
 

  const handleRegister = async () => {
    setRegisterSucess(false);
    setErrorMessage('');
    
    let validation = await validateRegister({email: inputEmail, emailConfirm: inputEmailDois, password: input, passwordConfirm: inputDois});

    if(!validation.success){
      setErrorMessage(validation.errorMessage);
      return;
    }
    
    register({
      email: inputEmail,
      password: input
    }).then( response => {
      if(response && response.success){
        console.log("Register success");
        setRegisterSucess(true);

        setUserSigned(true);
        setUserName(response.data.user.name);
        setUserId(response.data.user.id);
        AsyncStorage.setItem('@TOKEN_KEY', response.data.accessToken).then();

        console.log("Redirecionando em 3seg...");
        setTimeout(() => {
          navigation.navigate('MainPage');
        }, 3000)
        
      }else{
        console.log("Register failed");
        
        console.log(response);
      }
    })
  }

  return (
    <>
    <HeaderComponent></HeaderComponent>
    
    <BodyComponent style>
     <View style={StylesRegisterPage.ImageSection}>
        <Image style={StylesRegisterPage.Image}
          source={require('../assets/images/login.png')}
        />
  </View> 
    

    <View style={StylesRegisterPage.container}>
    <View>
      <Text style={StylesRegisterPage.title}>Register</Text>
    </View>
        <Text style={StylesRegisterPage.text}>Informe o E-Mail</Text>
        <View style={StylesRegisterPage.inputArea}>
          <TextInput placeholder='Informe seu E-Mail'
            style={StylesRegisterPage.input}
            value={inputEmail}
            onChangeText = { (Text) => {
              setEmail(Text)
              setHideEmail(false) 
            } }
          />
          <TouchableOpacity style={StylesRegisterPage.icon}>
            {
              hideEmail ?
                <Ionicons name='close' color={'#fff'} size={25} />
              :
                <Ionicons name='checkmark-outline' color={'#fff'} size={25} />
            }
          </TouchableOpacity>
        </View>
        <Text style={StylesRegisterPage.text}>Confirme o E-Mail</Text>
        <View style={StylesRegisterPage.inputArea}>
          <TextInput placeholder='Confirme seu E-Mail'
            style={StylesRegisterPage.input}
            value={inputEmailDois}
            onChangeText = { (TextDois) => {setEmailDois(TextDois) 
              setHideEmailDois(false)}}
          />
          <TouchableOpacity style={StylesRegisterPage.icon}>
            {
              hideEmailDois ?
                <Ionicons name='close' color={'#fff'} size={25} />
              :
                <Ionicons name='checkmark-outline' color={'#fff'} size={25} />
            }
          </TouchableOpacity>
        </View>

        <Text style={StylesRegisterPage.text}>Informe a sua Senha</Text>
        <View style={StylesRegisterPage.inputArea}>
          <TextInput placeholder='Insira sua Senha'
            style={StylesRegisterPage.input}
            value={input}
            onChangeText={ (textoDigitado) => setInput(textoDigitado) }
            secureTextEntry={hidePass}
          />
          <TouchableOpacity style={StylesRegisterPage.icon} onPress={ () => setHidePass(!hidePass) }>
            { hidePass ?
                <Ionicons name='eye' color={'#fff'} size={25} />
              :
              <Ionicons name='eye-off' color={'#fff'} size={25} />
          }
          </TouchableOpacity>
          
        </View>
        <Text style={StylesRegisterPage.text}>Confirme a sua Senha</Text>
        <View style={StylesRegisterPage.inputArea}>
          <TextInput placeholder='Confirme sua Senha'
            style={StylesRegisterPage.input}
            value={inputDois}
            onChangeText={ (textoDigitadoDois) => setInputDois(textoDigitadoDois) }
            secureTextEntry={hidePassDois}
          />
          <TouchableOpacity style={StylesRegisterPage.icon} onPress={ () => setHidePassDois(!hidePassDois) }>
            { hidePassDois ?
                <Ionicons name='eye' color={'#fff'} size={25} />
              :
              <Ionicons name='eye-off' color={'#fff'} size={25} />
          }
          </TouchableOpacity>
          

        </View>

        <View>
        {errorMessage != '' && <Text style={StylesLoginPage.AlertLabel}>{errorMessage}</Text>}
        <Text style={StylesLoginPage.AlertLabel}>{registerSucess ? 'Registrado com Sucesso' : null}</Text>
        <Text  onPress={() => handleRegister()}>Registrar</Text>
        <TouchableOpacity style={StylesLoginPage.CreateAccount} onPress={() => navigation.navigate('MainPage')}>
            <Text style={StylesGeneric.LinkGeneric}>Welcome</Text>
        </TouchableOpacity>
        
      </View>

      </View>
      
      </BodyComponent>
      </>
      
  );
}

export default Register;