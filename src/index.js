import React from 'react';
import ReactDOM from 'react-dom';
import MoviesItem from "./MoviesItem";


class App extends React.Component{

  render(){
    return(
    <MoviesItem/>
    )
  }
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
);
