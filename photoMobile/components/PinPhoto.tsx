import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';
import { useState } from 'react';

const PinPhoto = ( props ) => {

    const { image, title } = props.pinPhoto;
    const [ startLike, setStartLike ] = useState();
   

    const like = () => {

    };


    return (
        <View style={ styles.Pinphoto}>
            <Text style={styles.title}>{title}</Text>
              < Image  
                  source = {{ uri:image}}
                  style = { [styles.Image, {aspectRatio: startLike}] }
          />
          <View>
          <Pressable onPress={like} style = { styles.heartButton}> 
              <AntDesign 
                  name='hearto' 
                  size={24} 
                  color="white" 
              />
          </Pressable>
          </View>
           

        </View>
    )
}

export default PinPhoto;


const styles = StyleSheet.create({
    Pinphoto: {
     width: '100%'
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      margin: 10,
      color:'white'
    },
    Image: {
      width: '100%',
      height: 200, 
      borderRadius: 23,
     // aspectRatio: 1 / 1
    },
    heartButton: {
      backgroundColor: 'black', 
      position: 'absolute',
      bottom: 10,
      right: 10, 
      padding: 5,
      borderRadius: 50
    }
  });
  