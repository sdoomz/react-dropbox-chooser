import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import DropboxChooser from '../';

const APP_KEY = '158dtt39zf0zj9k';

function App() {
  return (
    <div className="container">
      <DropboxChooser appKey={APP_KEY}
                      success={files => console.log('choosed:', files)}
                      cancel={() => console.log('closed')}
                      multiselect={true} >
        <span>Click me!</span>
        <div className="dropbox"></div>
      </DropboxChooser>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));