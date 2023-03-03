import { StyleSheet } from 'react-native';

const StylesMainPage = StyleSheet.create({
   Pesquisar: {
      flexDirection:"row",
      justifyContent: "space-between",
      width: '60%',
      alignSelf: "center",
      paddingTop: 10,
      
      
   },
   input: {
      flex: 1,
      backgroundColor:"#d3d3d3",
      borderRadius:10,
      color:"white",
      fontSize: 18,
      paddingHorizontal: 15, 
      shadowOpacity: 5,
      shadowRadius: 10,
      
   },
   search: {
      paddingHorizontal: 15, 
   },
   Textouv: {
      fontSize: 20,
      color: "#555",
   },
   ultimo: {
      paddingTop: 65,
      paddingLeft: 20,
   },
 
   
   ReceitaUT: {
      flexDirection: "row",
      backgroundColor: "#f7a156",
      borderRadius: 15,
      margin: 20,
      width: 100,
      alignItems: "center",
      alignSelf: "center",
      marginTop: 30,
      height: 90,
      shadowOffset:{  width: 5,  height: 5,  },
      shadowColor: 'black',
      shadowOpacity: 0.5,   
   },
 
  Flat: {
      alignSelf: "center",
  },

  UltimoV:{
      fontSize: 15,
      marginLeft: 10,
      marginTop: 10,
  },
  
   ImagemPostada: {
      width: 80,
      height: 70,
      alignSelf: "center",
      marginLeft: 10,
      borderRadius: 10
   },

   ReceitaPostada: {
      flexDirection: "row",
      backgroundColor: "#f7a156",
      borderRadius: 15,
      margin: 20,
      width: 240,
      alignSelf: "center",
      marginTop: 30,
      height: 90,
      shadowOffset:{  width: 5,  height: 5,  },
      shadowColor: 'black',
      shadowOpacity: 0.5,     
      
   },

   TextPostada: {
      paddingLeft: 20,
      width: 280,
      alignSelf: "center",
   },
   
   testeImg: { 
      width: 80,
      height: 75,
      borderRadius:7,
      marginTop: 6,
      marginRight: 20,
    
   },

   testeT: {
      color: "#FFFF",
      fontWeight: '500',
      marginLeft: 9,
      marginTop: 5,
   },

   checkboxContainer: {
      alignSelf: "center",
      flexDirection: "row",
      marginBottom: 10,
      marginTop:17
    },
    checkbox: {
      alignSelf: "center",
    }
});

export default StylesMainPage;