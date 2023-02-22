import React, { useEffect, useRef } from 'react'
import { StyleSheet, Button, View, Dimensions, Animated, Easing, FlatList, Text, SafeAreaView, Pressable } from 'react-native'
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
export default function Modal({ visible, options, duration, onClose, students, deleteStudent, selectedLesson }) {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });
  const { height } = Dimensions.get('screen');
  const startPointY = options?.from === 'top' ? -height : height;
  const transY = useRef(new Animated.Value(startPointY));

  useEffect(() => {
    if (visible) {
      startAnimation(0);
    } else {
      startAnimation(startPointY);
    }
  }, [visible]);

  const startAnimation = (toValue) => {
    Animated.timing(transY.current, {
      toValue,
      duration,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true
    }).start();
  }

  const onPress = () => {
    onClose();
  }

  const generateBackgroundOpacity = () => {
    if (startPointY >= 0) {
      return transY.current.interpolate({
        inputRange: [0, startPointY],
        outputRange: [0.8, 0],
        extrapolate: 'clamp'
      })
    } else {
      return transY.current.interpolate({
        inputRange: [startPointY, 0],
        outputRange: [0, 0.8],
        extrapolate: 'clamp'
      })
    }
  }

  
  return (
    <>
      <Animated.View pointerEvents='none' style={[styles.outerContainer, { opacity: generateBackgroundOpacity() }]} />
      <Animated.View style={[styles.container, { transform: [{ translateY: transY.current }] }]}>
        <SafeAreaView style={styles.innerContainer}>
          <Button title='Close Modal' onPress={onPress} />
          <FlatList

            data={students}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => deleteStudent(selectedLesson, index)}>
                {item.isHere == true ? <Text style={{  fontFamily: 'Inter_400Regular', fontSize: 20, textAlign: "center", }}>{index+1}. {item.name}</Text>
                : <Text style={{color:'#727272', textDecorationLine: 'line-through', fontFamily: 'Inter_400Regular', fontSize: 20, textAlign: "center", }}>{index+1}. {item.name}</Text>}
              </Pressable>
            )
            }
          />
        </SafeAreaView>
        {/* <View>
          <FlatList
        
            data={students}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View>
                <Text style={{ textAlign: "center", }}>{item}</Text>
              </View>
            )
            }
          />
        </View> */}
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2b4369',
  },
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  innerContainer: {

    width: '100%',
    height: '80%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
})