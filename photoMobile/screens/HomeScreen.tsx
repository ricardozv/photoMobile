import { StyleSheet, View, ScrollView } from 'react-native';
import { RootTabScreenProps } from '../types';
import  PinPhoto  from '../components/PinPhoto';

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView>
    <View style ={styles.container}>
      
      <PinPhoto
        pinPhoto = {{
        title:'Beer 01',
        image:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg' 
      }}
      />
      <PinPhoto
        pinPhoto = {{ 
      title:'Beer 02',
      image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg'
      }}
      />
      <PinPhoto
        pinPhoto = {{ 
      title:'Beer 02',
      image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg'
      }}
      />
      <PinPhoto
        pinPhoto = {{ 
      title:'Beer 02',
      image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg'
      }}
      />
    </View>
    </ScrollView>
    
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
