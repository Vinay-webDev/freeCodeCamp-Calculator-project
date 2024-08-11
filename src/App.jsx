import React, { useState, useEffect } from 'react';

const Data = [
              {id:'clear', value:'AC'},
              {id:'divide', value:'/'},
              {id:'multiply', value:'X'},
              {id:'seven', value:7},
              {id:'eight', value:8},
              {id:'nine', value:9},
              {id:'substract', value:'-'},
              {id:'four', value:4},
              {id:'five', value:5},
              {id:'six', value:6},
              {id:'plus', value:'+'},
              {id:'one', value:1},
              {id:'two', value:2},
              {id:'three', value:3},
              {id:'equals', value:'='},
              {id:'zero', value:0},
              {id:'decimal', value:'.'}
]

const operators = ['AC', '/', 'X', '-', '+', '=', '.'];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

//Display component
const Display = (props = { input, output }) => {
  return(
    <div className="output" >
      <span className="result" >{output}</span>
      <span id="display" className="input">{input}</span>
    </div>
  );
}


function App() {
  
  const [input, setInput] = useState('');
  const [output, setOutput] = useState();

  return (
    <div className="container">
      <div className="calculator">
        <Display input={input} output={output} />
      </div>
    </div>
  );
}

export default App
