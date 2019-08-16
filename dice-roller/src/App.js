import React from 'react';
import Dice from './Dice.js'
import Collect from './collect.js'


export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
    diceRoller: 0,
    newSet:[]
}
    }  
    rollDice=()=>{
      let {dicerolled}=this.state;
      dicerolled=Math.floor(Math.random() * 6 + 1)
       this.setState({diceRoller:dicerolled })
    }
      newNums =()=>{
    let {newSet,diceRoller}=this.state
    let newRoll=newSet.concat(diceRoller)
    this.setState({newSet:newRoll})
      console.log(newRoll)
      console.log(diceRoller)
    }
    
    finalRoll =()=>{
      this.rollDice()
      this.newNums()
    }
    
    render(){
    return (
      <React.Fragment>
      <h2>Dice Roll Game </h2>
      <Dice finalRoll={this.finalRoll} diceRoller={this.rollDice} nums={this.state.diceRoller}/>
      <Collect  nums={this.state.newSet}this/>
      </React.Fragment>
     
      )}
      }
      