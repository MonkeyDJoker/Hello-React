import React, { Component } from 'react'

export default class Message extends Component {

    state = { num: 0 }

    add = () => {
        // const {num} = this.state
        // this.setState({num:num+1})
        // 函数形式的setstate
        this.setState(
            (state) => ({
                num: state.num + 1
            })
        )
    }

    render() {
        return (
            <div>
                <h1>Message, number increase {this.state.num} </h1>
                <button onClick={this.add} >Push Me</button>

            </div>
        )
    }
}

