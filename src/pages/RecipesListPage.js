import { Text, TextInput, View, Image} from 'react-native';
import {useState, useEffect} from 'react';
import StylesRecipesListPage from '../styles/StylesRecipesListPage';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { useNavigation } from '@react-navigation/native';
import GenericGoBackComponent from '../components/GenericGoBackComponent';
import RecipeListComponent from '../components/RecipeListComponent';
import { getOwnRecipesByUserId, getFavoriteRecipesByUserId } from '../services/recipes-service';
import { useUser } from './../contexts/UserContext';
import {redirectUnauthenticatedToLogin} from '../services/auth-service'

import StylesMainPage from '../styles/StylesMainPage';
import { Ionicons } from '@expo/vector-icons';
import {ScrollView} from 'react-native';

const RecipesList = ({route}) => {

  const [lista, setLista] = useState([]);

    redirectUnauthenticatedToLogin();
    const navigation = useNavigation();

    const {userId} = useUser();
    const {type} = route.params;

    const [ownRecipes, setOwnRecipes] = useState([]);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    const [search, setSearch] = useState('');

    const getOwnRecipes = async () =>{
        getOwnRecipesByUserId({
            userId: userId,
        }).then(async response => {  
          if(response && response.success){
            setOwnRecipes(response.data);
            console.log(response.data);
          }else{
            console.log("Get own recipes by user id failed");
            console.log(response);
          }
        })
    }
    
    const getFavoriteRecipes = async () =>{
        getFavoriteRecipesByUserId({
            userId: userId,
        }).then(async response => {  
          if(response && response.success){
            setFavoriteRecipes(response.data);
          }else{
            console.log("Get favorite recipes by user id failed");
            console.log(response);
          }
        })
    }

    const mostrar = (search) => {
      let filterList = [];

        if(type == 'own')
          filterList = ownRecipes.filter(item => item.name.includes(search));
        if(type != 'own')
          filterList = favoriteRecipes.filter(item => item.name.includes(search));

        if(search.length == 0){
          setLista([]);
        } 
        else{
          
          setLista(filterList);
          console.log(lista);
        }
      }
    

    useEffect(() => {
      getOwnRecipes();
      getFavoriteRecipes();
    }, []);
    
  return (
   <>
    <HeaderComponent></HeaderComponent> 
    <BodyComponent>
   <View style={StylesRecipesListPage.Screen}> 
        <View style={StylesRecipesListPage.SectionRecipeList}>

          <View style={StylesMainPage.Pesquisar}>
              <TextInput placeholder='Pesquisar'
              
              onChangeText={(search) => mostrar(search)}
              style={StylesMainPage.input}/>
              <Ionicons name='search' color={'#fff'} size={30} onPress={() => {}} 
              style={StylesMainPage.search}/>
          </View>
        {search == '' &&  <View>

        <View style={StylesMainPage.mainmain}>

          <Text style={StylesRecipesListPage.Title}>{type == 'own' ? 'Minhas Receitas 📔' : 'Receitas Favoritas ❤️'}</Text>
          <View style={StylesMainPage.imagemmain1}>
            <View>
                {type == 'own' && <RecipeListComponent data={/*type == 'own'*/ lista != 0 ? lista : ownRecipes}></RecipeListComponent>}
                {type != 'own' && <RecipeListComponent data={lista != 0 ? lista : favoriteRecipes}></RecipeListComponent>}
            </View>
          </View>
        </View>
      </View>}
      <ScrollView>
        
        <View>

        </View>

      </ScrollView>


            
        </View>
        <View style={StylesRecipesListPage.SectionBottom}>           
            <GenericGoBackComponent/>
        </View>
     </View>
    </BodyComponent>
    </>
  );
}

export default RecipesList;