import React, { Component } from 'react';
import Items from './components/AddItem'
import List from './components/List'
import './App.css';

class App extends Component{
  state ={
    items:[]
}
addItem = (item) =>{
    let items = this.state.items;
    items.push(item);
    this.setState({items})
    
   }
  render(){
    return (
      <div className="App">

        <Items addItem={this.addItem}/>
        <List items={this.state.items}/>
      </div>
  );
}
  
}

export default App;
