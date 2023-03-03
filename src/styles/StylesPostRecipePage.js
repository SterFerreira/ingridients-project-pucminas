import { StyleSheet } from 'react-native';

const StylesPostRecipePage = StyleSheet.create({
   logo:{
       flex:1, 
       width:175, 
       height:150,
       borderRadius: 7,
       overflow: 'hidden',
       borderWidth: 1,
       resizeMode: 'cover',
       shadowOffset: {
         width: 0,
         height: 3,
       },
        shadowOpacity: 0.40,
       shadowRadius: 4.84,
       shadowColor: "#000",
       marginTop:2,  
   },
  inputArea: {
   width: '90%',
   height: 70,
   alignItems: 'center',
   alignSelf: 'center',
   borderRadius:7,
   shadowOffset: {
     width: 0,
     height: 3,
   },
    shadowOpacity: 0.40,
   shadowRadius: 3.84,
   shadowColor: "#000",
   elevation: 5,
   backgroundColor: '#fff',
 
 },
 inputImgUrl: {
   width: '90%',
   height: 40,
   alignItems: 'center',
   alignSelf: 'center',
   borderRadius:7,
   shadowOffset: {
     width: 0,
     height: 3,
   },
    shadowOpacity: 0.40,
   shadowRadius: 3.84,
   shadowColor: "#000",
   elevation: 5,
   backgroundColor: '#fff',
   marginTop: 10
 },
 PostRecipeLink:{
   flexDirection: 'row',
   alignSelf: 'center'
 },
 Label:{
   fontSize: 15,
   color: '#000000',
   alignSelf: 'center',
   marginVertical: 10
 },
 LabelAlert: {
  fontSize: 14,
  fontWeight: '400',
  color: 'red',
  alignSelf: 'center',
},
 })

export default StylesPostRecipePage;