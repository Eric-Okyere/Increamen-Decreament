import React, { Component } from 'react'

export default class ClassComponent extends Component {
 
 constructor(props){
    super()
    this.state ={number: 0}
    
 }
 
  Increament=()=>{
    this.setState({number:this.state.number +1})
   }
  Decreament=()=>{
    this.setState({number:this.state.number -1})
   }


    render() {
    return (
      <div className='component'>
       
      <h1>Count your Number {this.state.number}</h1>
      <button onClick={this.Increament}>Up</button>
      <button onClick={this.Decreament}>Down</button>
      </ div>
    )
  }
}
