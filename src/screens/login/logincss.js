import { StyleSheet, Dimensions, } from 'react-native';


var { height } = Dimensions.get("window");

var box_count = 5;
var box_height = height / box_count;


const styles = StyleSheet.create({
  container: {
    flex: 1,  
    alignContent: 'center' ,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 35

  },

  img : {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100
  },
  imgContainer: {
    flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
height: '100%'
  },

  button: {
    width: 200,
    marginTop: 20,
    backgroundColor: "green",
    padding: 15,
    borderRadius: 50,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },


 

   
 

  }
)
export default styles;