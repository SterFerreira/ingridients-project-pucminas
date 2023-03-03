import { View, Text, StyleSheet } from 'react-native';

const GenericButtonComponent = ({children}) => {
    return (
      <View style={StylesGenericButton.GenericButton}>
        <Text style={StylesGenericButton.GenericButtonText}>{children}</Text>
      </View>
    );
  }

const StylesGenericButton = StyleSheet.create({
  GenericButton:{
    backgroundColor: '#E05D25',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 100,
    borderRadius:2,
    alignSelf: 'center',
    marginBottom: 20
 },

 GenericButtonText:{
    color:'#FFFFFF',
    fontSize:12
 }
});

export default GenericButtonComponent;