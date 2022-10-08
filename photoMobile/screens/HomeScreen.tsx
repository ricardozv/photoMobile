import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <View style={ styles.smallContainer}>
      <Text style={styles.title}>Not </Text>
      < Image  source = {{ uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg'}}
      style = { styles.Image }
      />
      </View>
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
    width: '100%',
    height: 200, 
    borderRadius: 23
  },
  smallContainer: {
    width: '100%'
  }
});
