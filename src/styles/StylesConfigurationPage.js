import { StyleSheet } from 'react-native';

const StylesConfigurationPage = StyleSheet.create({
ScreenCard: {
   flex: 1, 
   backgroundColor: '#FFFEFE', 
   margin: 13, 
   borderRadius: 5, 

   elevation: 10,
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 1,
   },
   shadowOpacity: 0.22,
   shadowRadius: 2.22,
},
SectionContent: {
   flex: 1,
   margin: 20,
},
SectionButtonsContainer: {
   marginHorizontal: 20,
   height: 40,
   alignItems: 'flex-end',
   justifyContent: 'flex-end',
   flexDirection: 'row',
},
SectionButtons: {   
   justifyContent: 'center',
   flexDirection: 'row',
},
SectionBottom: {
   height: 40,
   alignItems: 'center',
   justifyContent: 'center',
},
DeleteRegion:{
   margin: 5,
},
DeleteRegionContainer: {
   flex: 1,
   height: '100%',
   alignItems: 'flex-start',
   justifyContent: 'center',
},
DeleteRegionText:{
   color:'red',
   fontSize:12,
   fontWeight: '400',
},
CentralizedModalDelete: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",

   //backgroundColor: 'red'
 },
 ModalDelete: {
   margin: 20,
   width: '60%',
   backgroundColor: "white",
   borderRadius: 10,
   padding: 20,
   alignItems: "center",
   shadowColor: "#000",
   shadowOffset: {
     width: 0,
     height: 2
   },
   shadowOpacity: 0.25,
   shadowRadius: 4,
   elevation: 5
 },
 ModalDeleteConfirmRegion: {
   height: 30,
   alignSelf: "center",
   alignItems: "center",
   justifyContent: "center",
 },

 CancelDeleteButton:{
   backgroundColor: '#E05D25',
   alignItems: 'center',
   justifyContent: 'center',
   height: 30,
   width: 100,
   borderRadius:5,
},

});

export default StylesConfigurationPage;