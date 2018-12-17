import React, { Component } from 'react';
import './App.css';


class ActivateSanta extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }
        const e = React.createElement;

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Drop it Santa Stream</h1>
        </header>
        <ActivateSanta/>
          <p> </p>

          <iframe title="Stream" width="560" height="349" src="https://www.youtube.com/embed/live_stream?channel=yourChannelid"
                  frameBorder="0" allowFullScreen>

          </iframe>

          <h1>What is this?</h1>
      <p>This is an experiment to learn react. </p>
      </div>
    );
  }
}

export default App;
