import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Button, View, Dimensions, Animated, Easing, FlatList, Text, SafeAreaView, Pressable, TouchableOpacity } from 'react-native'
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
export default function Offer({ visible, options, duration, onClose }) {
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
        setTimeout(function(){setReady(false)}, duration);

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

    const [Ready, setReady] = useState(false)
    return (
        <>
            <Animated.View pointerEvents='none' style={[styles.outerContainer, { opacity: generateBackgroundOpacity() }]} />
            <Animated.View style={[styles.container, { transform: [{ translateY: transY.current }] }]}>
                <SafeAreaView style={styles.innerContainer}>
                    <TouchableOpacity onPress={() => setReady(true)} style={{flex:2, alignItems: 'center',  borderBottomWidth: 1, borderColor: '#007AFF' }}>
                        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 20 ,   marginTop: 60}}>Сформировать отчёт</Text>
                        {Ready == true ? <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 15 ,color: 'green', marginTop: 30}}>Сформирован</Text> : 
                        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 15, color: '#FF0000', marginTop: 30 }}>Не сформирован</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress}  style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 20 }}>Отправить отчёт</Text>
                    </TouchableOpacity>
                </SafeAreaView>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContainer: {

        width: '80%',
        height: '25%',
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 20,

    }
})