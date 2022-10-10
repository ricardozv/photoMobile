import { StyleSheet, Image, View } from 'react-native';
import { RootTabScreenProps } from '../types';
import  PinPhoto  from '../components/PinPhoto';

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
    <PinPhoto
      title = {'Beer 01'}
      image = {'https://imagekank.s3.amazonaws.com/haineken.png'} 
    />
    <PinPhoto 
    title = {'Beer 02'}
    image = {'https://imagekank.s3.amazonaws.com/magnifica_269ml.png'}
    />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  Image: {
    width: '30%',
    height: 200, 
    borderRadius: 23
  },
  smallContainer: {
    width: '100%'
  }
});
