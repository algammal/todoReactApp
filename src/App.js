import React, { Component } from 'react';
import Items from './components/AddItem'
import List from './components/List'
import './App.css';

class App extends Component{
  state ={
    items:[]
}
deleteItem = (id)=>{
 let items = this.state.items
 let i =items.findIndex(item => item.id=== id)
 items.splice(i,1)
 this.setState({
   items
 })
}
addItem = (item) =>{
    item.id = Math.random()
    let items = this.state.items;
    items.push(item);
    this.setState({items})
    
   }
  render(){
    return (
      <div className="App">

        <Items addItem={this.addItem}/>
        <List deleteItem={this.deleteItem} items={this.state.items}/>
      </div>
  );
}
  
}

export default App;
