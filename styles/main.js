import React from 'react';
 import { StyleSheet } from 'react-native';

const main = StyleSheet.create({
    body: { 
        flex:1,
        height:'100%',
        width:'100%',
        backgroundColor:'#fff',
        alignItems:'center',
        paddingTop:15
    },
    TitleView: {
        height:50, 
        width:'90%',
        justifyContent:'center', 
        alignItems:'center',
        padding:15
    },
    buttonContainer:{
        position:'absolute',
        top:180,
        height:300, 
        width:'90%' ,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        backgroundColor:'#14bdac',
        borderRadius:5
        
    },
    buttonView:{
        position:'absolute',
        top:180,
        height:300, 
        width:'90%' ,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        borderRadius:15
        
    },
    button: {
        justifyContent:'center', 
        alignItems:'center', 
        height:100,
        width:'33.3%', 
        borderColor:'grey'

    },
    btn_Reset:{
        width:200, 
        height:50, 
        backgroundColor:'#2c81d3', 
        borderRadius:5, 
        alignItems:'center', 
        justifyContent:'center', 
        marginTop:15
    },
    popupContainer: {
        position:'absolute', 
        height:'100%', 
        width:'100%', 
        alignItems:'center'
    },
    popupContainer_opacity50:{
        backgroundColor:'black', 
        position:'absolute', 
        height:'100%', 
        width:'100%', 
        opacity:0.50
    },
    popupContainer_view:{
        width:'100%', 
        minHeight:100, 
        alignItems:'center', 
        marginTop:200
    },
    scoreContainer:{
        height:40, 
        width:'50%', 
        flexDirection:'row'
    },
    scoreTextContainer:{
        width:50, 
        height:50, 
        justifyContent:'center'
    },
    scoreIconContainer: {
        width:50, 
        height:50, 
        alignItems:'center', 
        justifyContent:'center'
    },
    txt_score:{
        fontSize:30, 
        fontWeight:600, 
        color:'#5a6163'
    },
    gameCounterContainer:{
        width:'100%', 
        height:40, 
        justifyContent:'center', 
        alignItems:'center', 
        marginBottom:15
    }
 });

 export default main;
;

