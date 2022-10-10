import { StyleSheet, View, Image, Text } from 'react-native';

const PinPhoto = ( props ) => {
    // const image = props.image;
    // const title = props.title;

    const { image, title } = props;

    return (
        <View style={ styles.Pinphoto}>
        <Text style={styles.title}>{title}</Text>
        < Image  source = {{ uri:image}}
        style = { styles.Image }
        />
        </View>
    )
}

export default PinPhoto;


const styles = StyleSheet.create({
    Pinphoto: {
     width: '50%'
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      margin: 10,
      color:'white'
    },
    Image: {
      width: '30%',
      height: 200, 
      borderRadius: 23
    }
  });
  