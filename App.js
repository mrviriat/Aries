import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Modal from './Modal';
import Offer from './offer';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';


export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });
  useEffect(() => {
    getData();
  }, [])
  const [CH, setCH] = useState();
  const getData = () => {
    setCH(
      date.map(item => ({
        day: item,
        lessons: [
          // {
          //   name: 'химия',
          //   students: [{
          //     name:
          //     isHere:
          //     desc:
          //   }]
          // },
          // {
          //   name: 'физра',
          //   students: [{
          //     name:
          //     isHere:
          //     desc:
          //   }]
          // }
        ]
      }))
    );
  }
  const onButtonPress = () => {
    Alert.prompt(
      "Enter your class",
      "Write the lesson name",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: className => onClickHandler(className)
        }
      ]
    );
  };
  const onClickHandler = (name) => {
    var changeble = CH.slice();
    changeble[selectedId].lessons = [...changeble[selectedId].lessons, { name: name, students: data_students }]
    setCH(changeble);
  }
  const deleteStudent = (select, index) => {
    var changeble = CH.slice();
    Alert.prompt(
      "Enter descriprion",
      "write the reason why your student is appcent",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: desc => {
            changeble[selectedId].lessons[select].students[index].isHere = false;
            changeble[selectedId].lessons[select].students[index].desc = desc;
            setCH(changeble);
          }
        }
      ]
    );


  }
  const data_students = [{ name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  { name: 'Иван Иванов', isHere: true, desc: '' },
  ]


  const date = ['01.01', '02.01', '03.01', '04,01', '05.01', '06.01', '07.01']
  const [Lessons, setLessons] = useState([
    'Первая пара',
    'Вторая пара',
    'Третья пара',
    'Четвёртая пара',
    'Пятая пара'
  ])
  // const Item = ({ title }) => (
  //   <View style={{ width: 98, height: 50, backgroundColor: '#D9D9D9', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
  //     <Text style={{ fontFamily: 'Inter', fontSize: 15 }}>{title}</Text>
  //   </View>
  // );
  const [selectedId, setSelectedId] = useState(0);
  const Item = ({ title, onPress, backgroundColor }) => (
    <TouchableOpacity onPress={onPress} style={[{ backgroundColor }, { width: 98, height: 50, borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }]}>
      <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 15 }}>{title}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({ item, index }) => {
    const backgroundColor = index === selectedId ? '#9F9F9F' : '#D9D9D9';
    return (
      <Item
        title={item}
        onPress={() => setSelectedId(index)}
        backgroundColor={backgroundColor}
      />
    );
  };

  const [Delete, setDelete] = useState(false)

  const handleClose = () => {
    setVisible(false);
  }
  const handleCloseOF = () => {
    setVisibleOF(false);
  }
  const handleVisibleModal = (students, index) => {
    setselectedLesson(index)
    setStudents(students);
    setVisible(true);
  }
  const handleVisibleModalOF = () => {
    setVisibleOF(true);
  }

  const DeleteLesson = (index) => {
    
    var changeble = CH.slice();
    changeble[selectedId].lessons.splice(index, 1);
    setCH(changeble);
    if (changeble[selectedId].lessons.length == 0)
    {
      setDelete(!Delete)
    }
    // changeble
    // changeble[selectedId].lessons = [...changeble[selectedId].lessons, { name: name, students: data_students }]
    // setCH(changeble);


  }

  const [visible, setVisible] = useState(false);
  const [visibleOF, setVisibleOF] = useState(false);
  const [Students, setStudents] = useState();
  const [selectedLesson, setselectedLesson] = useState();
  const Footer_Component = () => {
    return (
      <View style={
        {
          marginTop: 15,
          marginBottom: 15,
          width: 360,
          height: 110,
          backgroundColor: '#D9D9D9',
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Pressable style={{
          height: 50,
          width: 50,
          alignItems: 'center',
          justifyContent: 'center'
        }}
          onPress={onButtonPress}>
          <AntDesign name="plus" size={30} color="#007AFF" />
        </Pressable>
      </View>
    );
  }
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} >
      <SafeAreaView style={[styles.container]}>
        <View style={{ flex: 2 }}>
          <View style={
            {
              flexDirection: 'row',
              flex: 1,
              // backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingLeft: 10,
              paddingRight: 10
            }}>
            <Pressable style={{ height: 50, width: 50, alignItems: 'center', justifyContent: 'center' }} onPress={handleVisibleModalOF}>
              <FontAwesome name="pencil-square-o" size={30} color="#007AFF" />
            </Pressable>
            <Pressable style={{ height: 50, width: 50, alignItems: 'center', justifyContent: 'center' }} onPress={() => {if(CH[selectedId].lessons.length != 0){setDelete(!Delete)}}}>
              <FontAwesome name="trash-o" size={30} color="#007AFF" />
            </Pressable>
            <Pressable style={{ height: 50, width: 50, alignItems: 'center', justifyContent: 'center' }} >
              <FontAwesome name="check-square-o" size={30} color="#007AFF" />
            </Pressable>
          </View>
          <View style={
            {
              flex: 1,
            }}>
            <FlatList
              data={date}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              extraData={selectedId}

            />
          </View>
        </View>
        <View style={{ alignItems: 'center', flex: 11 }} >
          <FlatList
            data={CH[selectedId].lessons}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) =>
              <View style={{ marginTop: 15, width: 360, backgroundColor: '#D9D9D9', borderRadius: 15, }}>
                {Delete == false ? null : <Pressable onPress={() => DeleteLesson(index)} style={{zIndex: 1.1, width: 50, height: 50, alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, top: 0 }} ><Entypo name="cross" size={30} color="red" /></Pressable>}
                <Pressable style={{ flexDirection: 'row' }} onPress={() => { Delete == false ? handleVisibleModal(item.students, index) : null }}>
                  <View style={{ flex: 3, alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20 }}>
                    <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 20 }}>15:05</Text>
                    <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 20 }}>16:25</Text>
                  </View>
                  <View style={{ flex: 7 }}>
                    <Text style={{ marginTop: 10, marginLeft: 20, fontFamily: 'Inter_400Regular', fontSize: 20 }}>{item.name}</Text>
                    <Text style={{ marginBottom: 15,marginTop: 25, marginLeft: 5, fontFamily: 'Inter_400Regular', fontSize: 15, color: '#656565' }}>На занятии: {item.students.filter(x => x.isHere == true).length}{"\n"}Отсутствует: {item.students.filter(x => x.isHere == false).length}</Text>
                  </View>
                </Pressable>
              </View>
            }
            ListFooterComponent={Delete == false ? Footer_Component : null}
          />
        </View>
      </SafeAreaView>
      <Modal
        visible={visible}
        options={{ type: 'slide', from: 'bottom' }}
        duration={500}
        onClose={handleClose}
        students={Students}
        deleteStudent={deleteStudent}
        selectedLesson={selectedLesson}
      />
      <Offer
        visible={visibleOF}
        options={{ type: 'slide', from: 'bottom' }}
        duration={500}
        onClose={handleCloseOF}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  footerStyle: {
    borderTopColor: 'red',
    borderTopWidth: 2,
    borderBottomColor: 'red',
    borderBottomWidth: 2
  }
});
