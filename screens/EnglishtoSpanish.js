import React, {Component} from "react";
import {Text, View, TextInput, TouchableOpacity, StyleSheet, Image} from "react-native";
import {Header} from 'react-native-elements'
import { RFValue } from "react-native-responsive-fontsize";
import * as Speech from 'expo-speech';

export default class EngtoSp extends Component{
  constructor(props) {
    super(props);
    this.state={
      word: "",
      translation: [],
      isSearchPressed: false
    }
  }

  getWord=(word)=>{

    var url = "https://www.dictionaryapi.com/api/v3/references/spanish/json/"+word+"?key=70b2872b-208f-4368-af72-9d093c7259ef"
    alert("Fetching URL");
    return fetch (url). 
    then ((data)=>{
      return data.json()
      })
      .then((response)=>{
        //alert("Word Found!")
        console.log(response)
        console.log(word)
        var translation = response.[1].shortdef
     console.log(translation)
      this.setState({

      word : word,
        translation : translation
    })
     //console.log(this.state.word)
    //console.log(this.state.translation)
      })
  }

  speak=()=>{
    var sound = this.state.translation[0]
    Speech.speak(sound);
  }

  render(){
    return (
      <View style={styles.container}>
      <Header
      backgroundColor={'cyan'}
      centerComponent={{text:'English to Spanish Translation', style:{color:'#000', fontSize: RFValue(11), fontWeight: "bold"}}}
      />

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image 
      style={styles.timage} source={{
            uri:
              'https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/07f6a3126bd98f3207cb3b9dc59fc522',
          }}/>
          </View>
      
          
    <View style={styles.inputopacity}>
      <TextInput style={styles.inputBox}
      onChangeText = {text=>{
        this.setState({
        isSearchedPressed:false,
        text:text,
         word: text
        })       
        }}
        
      />

      <TouchableOpacity style={styles.goButton} 
      onPress = {()=>{
       this.setState({isSearchedPressed:true});
       this.getWord(this.state.text);
    }} >
    <Text style={styles.buttonText}>Search</Text>
   </TouchableOpacity>
   </View>

   <Text>
            {
              this.state.isSearchPressed && this.state.word === "Loading..."
              ? this.state.word
              : ""
            }

          </Text>
            {
              this.state.word !== "Loading..." ?
              (

           
                <View style={{justifyContent:'center', marginLeft:10 }}>
                    <Text>
                      Word : {this.state.word}
                    </Text>
                  <View style={{flexDirection:'row',flexWrap: 'wrap'}}>
                    <Text>
                      Translation : {this.state.translation}
                    </Text>
                    <TouchableOpacity onPress={this.speak}>
                    <Image source={require("../assets/speaker.png")} style={styles.touchableImage}></Image>
      </TouchableOpacity>
                  </View>
                </View>
              )
              : null
            } 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  inputBox: {
    marginTop: 25,
    width: '70%',
    height: 50,
    alignSelf: "center",
    borderWidth: 2,
    textAlign: 'center',
    fontSize: RFValue(15),
    fontWeight: 'bold'
  },
  goButton: {
    backgroundColor:'cyan',
    marginTop:25, 
    //marginLeft: 200,
    width:110,
    height:50,
    alignItems:"center",
    justifyContent:"center"
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20
  },
  timage: {
    width: 150,
    height: 150,
    marginTop: 25
  },
  inputopacity:{
    flexDirection: "row",
    flexWrap: 'nowrap',
    marginBottom: 50
  },
  touchableImage: {
    width: 60,
    height: 50,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
    marginLeft: -95
  }
});
