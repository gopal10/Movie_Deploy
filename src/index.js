import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchMovie from './searchMovie'


class Main extends React.Component {
  render() {
   return (
    <div className="container">
    <h1 className="title">Movie App</h1>
    <SearchMovie/>
    </div>
   );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));