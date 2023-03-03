import {Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image, ScrollView} from 'react-native';
import {useState, useEffect} from 'react';
import StylesRecipeDetailsPage from '../styles/StylesRecipeDetailsPage';
import StylesGeneric from '../styles/StylesGeneric';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { getRecipeById, updateRecipe, updateRecipeFavorite } from '../services/recipes-service';
import { useUser } from './../contexts/UserContext';
import GenericGoBackComponent from '../components/GenericGoBackComponent';

const RecipeDetailsPage = ({route}) => {
  const { recipeId } = route.params;
  const {userId} = useUser();

  const [recipeName, setRecipeName] = useState('Carregando...');
  const [recipeImgUrl, setRecipeImgUrl] = useState('Carregando...');
  const [recipeIngredients, setRecipeIngredients] = useState('Carregando...');
  const [recipeInstructions, setRecipeInstructions] = useState('Carregando...');

  const [errorMessage, setErrorMessage] = useState('');

  const [favoritedByUserIdList, setFavoritedByUserIdList] = useState([]);

  const [editing, setEditing] = useState(false);
  const [userIsOwner, setUserIsOwner] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const getRecipe = async () =>{
    getRecipeById({
      recipeId: recipeId,
    }).then(response => {  

      console.log(response.data[0]);

      if(response && response.success){
        setRecipeImgUrl(response.data[0].imgUrl);
        setRecipeInstructions(response.data[0].instructions);
        setRecipeName(response.data[0].name);
        setRecipeIngredients(response.data[0].ingredients);
        setFavoritedByUserIdList(response.data[0].favoritedByUserIdList);

        //set isOwner
        if(response.data[0].createdByUserId == userId && userId != 0)
          setUserIsOwner(true);
        else setUserIsOwner(false);

        //set isFavorite
        let match = response.data[0].favoritedByUserIdList.filter(function (itemId) {
          return itemId == userId;
        });
      
        if(match.length > 0)
          setIsFavorite(true);
        else setIsFavorite(false);

      }else{
        console.log("Get recipe by id failed");
        console.log(response);
      }
    })
}

const handleUpdate = () => {
  updateRecipe({
    id: recipeId,
    name: recipeName,
    imgUrl: recipeImgUrl,
    ingredients: recipeIngredients,
    instructions: recipeInstructions
  }).then( response => {
    if(response && response.success){
      setEditing(!editing);
      setErrorMessage('');
    }else{
      setErrorMessage(response.data);
    }
  })
}

const handleFavorite = () => {
  if(!isFavorite)
    handleAddRecipeFavorite();
  
  if(isFavorite)
    handleRemoveRecipeFavorite();
}

const handleAddRecipeFavorite = () => {
  let listToSend = favoritedByUserIdList;
  listToSend.push(userId);

  updateRecipeFavorite({
    id: recipeId,
    favoritedByUserIdList: listToSend
  }).then(response => {
    if(response && response.success){
      setIsFavorite(!isFavorite);

    }else{
      console.log("Update recipe failed");
      console.log(response);
    }
  })
}

const handleRemoveRecipeFavorite = () => {
  let listToSend = favoritedByUserIdList;

  let index = listToSend.indexOf(userId);
  if (index > -1) {
    listToSend.splice(index, 1); // 2nd parameter means remove one item only
  }

  updateRecipeFavorite({
    id: recipeId,
    favoritedByUserIdList: listToSend
  }).then(response => {
    if(response && response.success){
      setIsFavorite(!isFavorite);

    }else{
      console.log("Update recipe failed");
      console.log(response);
    }
  })
}

function cancelEditing(){
  setEditing(false);
  setErrorMessage('');
}

  useEffect(() => {
    getRecipe();
  }, [recipeId, editing]);

  return (
   <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 7}}>
          <View style={StylesRecipeDetailsPage.ContentSection}>
            {!editing && <Text style={StylesGeneric.GenericTitle}>{recipeName}</Text>}
            {!editing && userId != undefined && userId != 0 && <View style={StylesRecipeDetailsPage.FavoriteRegion}>
              {!isFavorite && 
                <TouchableOpacity onPress={() => handleFavorite()}>
                  <Text>Favoritar ♡</Text>
                </TouchableOpacity>
              }
              {isFavorite && 
                <TouchableOpacity onPress={() => handleFavorite()}>
                  <Text>Favorito ❤️</Text>
                </TouchableOpacity>
              }
            </View>}
            {editing && <TextInput style={StylesRecipeDetailsPage.InputAreaOneLine}
                defaultValue={recipeName}
                multiline={false}
                textAlignVertical={'top'}
                autoCorrect={true}
                onChangeText={(text) => setRecipeName(text)}
              />}
            {!editing && <Image style={StylesRecipeDetailsPage.Image} source={{uri:recipeImgUrl}}/>}
            {editing && <Image style={StylesRecipeDetailsPage.ImageEditing} source={{uri:recipeImgUrl}}/>}
            {editing && <TextInput style={StylesRecipeDetailsPage.InputAreaOneLine}
                defaultValue={recipeImgUrl}
                multiline={false}
                textAlignVertical={'top'}
                autoCorrect={true}
                onChangeText={(text) => setRecipeImgUrl(text)}
              />}
          </View>
          <View style = {StylesGeneric.LineGeneric} />
          <View style={StylesRecipeDetailsPage.ContentSection}>
            <Text style={StylesGeneric.GenericTitle}>Ingredientes 📋</Text>
            <ScrollView style={StylesRecipeDetailsPage.ScrollViewText}>
              {!editing && <Text style={StylesGeneric.LabelGeneric}>{recipeIngredients}</Text>}
              {editing && <TextInput style={StylesRecipeDetailsPage.InputAreaContent}
                defaultValue={recipeIngredients}
                multiline={true}
                textAlignVertical={'top'}
                autoCorrect={true}
                onChangeText={(text) => setRecipeIngredients(text)}
              />}
            </ScrollView>
          </View>
          <View style = {StylesGeneric.LineGeneric} />
          <View style={StylesRecipeDetailsPage.ContentSection}>
            <Text style={StylesGeneric.GenericTitle}>Modo de Preparo 🍴</Text>
            <ScrollView style={StylesRecipeDetailsPage.ScrollViewText}>
              {!editing && <Text style={StylesGeneric.LabelGeneric}>{recipeInstructions}</Text>}
              {editing && <TextInput style={StylesRecipeDetailsPage.InputAreaContent}
                defaultValue={recipeInstructions}
                multiline={true}
                textAlignVertical={'top'}
                autoCorrect={true}
                onChangeText={(text) => setRecipeInstructions(text)}
              />}
            </ScrollView>
          </View>
          {editing && <View style={{alignItems: 'center'}}>
            <Text style={StylesRecipeDetailsPage.LabelAlert}>{errorMessage}</Text>
          </View>}
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={StylesRecipeDetailsPage.BottomSection}>
          <View style={{flex: 1}}>
            <GenericGoBackComponent/>
          </View>
          {userIsOwner && <View style={{flex: 1, alignItems: 'flex-end'}}>
            <View style={{flexDirection: 'row', marginRight: 20}}>
              {!editing && <TouchableOpacity style={StylesGeneric.GenericButtonGray} onPress={() => setEditing(!editing)}>
                <Text style={StylesGeneric.GenericWhiteButtonText}>Editar</Text>
              </TouchableOpacity>}
              {editing && <TouchableOpacity style={StylesGeneric.GenericButtonGray} onPress={() => cancelEditing(!editing)}>
                <Text style={StylesGeneric.GenericWhiteButtonText}>Cancelar</Text>
              </TouchableOpacity>}
              {editing && <TouchableOpacity style={StylesGeneric.GenericButtonOrange} onPress={() => handleUpdate()}>
                <Text style={StylesGeneric.GenericWhiteButtonText}>Salvar</Text>
              </TouchableOpacity>}
            </View>
          </View>}
        </View>
      </TouchableWithoutFeedback>
    </BodyComponent>

    </>
  );
}

export default RecipeDetailsPage;