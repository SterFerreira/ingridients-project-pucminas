import { View, Text, TextInput,TouchableOpacity,Image, KeyboardAvoidingView} from 'react-native';
import HeaderComponent from './../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { PostRecipes } from '../services/recipes-service';
import { useState } from 'react';
import StylesPostRecipePage from '../styles/StylesPostRecipePage';
import StylesGeneric from '../styles/StylesGeneric';
import { useUser } from './../contexts/UserContext';

const PostRecipePage = () => {
  const {userId} = useUser();

  const [imgUrl, setImgUrl] = useState('');
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instrucions, setInstrucions] = useState('');

  let array = [];
  let arrayOrder = [];

  const [postSuccess, setPostSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePostRecipes = () => {
    array = ingredients.split(" ").join("");
    console.log(userId);
    array = array.split(',');
    arrayOrder = array.sort();

    PostRecipes({
      imgUrl: imgUrl,
      name: title,
      ingredients: arrayOrder,
      instructions: instrucions,
      createdByUserId: userId,
      favoritedByUserIdList: []

    }).then( response => {
      if(response && response.success){
        setPostSuccess(true);
        setErrorMessage('');

        setImgUrl('');
        setTitle('');
        setInstrucions('');
        setIngredients('');
      }else{
        setPostSuccess(false);
        setErrorMessage(response.data);

        console.log("Post recipe failed");
        console.log(response);
      }
    })
    

  }
  return (
  <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <View style={{flex: 3, alignItems:'center' }}>
          <Text style={StylesGeneric.GenericTitle}>PUBLIQUE SUA RECEITA</Text>
          {imgUrl != '' && <Image style={StylesPostRecipePage.logo} source={{uri:imgUrl}}/>}
          {imgUrl == '' && <Image style={StylesPostRecipePage.logo} source={require('../assets/images/Ramen.png')}/>}
        </View>
        <View style={{flex: 7}}>
          <TextInput
          style={StylesPostRecipePage.inputImgUrl}
          placeholder="URL da imagem"
          autoCorrect={true}
          onChangeText={(text) => setImgUrl(text)}
          />
        
          <View>
            <Text style={StylesPostRecipePage.Label}>Título da Receita</Text>
            <TextInput
              style={StylesPostRecipePage.inputArea}
              placeholder ="Bolo de morango" 
              autoCorrect={true}
              onChangeText={(text) => setTitle(text)}
            />
          </View>  
          <View>
            <Text style={StylesPostRecipePage.Label}>Ingredientes</Text>  
            <TextInput
              style={StylesPostRecipePage.inputArea}
              placeholder="Banana, farinha de tringo, ovos ..."
              autoCorrect={true}
              onChangeText={(text) => setIngredients(text)}
            />
          </View>
          <View>  
            <Text style={StylesPostRecipePage.Label}>Modo de Preparo</Text>
            <TextInput
              style={StylesPostRecipePage.inputArea}
              placeholder="Misture tudo e coloque no forno..."
              autoCorrect={true}
              onChangeText={(text) => setInstrucions(text)}
            />
          </View>

        </View> 
        <View style={{flex: 1}}>
          <View style={{marginBottom: 15, alignItems: 'center'}}>
            {postSuccess && <Text>A receita foi enviada com sucesso!!!</Text>}
            {!postSuccess && <Text style={StylesPostRecipePage.LabelAlert}>{errorMessage}</Text>}            
          </View>
          <TouchableOpacity style={StylesPostRecipePage.PostRecipeLink} onPress={()=> handlePostRecipes()} > 
            <Text style={StylesGeneric.LinkGeneric}>Publicar Receita</Text>
          </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>

    </BodyComponent>
  </>
  );
}

export default PostRecipePage;
