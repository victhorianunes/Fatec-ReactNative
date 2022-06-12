import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';

export default function Pessoal() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            Meu Perfil
          </Text>
          <Image
            style={styles.img}
            source={{
              uri: 'https://scontent.fssz2-1.fna.fbcdn.net/v/t31.18172-8/30168159_10204880807697787_8010686846951825097_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFRWSlG2gZ75hZ7r9RzMy4Ci69DKQj5NS2Lr0MpCPk1LcmMJ9iq7LAdXkN9lr-4M3I&_nc_ohc=crSVYkOWU28AX9xeke3&tn=PaKPGVFfGbn-26lH&_nc_ht=scontent.fssz2-1.fna&oh=00_AT9giRqmFRGloDlv8Baig2dz9I9N_tlW2GZzHsgoAnOAdQ&oe=62CC18BD',
            }}
          />
          <Text style={styles.text}>Nome: Victhoria Nunes</Text>
          <Text style={styles.text}>Idade: 28 anos</Text>
          <Text style={styles.text}>Profissão: Motion Designer</Text>




        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
    color: "#EE7B30"
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
  }




}
