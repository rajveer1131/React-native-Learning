import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,StyleSheet, useColorScheme

} from 'react-native'


export default function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';
const backgroundStyle = {
    backgroundColor: isDarkMode ? style.darkBg.backgroundColor : style.whiteBg.backgroundColor,
  };
    
    return(
        <SafeAreaView style={[backgroundStyle,{paddingHorizontal:20}]} >
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            
            <View>
                <Text style={{backgroundColor:'red',padding:10,fontSize:20,color:'black',fontWeight:'bold',textAlign:'center'}}>Home Page</Text>
            </View>
            <ScrollView contentInsetAdjustmentBehavior="automatic">

            <View style={style.container}>

        
                <Text style={style.red}>Navbar</Text>
            
        
                <Text style={style.red}>Navbar</Text>
            
        
                <Text style={style.red}>Navbar</Text>
            
        
                <Text style={style.red}>Navbar</Text>
            
            </View>
            </ScrollView>
            <View>
                <Text style={style.blue}>Header</Text>
            </View>
            <View>
                <Text style={style.roll}>body</Text>
            </View>
            <View>
                <Text style={style.roll}>body</Text>
            </View>
            <View>
                <Text style={style.roll}>body</Text>
            </View>
            <View>
                <Text style={style.roll}>body</Text>
            </View>
            <View>
                <Text style={style.roll}>body</Text>
            </View>
            <View>
                <Text style={style.roll}>body</Text>
            </View>
            <View>
                <Text style={style.roll}>body</Text>
            </View>
            <View>
                <Text style={style.roll}>body</Text>
            </View>
            <View>
                <Text style={style.footer}>Footer</Text>
            </View>


        </ScrollView>
        </SafeAreaView>

    );
}

const style=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        gap:10,
        // justifyContent:'center',
        alignItems:'center',
        // overflow:'hidden'
    },
    darkBg:{
        backgroundColor:'black'
    },
    whiteBg:{
        backgroundColor:'white'
    },
    red:{
        backgroundColor:'red',
        fontSize:20,
        borderRadius:20,
        padding:10,
        margin:5,

    },
    blue:{
        color:'yellow',
        backgroundColor:'blue',
        fontSize:40,
        borderRadius:50,
        padding:20,
        margin:20,

    },
    roll:{
        fontSize:40,
        backgroundColor:'green',
        padding:30,
        borderRadius:40,
        flex:1,
        marginBottom:20

    },
    footer:{
        backgroundColor:'black',
        // borderRadius:,
        borderStartEndRadius:40,
        padding:20,
        color:"white",
        marginBottom:20,
        fontSize:40,
    }
})