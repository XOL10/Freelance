//Import React & ReactDom from
import React from 'react'
import ReactDom from 'react-dom'
// Create a React component
const App = () => {
    const buttonText = 'Click me!'
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText} 
            </button>
        </div>
    );
};
//Take a React component and show it on the screen
ReactDom.render(<App />, document.querySelector('#root'));