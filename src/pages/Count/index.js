import React, { Component } from 'react'
//get state from store
import store from '../../redux/store'

export default class Count extends Component {

  // state = {count:0}

  increase = ()=>{
    // console.log(this)
    // const {count} = this.state
    const {value} = this.selectRef
    // this.setState({count:count+value*1})  //乘以1 强制string类型转换成number
    store.dispatch({type:'increment',data:value})
  }

  decrease = ()=>{
    const {value} = this.selectRef
    store.dispatch({type:'decrement',data:value})
  }

  checkOdd = ()=>{
    const {value} =this.selectRef
    if(store.getState() % 2 !== 0){
      store.dispatch({type:'increment',data:value})
    }
  }

  delayAdd = ()=>{
    const {value} =this.selectRef
    setTimeout(()=>{
      store.dispatch({type:'increment',data:value})
    },1000)
  }

  //判断是否需要更新，调用setState 传递一个空值，自动更新所有的state
  componentDidMount(){
    store.subscribe(
      ()=>{
        this.setState({})
      }
    )
  }

  render() {
    return (
      <div>
        {/* <h1> Current Total Sum is: {this.state.count} </h1> */}
        <h1> Current Total Sum is: { store.getState()} </h1>
        <select ref={c=>this.selectRef = c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button onClick={this.increase} >+</button>
        <button onClick={this.decrease} >-</button>
        <button onClick={this.checkOdd} >Current Total is Odd</button>
        <button onClick={this.delayAdd} >Suprise Add</button>
      </div>
    )
  }
}
 