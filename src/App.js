import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import main from './../styles/main';

const App =()=> {

  const [cells, setCells] = useState([]);
  const [bottonCells, setButtonCells] = useState([]);
  const [winner, setWinner] = useState('');
  const [player, setPlayer] = useState(0);
  const [computer, setComputer] = useState(0);
  const [gameCounter, setGameCounter] = useState(0);
  const [takenCells, setTakenCells] = useState([]);
  const [availableCells, setAvailableCells] = useState([0,1,2,3,4,5,6,7,8]);
  const [availableCornerCells, setAvailableCornerCells] = useState([0,2,6,8]);
  let tmpCells=[];

  useEffect(()=>{
    resetCell();
  },[]);

  onPress=(val)=> {
    if(winner!=='') {
      return null;
    }
    tmpCells=cells;
    tmpCells[val]='x';
    setCells[tmpCells];
    let tmpTakenCell = takenCells;
    tmpTakenCell.push(val);
    setTakenCells(tmpTakenCell);
    loadCell(tmpCells) ;
    ComputerMove();
  }

  function resetCell() {
    setAvailableCells([0,1,2,3,4,5,6,7,8]);
    setAvailableCornerCells([0,2,6,8]);

    for(let x=0; x <9; x++) {
      tmpCells[x]='';
    }
    setCells(tmpCells);
    setWinner('');
    setTakenCells([]);
    loadCell(tmpCells) ;

    setGameCounter(gameCounter+1);
  }

  function loadCell(tmpCells) {
    let tmpButton=[];
    for(let x=0; x <9; x++) {
      tmpButton.push(
        <TouchableOpacity style={main.button} 
        disabled={(tmpCells[x]=='x' || tmpCells[x]=='o') ? true:false}
        onPress={()=> onPress(x)} >
          {(tmpCells[x]=='x') ? (
          <Icon name='close-outline' size={80} color={'#5a6163'} />
          ):null}
           {(tmpCells[x]=='o') ? (
          <Icon name='ellipse-outline' size={80} color={'white'} />
          ):null}
        </TouchableOpacity>
      );
    }

    setButtonCells(tmpButton);
  }
 
  function ComputerMove(){
    checkWinner() ;
    if(winner!=='') {
      return null;
    }

    tmpCells=cells;
    
    let tmpTakenCell =takenCells;
    let useRandom = true;

    let moves=['o','x'];
    for(let x =0; x< moves.length; x++) {
      if(
        ((tmpCells[1]==moves[x] && tmpCells[2]==moves[x]) || 
        (tmpCells[3]==moves[x] && tmpCells[6]==moves[x]) ||
        (tmpCells[4]==moves[x] && tmpCells[8]==moves[x]))  && tmpCells[0]=='') {
        tmpCells[0]='o';
        tmpTakenCell.push(0);
        useRandom=false;
        break;
      }
      else if(
        ((tmpCells[0]==moves[x] && tmpCells[2]==moves[x]) ||
        (tmpCells[4]==moves[x] && tmpCells[7]==moves[x])) && 
        tmpCells[1]=='') {
          tmpCells[1]='o';
          tmpTakenCell.push(1);
          useRandom=false;
          break;
      }
      else if(
        ((tmpCells[0]==moves[x] && tmpCells[1]==moves[x]) || 
        (tmpCells[5]==moves[x] && tmpCells[8]==moves[x]) ||
        (tmpCells[4]==moves[x] && tmpCells[6]==moves[x])) && tmpCells[2]=='') {
          tmpCells[2]='o';
          tmpTakenCell.push(2);
          useRandom=false;
          break;
      }
      else if(
        ((tmpCells[0]==moves[x] && tmpCells[6]==moves[x]) || 
          (tmpCells[4]==moves[x] && tmpCells[5]==moves[x])) &&
        tmpCells[3]=='') {
          tmpCells[3]='o';
          tmpTakenCell.push(3);
          useRandom=false;
          
          break;
      }
      else if (
        ((tmpCells[2]==moves[x] && tmpCells[6]==moves[x]) || 
        (tmpCells[3]==moves[x] && tmpCells[5]==moves[x]) || 
        (tmpCells[0]==moves[x] && tmpCells[8]==moves[x]) || 
        (tmpCells[1]==moves[x] && tmpCells[7]==moves[x])) &&
        tmpCells[4]=='') {
          tmpCells[4]='o';
          tmpTakenCell.push(4);
          useRandom=false;
          break;
      }
      else if(
        ((tmpCells[2]==moves[x] && tmpCells[8]==moves[x]) || 
        (tmpCells[3]==moves[x] && tmpCells[4]==moves[x]) ) && tmpCells[5]=='') {
          tmpCells[5]='o';
          tmpTakenCell.push(5);
          useRandom=false;
          break;
      }
      else if(
        ((tmpCells[0]==moves[x] && tmpCells[3]==moves[x]) || 
        (tmpCells[2]==moves[x] && tmpCells[4]==moves[x]) ||
        (tmpCells[7]==moves[x] && tmpCells[8]==moves[x])) && tmpCells[6]=='') {
          tmpCells[6]='o';
          tmpTakenCell.push(6);
          useRandom=false;
          break;
      }
      else if(
        ((tmpCells[1]==moves[x] && tmpCells[4]==moves[x] ) || 
        (tmpCells[6]==moves[x] && tmpCells[8]==moves[x])) && tmpCells[7]=='') {
          tmpCells[7]='o';
          tmpTakenCell.push(7);
          useRandom=false;
          break;
      }
      else if(
        ((tmpCells[0]==moves[x] && tmpCells[4]==moves[x] ) || 
        (tmpCells[2]==moves[x] && tmpCells[5]==moves[x]) ||
        (tmpCells[6]==moves[x] && tmpCells[7]==moves[x])) && tmpCells[8]=='') {
        tmpCells[8]='o';
        tmpTakenCell.push(8);
        useRandom=false;
        break;
      }
    }
    
    let tmpAvailableCell = [];
    let tmpAvailableCornerCell=[];

    for(let x =0; x < availableCells.length; x++) {
      if(!takenCells.includes(availableCells[x])) {
        tmpAvailableCell.push(availableCells[x]);
      }
    }
    setAvailableCells(tmpAvailableCell);

    for(let x =0; x < availableCornerCells.length; x++) {
      if(!takenCells.includes(availableCornerCells[x])) {
        tmpAvailableCornerCell.push(availableCornerCells[x]);
      }
    }
    setAvailableCornerCells(tmpAvailableCornerCell);

    if(useRandom) {
      if(tmpAvailableCell.includes(4)) {
        //take the corner as first move if available
        tmpCells[4]='o';
        tmpTakenCell.push(4);
      } else if (tmpAvailableCornerCell.length == 4) {
        //take 1 of the corner if all 4 are available
        let tmpRand = Math.floor(Math.random() * tmpAvailableCornerCell.length);
        tmpCells[tmpAvailableCornerCell[tmpRand]]='o';
        tmpTakenCell.push(tmpAvailableCornerCell[tmpRand]);
      } else {

        let tmpRand = Math.floor(Math.random() * tmpAvailableCell.length);
        tmpCells[tmpAvailableCell[tmpRand]]='o';
        tmpTakenCell.push(tmpAvailableCell[tmpRand]);
      }
    }

    setCells[tmpCells];
    setTakenCells(tmpTakenCell);
    loadCell(tmpCells) ;

    checkWinner();
  }

  function checkWinner() {
    let moves=['x','o'];
    for(let x=0; x<2; x++) {
      if(cells[0]==moves[x] && cells[1]==moves[x] && cells[2]==moves[x]) {
        updateWinner(moves[x])
        break;
      }
      else if(cells[3]==moves[x] && cells[4]==moves[x] && cells[5]==moves[x]) {
        updateWinner(moves[x])
        break;
      }
      else if(cells[6]==moves[x] && cells[7]==moves[x] && cells[8]==moves[x]) {
        updateWinner(moves[x])
        break;
      }
      else if(cells[0]==moves[x] && cells[3]==moves[x] && cells[6]==moves[x]) {
        updateWinner(moves[x])
        break;
      }
      else if(cells[1]==moves[x] && cells[4]==moves[x] && cells[7]==moves[x]) {
        updateWinner(moves[x])
        break;
      }
      else if(cells[2]==moves[x] && cells[5]==moves[x] && cells[8]==moves[x]) {
        updateWinner(moves[x])
        break;
      }
      else if(cells[0]==moves[x] && cells[4]==moves[x] && cells[8]==moves[x]) {
        updateWinner(moves[x])
        break;
      }
      else if(cells[2]==moves[x] && cells[4]==moves[x] && cells[6]==moves[x]) {
        updateWinner(moves[x])
        break;
      }
    }
  }
  
  function updateWinner(win) {
    if(win=='x') {
      setPlayer(player+1)
      setWinner('Player');
    }
    else {
      setComputer(computer+1);
      setWinner('Opponent');
    }
  }

  function renderResetButton() {
    return(
      <TouchableOpacity style={main.btn_Reset} onPress={()=> resetCell()} >
          <Text style={{color:'white', fontSize:16}}><Icon name='reload' size={18}  > </Icon> Restart</Text>
      </TouchableOpacity>
    );
  }

  function renderWinnerView() {
    if(winner=='') {
      return null;
    }
    return(
      <View style={main.popupContainer}>
        <View style={main.popupContainer_opacity50} />
        <View style={main.popupContainer_view}>
          <Text style={{fontSize:40, fontWeight:600, color:'white'}}>{winner}</Text>
          <Text style={{fontSize:60, fontWeight:900, marginTop:10, color:'white'}}>Win!</Text>
          {renderResetButton()}
        </View>
      </View>
    );
  }

  function renderDrawView(){
    if(availableCells.length > 0) {
      return null;
    }
    return(
      <View style={main.popupContainer}>
        <View style={main.popupContainer_opacity50} />
        <View style={main.popupContainer_view}>
              <Text style={{fontSize:40, fontWeight:600, color:'white'}}>Draw</Text>
              {renderResetButton()}
        </View>
      </View>
    );
  }

  return (
      <View style={main.body}>
        <View style={main.TitleView}>
          <Text style={{fontWeight:600, fontSize:18}}>Tic-Tac-Toe</Text>
        </View>

        <View style={main.gameCounterContainer} >
          <Text style={{fontSize:40}}>Game: {gameCounter}</Text>
        </View>

        <View style={{width:'100%', height:50, flexDirection:'row'}} >
          <View style={[main.scoreContainer, { paddingLeft:15, borderRightWidth:1, borderColor:'grey'}]}>
              <View style={main.scoreIconContainer}>
                <Icon name='close-outline' size={50} color={'#5a6163'} />
              </View>           
              <View style={main.scoreTextContainer}>
                <Text style={main.txt_score}>{player}</Text>
              </View>
          </View>


          <View style={[main.scoreContainer,{ paddingRight:15, justifyContent:'flex-end' }]}>
              <View style={main.scoreIconContainer}>
                <Icon name='ellipse-outline' size={50} color={'#5a6163'} />
              </View>           
              <View style={main.scoreTextContainer}>
                <Text style={main.txt_score}>{computer}</Text>
              </View>
          </View>
        </View>

        <View style={main.buttonContainer}>
          <View style={[main.button, {borderRightWidth:1}]}  />
          <View style={[main.button, {borderRightWidth:1}]}  />
          <View style={main.button}  />
          <View style={[main.button, {borderRightWidth:1, borderTopWidth:1, }]}  />
          <View style={[main.button, {borderRightWidth:1, borderTopWidth:1, }]}  />
          <View style={[main.button, { borderTopWidth:1, }]}  />
          <View style={[main.button, { borderTopWidth:1, borderRightWidth:1, }]}  />
          <View style={[main.button, { borderTopWidth:1, borderRightWidth:1, }]}  />
          <View style={[main.button, { borderTopWidth:1, }]}  />
        </View>

        <View style={main.buttonView}>
          {bottonCells}
        </View>
        
        {renderWinnerView()}
        {renderDrawView()}

    </View>
  );
};



export default App;