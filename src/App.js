import { useEffect, useState } from 'react';
import './App.css';
import SquareComponent from './components/SquareComponent'

const initialState=["","","","","","","","",""]; 

function App() {

  const [gameState,updategameState]=useState(initialState);
  const [isXTurn,updateisXTurn]=useState(true);

  const onSquareClick=(index)=>{
    let strings=Array.from(gameState);
    strings[index]=isXTurn?"X":"O";
    updateisXTurn(!isXTurn);
    updategameState(strings);
  }

  useEffect(()=>{
    const winner=checkWinner();
    if(winner){
      alert(`${winner} wins!`);
      updategameState(initialState);
    }
    else if(isTie()){
      alert(`It's a Tie!`);
      updategameState(initialState);
    }
  },[gameState])

  const isTie=()=>{
    let i=0;
    while(i<9){
      if(gameState[i]=="")
        return false;
      else
        i++;
    }
    return true;
  }

  const checkWinner = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
    }
    return null;
}

  return (
    <div className="chessboard">
      <div className="row jc-center">
        <SquareComponent className="b-bottom-right" state={gameState[0]} onClick={()=>onSquareClick(0)} />
        <SquareComponent className="b-bottom-right" state={gameState[1]} onClick={()=>onSquareClick(1)} />
        <SquareComponent className="b-bottom" state={gameState[2]} onClick={()=>onSquareClick(2)} />
      </div>
      <div className="row jc-center">
        <SquareComponent className="b-bottom-right" state={gameState[3]} onClick={()=>onSquareClick(3)} />
        <SquareComponent className="b-bottom-right" state={gameState[4]} onClick={()=>onSquareClick(4)} />
        <SquareComponent className="b-bottom" state={gameState[5]} onClick={()=>onSquareClick(5)} />
      </div>
      <div className="row jc-center">
        <SquareComponent className="b-right" state={gameState[6]} onClick={()=>onSquareClick(6)} />
        <SquareComponent className="b-right" state={gameState[7]} onClick={()=>onSquareClick(7)} />
        <SquareComponent state={gameState[8]} onClick={()=>onSquareClick(8)} />
      </div>

      <button className="clear" onClick={()=>updategameState(initialState)}>Clear Game</button>

    </div>
  );
}

export default App;
