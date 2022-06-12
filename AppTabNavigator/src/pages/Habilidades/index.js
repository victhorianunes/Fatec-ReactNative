import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function Habilidades() {







  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            Habilidades
          </Text>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.text}>Adobe After Effects</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
            </View>

            <Text style={styles.text}>Adobe Photoshop</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
            </View>

            <Text style={styles.text}>HTML</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
            </View>

            <Text style={styles.text}>CSS</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
            </View>

            <Text style={styles.text}>Adobe Premiere</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
            </View>

            <Text style={styles.text}>Adobe Ilustrattor</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
            </View>

            <Text style={styles.text}>Element 3D</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
            </View>

            <Text style={styles.text}>Cinema 4D</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
            </View>

            <Text style={styles.text}>Blender</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
            </View>

            <Text style={styles.text}>Adobe XD</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#DFAA17" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
              <Icon name='controller-stop' size={30} color="#2F323A" />
            </View>
          </View>
        </View>
      </ScrollView >
    </SafeAreaView >
  )
};


const styles = {

  container: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: "#DFAA17"
  },

  text: {
    fontSize: 20,
    marginTop: 5,
    textAlign: 'center'

  },

  img: {
    width: 200,
    height: 200,
    margin: 15,
    alignSelf: 'center',
    borderRadius: 200
  },






}
