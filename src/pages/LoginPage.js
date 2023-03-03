import { useEffect, useState } from 'react';
import { ActivityIndicator, TextInput, TouchableOpacity,Text,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { View, KeyboardAvoidingView,Image } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import StylesLoginPage from '../styles/StylesLoginPage';
import StylesGeneric from '../styles/StylesGeneric';
import { login } from '../services/auth-service';
import { useUser } from '../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import { insertLoginOptions, getLoginOptions, updateLoginOptions } from '../services/sqlite-service';
import BouncyCheckbox from "react-native-bouncy-checkbox";



const LoginPage = () => {
  const {setUserSigned, userSigned, setUserName, userId, setUserId} = useUser();
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const [email, setEmail] = useState('joao@gmail.com');
  const [password, setPassword] = useState('abc123');
  const [keepConnected, setKeepConnected] = useState(true);

  const navigation = useNavigation();

  const handleLogin = () => {
    setLoading(true);
    setLoginError(false);

    login({
      email: email,
      password: password
    }).then( response => {
      setLoading(false);

      if(response && response.success){
        console.log("Login success")
        
        setUserSigned(true);
        setUserName(response.data.user.name);
        setUserId(response.data.user.id);
        AsyncStorage.setItem('@TOKEN_KEY', response.data.accessToken).then();

        getLoginOptions().then(loginOptions => {
          if(loginOptions[0] == undefined || loginOptions[0] == {} || loginOptions[0] == null)
            insertLoginOptions({keepConnected: keepConnected ? 1 : 0, userId: response.data.user.id, email: keepConnected ? email : null, password: keepConnected ? password : null})
  
          if(loginOptions[0] != undefined && loginOptions[0] != {} && loginOptions[0] != null)
            updateLoginOptions({keepConnected: keepConnected ? 1 : 0, userId: response.data.user.id, email: keepConnected ? email : null, password: keepConnected ? password : null})
        });
          
        navigation.navigate('MainPage');
      }else{
        console.log("Login failed");

        setLoading(false);
        setLoginError(true);
        setPassword('');
      }
    })
  }

  useEffect(() => {
    if(userSigned){
      navigation.navigate('MainPage');
      return;
    }
      
    getLoginOptions().then(loginOptions => {   
      if(loginOptions[0] != undefined && loginOptions[0] != {} && loginOptions[0] != null){
        if(loginOptions[0].keepConnected == 1 && loginOptions[0].userEmail != null && loginOptions[0].userPassword != null){
          setEmail(loginOptions[0].userEmail);
          setPassword(loginOptions[0].userPassword);
          setKeepConnected(loginOptions[0].keepConnected);
          handleLogin();
        }
      }  
    });


  }, [userSigned]);

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={StylesLoginPage.Screen} behavior="padding">
            <View style={StylesLoginPage.ImageSection}>
              <Image style={StylesLoginPage.Image}
                source={require('../assets/images/login.png')}
              />
            </View> 
            <View style={StylesLoginPage.InteractionSection}> 

              <Text style={StylesLoginPage.LoginLabel}>Login</Text>
              
              <Text style={StylesGeneric.GenericInputLabelGray}>Endereço de E-mail</Text>

              <TextInput
              style={StylesGeneric.GenericInput}
              placeholder="nome@email.com"
              autoCorrect={true}
              onChangeText={(text) => setEmail(text)}
              />

              <Text style={StylesGeneric.GenericInputLabelGray}>Senha</Text>

              <TextInput 
              style={StylesGeneric.GenericInput}
              placeholder="***********"
              secureTextEntry
              autoCorrect={false}
              onChangeText={(text) => setPassword(text)}
              />

              <Text style={StylesGeneric.GenericLabelAlert}>{ loginError ? 'Email ou senha incorretos!' : null }</Text>

              <View style={{alignItems: 'center', marginBottom: 15}}>
                <BouncyCheckbox onPress={() => {setKeepConnected(!keepConnected)}} textStyle={{textDecorationLine: "none",}} isChecked={keepConnected} text="Manter conectado"/>
              </View>

              <TouchableOpacity onPress={handleLogin} style={StylesLoginPage.LoginButton}>
                { loading
                  ? <ActivityIndicator size="small" color="#FFFFFF" />
                  : <Text style={StylesLoginPage.LoginButtonLabel}> Acessar </Text>             
                }    
              </TouchableOpacity>

              <TouchableOpacity style={StylesLoginPage.CreateAccount} onPress={() => navigation.navigate('RegisterPage')}>
                <Text style={StylesGeneric.LabelGeneric}>Não tem uma conta? </Text><Text style={StylesGeneric.LinkGeneric}>Criar nova conta.</Text>
              </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </BodyComponent>
    </>
  );
}

export default LoginPage;
