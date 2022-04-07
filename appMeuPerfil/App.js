import React from 'react';
import { Text, Image, ScrollView, Linking, View, Button} from 'react-native';
 
function App(){
  return(
     <ScrollView>
      <Text style={{color: '#FFF',
                    backgroundColor: 'gray',
                    fontSize: 25,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 10}}> 
                    
        Meu Perfil 
      </Text>

      <Image
        source={{ uri: 'https://scontent.fssz2-1.fna.fbcdn.net/v/t31.18172-8/30168159_10204880807697787_8010686846951825097_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFRWSlG2gZ75hZ7r9RzMy4Ci69DKQj5NS2Lr0MpCPk1LcmMJ9iq7LAdXkN9lr-4M3I&_nc_ohc=i49t_XphiYcAX_velJS&tn=PaKPGVFfGbn-26lH&_nc_ht=scontent.fssz2-1.fna&oh=00_AT_nYMZSKTKWrHvKE55AXFXEJODJpfU0GTAJaRAG7wevmg&oe=626D2CBD'}}
        style={{ width: 250, height: 250, alignSelf: 'center'}} />
      
      <Text style={{textAlign: 'center'
      ,
                    fontSize: 20,
                    margin: 5

      }}>
        Victhória Nunes
      </Text>

      <Text style={{color: '#FFA500',
                    // backgroundColor: '#C0C0C0', 
                    fontSize: 25,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 10}}>
                      
        Dados Pessoais
      
      </Text>

      <Text style={{color: '#000',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'left',
                    marginLeft: 10}}>
                      
        Nome completo: 
        </Text>

        <Text style={{color: '#000',
                    fontSize: 20,
                    textAlign: 'left',
                    marginLeft: 10,
                    marginBottom: 10}}
                    >
        Victhória Andrea Rocha Nunes
        </Text>

        <Text style={{color: '#000',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'left',
                    marginLeft: 10}}>
                      
        Registro Acadêmico: 
        </Text>

        <Text style={{color: '#000',
                    fontSize: 20,
                    textAlign: 'left',
                    marginLeft: 10,
                    marginBottom: 10}}>
        0050831921030
        </Text>

        <Text style={{color: '#000',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'left',
                    marginLeft: 10}}>
                      
        Idade: 
        </Text>

        <Text style={{color: '#000',
                    fontSize: 20,
                    textAlign: 'left',
                    marginLeft: 10,
                    marginBottom: 10}}>
        28 anos
        </Text>

        <Text style={{color: '#000',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'left',
                    marginLeft: 10}}>
                      
        Profissão: 
        </Text>

        <Text style={{color: '#000',
                    fontSize: 20,
                    textAlign: 'left',
                    marginLeft: 10,
                    marginBottom: 10}}>
        Motion Designer
        </Text>
      
        <Text style={{color: '#FFA500',
                    // backgroundColor: '#C0C0C0', 
                    fontSize: 25,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 10}}>
                      
        Formação Acadêmica
        </Text>

        <Text style={{color: '#000',
                    fontSize: 20,
                    textAlign: 'left',
                    marginLeft: 10,
                    marginBottom: 10}}>
        Cursando último semestre de Sistemas para Internet - FATEC Rubens Lara </Text>

        <Text style={{color: '#FFA500',
                    // backgroundColor: '#C0C0C0', 
                    fontSize: 25,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 10}}>
                      
        Habilidades
        </Text>
        <Text style={{color: '#000',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'left',
                    marginLeft: 10}}>
                      
        Adobe After Effects  
        </Text>
        <Text style={{color: '#FFA500',
                    fontSize: 25,
                    textAlign: 'left',
                    marginLeft: 10,
                    marginBottom: 10}}>
        ■ ■ ■ ■ ■ 
        </Text>
                
        <Text style={{color: '#000',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'left',
                    marginLeft: 10}}>
                      
        Adobe Photoshop  
        </Text>
        <View style={{flexDirection: 'row'}}>

        <Text style={{color: '#FFA500',
                    fontSize: 25,
                    textAlign: 'left',
                    marginLeft: 10,
                    marginBottom: 10}}>
        ■ ■ ■ ■
        </Text>
        <Text style={{color: '#C0C0C0',
                    fontSize: 25,
                    // textAlign: 'left',
                    marginLeft: 6,
                    marginBottom: 10}}>
        ■ 
        </Text>
        </View>
        <Text style={{color: '#000',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'left',
                    marginLeft: 10}}>
                      
        HTML 
        </Text>

        <View style={{flexDirection: 'row'}}> 
        
        <Text style={{color: '#FFA500',
                    fontSize: 25,
                    textAlign: 'left',
                    marginLeft: 10,
                    marginBottom: 10}}>
        ■ ■ ■ ■ 
        </Text>
        <Text style={{color: '#C0C0C0',
                    fontSize: 25,
                    // textAlign: 'left',
                    marginLeft: 6,
                    marginBottom: 10}}>
        ■ 
        </Text>
        

        </View>
       

        <Text style={{color: '#000',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'left',
                    marginLeft: 10}}>
                      
        CSS  
        </Text>

        <View style={{flexDirection: 'row'}}>
        <Text style={{color: '#FFA500',
                    fontSize: 25,
                    textAlign: 'left',
                    marginLeft: 10,
                    marginBottom: 10}}>
        ■ ■ ■ ■ 
        </Text>
        <Text style={{color: '#C0C0C0',
                    fontSize: 25,
                    // textAlign: 'left',
                    marginLeft: 6,
                    marginBottom: 10}}>
        ■ 
        </Text>
        </View>

        <Text style={{color: '#000',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'left',
                    marginLeft: 10}}>
                      
        Adobe Premiere  
        </Text>

        <View style ={{flexDirection: 'row'}}>

        <Text style={{color: '#FFA500',
                    fontSize: 25,
                    textAlign: 'left',
                    marginLeft: 10,
                    marginBottom: 10}}>
        ■ ■ ■  
        </Text>

        <Text style={{color: '#C0C0C0',
                    fontSize: 25,
                    // textAlign: 'left',
                    marginLeft: 6,
                    marginBottom: 10}}>
        ■ ■
        </Text>

        </View>

        <Text style={{color: '#000',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'left',
                    marginLeft: 10}}>
                      
        Adobe Ilustrator  
        </Text>

        <View style={{flexDirection: 'row'}}> 

        <Text style={{color: '#FFA500',
                    fontSize: 25,
                    textAlign: 'left',
                    marginLeft: 10,
                    marginBottom: 10}}>
        ■ ■ ■ 
        </Text>
        <Text style={{color: '#C0C0C0',
                    fontSize: 25,
                    // textAlign: 'left',
                    marginLeft: 6,
                    marginBottom: 10}}>
        ■ ■
        </Text>
        </View>

        <Text style={{color: '#000',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'left',
                    marginLeft: 10}}>
                      
        Element 3d  
        </Text>

        <View style={{flexDirection: 'row'}}>

        <Text style={{color: '#FFA500',
                    fontSize: 25,
                    textAlign: 'left',
                    marginLeft: 10,
                    marginBottom: 10}}>
        ■ ■ 
        </Text>
        <Text style={{color: '#C0C0C0',
                    fontSize: 25,
                    // textAlign: 'left',
                    marginLeft: 6,
                    marginBottom: 10}}>
        ■ ■ ■
        </Text>

        </View>

        <Text style={{color: '#FFA500',
                    // backgroundColor: '#C0C0C0', 
                    fontSize: 25,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 10}}>
                      
        Portfólio
        </Text>

        <View style={{flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      marginBottom: 40,
                      marginTop: 10}}>
      
        <Button   title="Instagram"
                  color ='#FFA500'
                  onPress={() => {Linking.openURL('https://www.instagram.com/motionvic/');}}/>

        <Button title="Behance"
                  color ='#FFA500'
                  onPress={() => {Linking.openURL('https://www.behance.net/victhorianunes');}}/>

        <Button title="Github"
                  color ='#FFA500'
                  onPress={() => {Linking.openURL('https://github.com/victhorianunes');}}/>

         </View>

         
        
                  

        </ScrollView>

      )
}
 
export default App;

