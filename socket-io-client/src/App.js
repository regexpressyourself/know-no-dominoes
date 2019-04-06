import React, {Component} from 'react';
import socketIOClient from 'socket.io-client';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: 'http://127.0.0.1:4001',
    };
  }

  componentDidMount() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on('data', data => this.setState({response: data}));
  }

  render() {
    if (this.state.response) {
      return (<p>Got data: {this.state.response}</p>);
    }
    else {
      return (<p>Loading...</p>);
    }
  }
}
export default App;
