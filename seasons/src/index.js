import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
class App extends React.Component {
    
    constructor(props){
        super(props);
    };
    
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.error(err)
        );
        return <div>Latitude: </div>
    };
};

ReactDom.render(<App />, document.querySelector('#root'));