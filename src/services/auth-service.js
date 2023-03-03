import API, {BASE_URL} from './webapi-service';
import { useUser } from './../contexts/UserContext';
import { useNavigation } from '@react-navigation/native';

export const redirectUnauthenticatedToLogin = async () => {
    const {userSigned} = useUser();
    const navigation = useNavigation();

    if(!userSigned)
        navigation.navigate('LoginPage');
}

export const register = async (params) => {
    try{
        return await API.post(`${BASE_URL}/users`, params).then(
            response => {
                return {success: true, data: response.data};
            },
            error => {
                return {success: false, data: error};
            }
        )
    }catch(error){
        console.log("Erro interno. " + error);
        return null;
    }
}

export const login = async (params) => {
    try{
        return await API.post(`${BASE_URL}/login`, params).then(
            response => {
                return {success: true, data: response.data};
            },
            error => {
                return {success: false, data: error};
            }
        )
    }catch(error){
        console.log("Erro interno. " + error);
        return null;
    }
}