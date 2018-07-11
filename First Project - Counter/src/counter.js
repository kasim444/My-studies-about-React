import  React from 'react';
class Counter extends React.Component{
    state = {
        number:0
    }

    decrement = () => {
        this.setState({ number: --this.state.number });
    }

    increment = () => {
        this.setState({ number: ++this.state.number });
    }

    render(){
        return(
            <div>
                <h2>{ this.state.number }</h2>
                <button onClick={ this.decrement }>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
export default Counter;