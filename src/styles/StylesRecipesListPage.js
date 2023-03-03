import { StyleSheet } from 'react-native';

const StylesRecipesListPage = StyleSheet.create({
   Screen:{
      flex: 1
   },
   SectionRecipeList: {
      flex: 7,
      backgroundColor: '#E5E5E5',
      alignItems: 'center',
   },
   SectionBottom: {
      flex: 1,
      backgroundColor: '#E5E5E5',
      alignItems: 'center',
      justifyContent: 'center',
   },
   Title:{
      fontSize: 13,
      color: '#000000',
      padding: 21,
      textTransform: 'uppercase'
   }

});

export default StylesRecipesListPage;