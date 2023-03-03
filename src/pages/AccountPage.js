import {Text, View, TouchableOpacity,Dimensions} from 'react-native';
import {useState, useEffect} from 'react';
import StylesAccountPage from '../styles/StylesAccountPage';
import StylesGeneric from '../styles/StylesGeneric';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { useNavigation } from '@react-navigation/native';
import GenericButtonComponent from '../components/GenericButtonComponent';
import RecipeListComponent from '../components/RecipeListComponent';
import { getOwnRecipesByUserId, getFavoriteRecipesByUserId } from '../services/recipes-service';
import { useUser } from './../contexts/UserContext';
import {redirectUnauthenticatedToLogin} from '../services/auth-service';
import { useIsFocused } from "@react-navigation/native";

const AccountPage = () => {
    redirectUnauthenticatedToLogin();
    const navigation = useNavigation();

    const {userId} = useUser();
    const isFocused = useIsFocused();

    const [ownRecipes, setOwnRecipes] = useState([]);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    const screenWidth = Dimensions.get('window').width;
    const columns = Math.floor(screenWidth / 100)
    const rows =  3;
    const itemsQuantity = columns * rows;

    const getOwnRecipes = async () =>{
        getOwnRecipesByUserId({
            userId: userId,
        }).then(async response => {  
          if(response && response.success){
            let items = response.data.slice(0, itemsQuantity);

          if(items.length != ownRecipes.length)
            setOwnRecipes(items);
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
            let items = response.data.slice(0, itemsQuantity);

          if(items.length != favoriteRecipes.length)
            setFavoriteRecipes(items);
          }else{
            console.log("Get favorite recipes by user id failed");
            console.log(response);
          }
        })
    }

    useEffect(() => {
      if(isFocused){
        getOwnRecipes();
        getFavoriteRecipes();
      }
    });
    
  return (
   <>
     <HeaderComponent></HeaderComponent>
     <BodyComponent>
    <View style={StylesAccountPage.Screen}> 
        <View style={StylesAccountPage.SectionRecipeList}>
            <Text style={StylesGeneric.GenericTitle}>Minhas Receitas 📔</Text>
            <View style={{flex: 9}}>
                {ownRecipes.length > 0 && <RecipeListComponent data={ownRecipes}></RecipeListComponent>}
                {ownRecipes.length == 0 && <View style={{marginLeft: 50, marginRight: 50, flex: 1, justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('PostRecipePage')} style={{alignItems: 'center', alignItems: 'center'}}>
                        <Text style={StylesGeneric.LabelGeneric}>Ahhhhhhh, parece que você não tem nenhum receita publicada 😩😩😩😩. </Text>
                        <Text style={StylesGeneric.LinkGeneric}>Que tal postar uma agora mesmo?</Text>
                    </TouchableOpacity>
                </View>}
                
            </View>
            <View style={{flex: 2, marginTop: 15}}>
              {ownRecipes.length > 0 && <TouchableOpacity onPress={() => navigation.navigate('RecipesListPage', {type: 'own'})}>
                <GenericButtonComponent>Ver todos</GenericButtonComponent>
              </TouchableOpacity>}
            </View>
        </View>
        <View style = {StylesGeneric.LineGeneric} />
        <View style={StylesAccountPage.SectionRecipeList}>
            <Text style={StylesGeneric.GenericTitle}>RECEITAS FAVORITAS ❤️</Text>
            <View style={{flex: 9}}>
                {favoriteRecipes.length > 0 && <RecipeListComponent data={favoriteRecipes}></RecipeListComponent>}
                {favoriteRecipes.length == 0 && <View style={{marginLeft: 50, marginRight: 50, flex: 1, justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('MainPage')} style={{alignItems: 'center', alignItems: 'center'}}>
                        <Text style={StylesGeneric.LabelGeneric}>Ahhhhhhh, parece que você não tem nenhum receita favoritada 😩😩😩😩. </Text>
                        <Text style={StylesGeneric.LinkGeneric}>Que tal encontrar uma agora mesmo?</Text>
                    </TouchableOpacity>
                </View>}
            </View>
            <View style={{flex: 2, marginTop: 15}}>
              {favoriteRecipes.length > 0 && <TouchableOpacity onPress={() => navigation.navigate('RecipesListPage', {type: 'favorited'})}>
                <GenericButtonComponent>Ver todos</GenericButtonComponent>
              </TouchableOpacity>}
            </View>
        </View>
        <View style = {StylesGeneric.LineGeneric} />
        <View style={StylesAccountPage.SectionBottom}>
            <TouchableOpacity style={{flexDirection: 'row', alignSelf: 'center', margin:7}} onPress={() => navigation.navigate('ConfigurationPage')}>
                <Text style={StylesGeneric.LabelGeneric}>Configurações de </Text><Text style={StylesGeneric.LinkGeneric}>Perfil.</Text>
            </TouchableOpacity>
        </View>
     </View>

    </BodyComponent>

    </>
  );
}

export default AccountPage;