import React from 'react';
import logo from './logo.svg';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.css';




function Display(props){
  return(
    <div className="clicker__display">{props.value}</div>
  );
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count: 0
    }

    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
    this.refresh=this.refresh.bind(this);
  }

  increment(){
    this.setState({count: this.state.count+1  })
  }
  decrement(){
    let value = this.state.count-1;
    this.setState({count: value})
  }
  refresh(){
    this.setState({count: 0})
  }

  render(){
    return (
      <div className="clicker">
        <Display value={this.state.count} />
        <div className="clicker__controls">
          <button className="clicker__plus" onClick={this.increment}>
            <i className="fas fa-plus"></i>
          </button >
          <button className="clicker__refresh" onClick={this.refresh}>
            <i className="fas fa-sync-alt"></i>
          </button>
          <button className="clicker__minus" onClick={this.decrement}>
            <i className="fas fa-minus"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
