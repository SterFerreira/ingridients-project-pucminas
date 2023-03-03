StylesRegisterPage

import { StyleSheet } from 'react-native';

const StylesRegisterPage = StyleSheet.create({
    container: {
       // flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#E05D25',
       /* width: 105,
        alignItems:'center',
        justifyContent:'center',
        height: 19,
        borderRadius:7 */
        alignItems: 'center',
        justifyContent: 'center',
        height: 62,
        width: '90%',
        borderRadius:7,
        alignSelf: 'center',
        marginBottom: 20
    },
    inputArea: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#ddd',
        borderRadius: 5,
        height: 50,
        alignItems: 'center',
        margin: 10,
        borderColor: '#E05D25',
        borderWidth: 2,
        marginBottom: 30,
     },
     input: {
         width: '85%',
         height: 50,
         color: 'black',
         padding: 8,
         fontSize: 18,
     },
     icon: {
         width: '15%',
         height: 50,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#E05D25'
     },
     title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
      },
      text: {
        color: '#00000075'
      },
    ImageSection: {
        flex: 99
     },
     Image:{
        flex: 1,
        width: 436,
        height: 175,
        resizeMode: 'cover'
     }
})

export default StylesRegisterPage;