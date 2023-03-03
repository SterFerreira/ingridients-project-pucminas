import { TouchableOpacity, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { allInitialsUpperCase } from '../utils/StringFormaterHelper';
import { useNavigation } from '@react-navigation/native';


const RecipeListComponent = (props) => {
  const screenWidth = Dimensions.get('window').width;
  const columns = Math.floor(screenWidth / 100);

  const navigation = useNavigation();

  return (
    <FlatList
      data={props.data}
      keyExtractor={(item)=>item.id}
      numColumns={columns}
      
      renderItem={({item})=> {
          return(
          <TouchableOpacity style={StylesRecipeList.RecipeContainer} onPress={() => {navigation.navigate('RecipeDetailsPage', {recipeId: item.id})}}>   
              <Text numberOfLines={1} style= {StylesRecipeList.RecipeContainerText}>{allInitialsUpperCase(item.name)}</Text>
              <Image style= {StylesRecipeList.RecipeContainerImage} source={{uri:item.imgUrl}}/>
          </TouchableOpacity>
          );
      }}
    />
  );
}

const StylesRecipeList = StyleSheet.create({
  RecipeContainer:{
    height: 96,
    width: 96,
    margin: 5,
    alignItems: 'center',
 }, 

 RecipeContainerText:{
    color:'#0D0000',
    fontSize:12,
    marginBottom: 6,
 },

 RecipeContainerImage: {
    width: 80,
    height: 60,
    borderRadius:7,
 }
});

export default RecipeListComponent;